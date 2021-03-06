import axios from "axios";
import React from "react";

const Cart = ({ item, setRender, render }) => {
  const { Title, img } = item.book;
  const removeCartHandler = () => {
    const confirm = window.confirm("Are You Sure Want To Delete");
    if (confirm) {
      axios
        .delete(
          `https://blooming-hollows-44421.herokuapp.com/cartDelete/${item._id}`,
          {
            email: item.Email,
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
