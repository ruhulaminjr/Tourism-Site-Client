import axios from "axios";
import React from "react";

const Manage = ({ order, render, setRender }) => {
  const { Location, img } = order.book;
  const removeCartHandler = () => {
    const confirm = window.confirm("Are You Sure Want To Delete");
    if (confirm) {
      axios
        .delete(
          `https://blooming-hollows-44421.herokuapp.com/cartDelete/${order._id}`,
          {
            email: order.Email,
          }
        )
        .then((Result) => {
          if (Result.data.acknowledged) {
            setRender(!render);
            alert("Your Cart Item Deleted Successfully");
          }
        });
    }
  };
  const approveHandler = (approved) => {
    const url = `https://blooming-hollows-44421.herokuapp.com/update-status/${order._id}`;
    if (approved) {
      axios.put(url, { status: "approved" }).then((result) => {
        setRender(!render);
      });
    } else {
      axios.put(url, { status: "pending" }).then((result) => {
        setRender(!render);
      });
    }
  };
  return (
    <div className="bg-gray-100 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center">
      <div>
        <img
          className="object-center object-cover w-full object-cover"
          style={{ width: "100%", height: "300px" }}
          src={img}
          alt=""
        />
      </div>
      <div className="text-center py-8 sm:py-6">
        {order.status === "pending" ? (
          <p className="text-xl text-red-500 font-bold mb-2">{order.status}</p>
        ) : (
          <p className="text-base text-green-600 font-bold mb-2">
            {order.status}
          </p>
        )}
        <p className="text-xl text-gray-700 font-bold mb-2">{Location}</p>
        <p className="text-md text-gray-600 font-normal">Email:{order.Email}</p>
        <p className="text-md text-gray-600 font-normal">Name:{order.Name}</p>
      </div>
      <div className="flex justify-between gap-4 w-full">
        {order.status === "pending" ? (
          <button
            className="px-4 py-2 rounded text-white bg-green-500"
            onClick={() => approveHandler(true)}
          >
            Approve
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded text-white bg-green-500"
            onClick={() => approveHandler(false)}
          >
            Cancel
          </button>
        )}

        <button
          className="px-4 py-2 rounded text-white bg-red-600"
          onClick={removeCartHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Manage;
