import axios from "axios";
import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/get-tours").then((result) => {
      setData(result.data);
    });
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-2 text-green-700 text-center">
        Trending Tours
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-8">
        {data.map((tour) => (
          <Tour key={tour._id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
