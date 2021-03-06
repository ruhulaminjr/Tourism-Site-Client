import axios from "axios";
import React, { useEffect, useState } from "react";
import useDocumentTitle from "../../../hooks/useTitle";
import Manage from "./Manage";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [render,setRender] = useState(false)
  useDocumentTitle("Manage Your Orders");
  useEffect(() => {
    axios
      .get("https://blooming-hollows-44421.herokuapp.com/allOrders")
      .then((Result) => {
        setOrders(Result.data);
      });
  }, [render]);
  return (
    <div className="container mx-auto">
      <div className="text-center py-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Manage All Our Orders
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {orders.map((order) => (
            <Manage order={order} key={order._id} render={render} setRender={setRender}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
