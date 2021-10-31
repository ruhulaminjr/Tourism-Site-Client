import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useDocumentTitle from "../../../hooks/useTitle";
import Cart from "./Cart";

const MyCart = () => {
  const [carts, setCarts] = useState([]);
  const [render, setRender] = useState(false);
  const { user } = useAuth();
  useDocumentTitle("My Carts");
  useEffect(() => {
    axios
      .get(`https://blooming-hollows-44421.herokuapp.com/carts/${user.email}`)
      .then((Result) => {
        if (Result.data) {
          setCarts(Result.data);
        }
      });
    // eslint-disable-next-line
  }, [render]);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-2 text-gray-800 text-center">
        My Booking Carts
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-4">
        {carts?.map((cart) => (
          <Cart
            key={cart._id}
            item={cart}
            setRender={setRender}
            render={render}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
