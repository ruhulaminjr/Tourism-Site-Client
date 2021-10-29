import axios from "axios";
import { Result } from "postcss";
import React from "react";

const Cart = ({ item }) => {
  const { Title, img } = item.book;
  const removeCartHandler = () => {
    axios
      .delete(`http://localhost:5000/cartDelete${item._id}`, { id: item._id })
      .then((Result) => {
        console.log(Result.data);
      });
  };
  return (
    <div className="w-full lg:w-3/4 p-2">
      <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
        <img
          className="block h-auto w-full lg:w-48 flex-none bg-cover h-24 "
          src={img}
          alt=""
        />
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col  gap-2 leading-normal">
          <div className="text-black font-bold text-xl mb-2 leading-tight">
            {Title}
          </div>
          {item.status === "pending" ? (
            <span className="text-md text-yellow-700">Pending</span>
          ) : (
            <span className="text-md text-green-700">Approved</span>
          )}
        </div>
        <button
          className="text-white bg-gray-500 px-4 py-2 rounded justify-self-end lg:self-end"
          onClick={removeCartHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Cart;
