import axios from "axios";
import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://blooming-hollows-44421.herokuapp.com/get-tours")
      .then((result) => {
        setData(result.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-2 text-green-700 text-center">
        Trending Tours
      </h2>
      {isloading ? (
        <div className="flex justify-center items-center">
          <div
            className="
      loader
      ease-linear
      rounded-full
      border-8 border-t-8 border-gray-200
      h-32
      w-32
    "
          ></div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8">
          {data.map((tour) => (
            <Tour key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tours;
