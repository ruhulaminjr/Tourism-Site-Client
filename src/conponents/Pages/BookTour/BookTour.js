import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const BookTour = () => {
  const [booking, setBooking] = useState({});
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const onSubmit = (info) => {
    info.book = booking;
    info.status = "pending";
    axios.post("http://localhost:5000/savebooking", info).then((result) => {
      if (result.data.acknowledged) {
        history.push("/carts");
      }
    });
  };
  useEffect(() => {
    const url = `http://localhost:5000/booking/${id}`;
    axios.get(url).then((result) => {
      setBooking(result.data);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="container mx-auto mt-16 flex items-center justify-center h-full flex-col gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2  flex flex-col gap-5 bg-white justify-center justify-center items-center py-8 rounded"
        >
          <h1 className="lg:text-4xl text-lg text-center font-bold text-gray-700">
            {booking.Title}
          </h1>
          <input
            {...register("Email")}
            placeholder="Your Email"
            type="email"
            defaultValue={user.email}
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Name")}
            placeholder="Your Name"
            type="text"
            defaultValue={user.displayName}
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Address")}
            placeholder="Your Address"
            type="text"
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <input
            {...register("Phone")}
            placeholder="Contact Number"
            type="text"
            className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4"
          />
          <span className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4">
            Destination: {booking.Location}
          </span>
          <span className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4">
            {booking.Duration} Days Travel Package
          </span>
          <span className=" focus:outline-none w-4/5 text-sm text-black placeholder-gray-500  border-b border-gray-800 py-4">
            Travel costs ${booking.Price}
          </span>
          <button
            className="w-3/4 py-4 px-4 text-white rounded bg-green-400 hover:bg-green-600 text-white"
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
