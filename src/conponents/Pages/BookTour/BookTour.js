import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const BookTour = () => {
  const [booking, setBooking] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { user } = useAuth();
  const onSubmit = (info) => {
    info.book = booking;
    axios.post("http://localhost:5000/savebooking", info).then((result) => {
      if (result.data.acknowledged) {
        console.log("booking Success");
      }
    });
  };
  useEffect(() => {
    const url = `http://localhost:5000/booking/${id}`;
    axios.get(url).then((result) => {
      setBooking(result.data);
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto mt-16 flex items-center justify-center h-full flex-col gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 flex flex-col gap-5 bg-white justify-center justify-center items-center py-8 rounded"
        >
          <h1 className="lg:text-4xl text-lg text-center font-bold text-gray-700">
            {booking.Title}
          </h1>
          <input
            {...register("Email")}
            placeholder="Your Email"
            type="email"
            defaultValue={user.email}
            className=" focus:outline-none w-3/4 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Name")}
            placeholder="Your Name"
            type="text"
            defaultValue={user.displayName}
            className=" focus:outline-none w-3/4 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <span className=" focus:outline-none w-3/4 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4">
            Destination: {booking.Location}
          </span>
          <span className=" focus:outline-none w-3/4 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4">
            {booking.Duration} Days Travel Package
          </span>
          <span className=" focus:outline-none w-3/4 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4">
            Travel costs ${booking.Price}
          </span>
          <button
            className="w-3/4 py-4 px-4 text-white rounded bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800"
            type="submit"
          >
            Book This Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTour;
