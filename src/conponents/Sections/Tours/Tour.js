import React from "react";
import { NavLink } from "react-router-dom";

const Tour = ({ tour }) => {
  const { Location, Title, Duration, Price, img, _id, Desc } = tour;
  return (
    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
      <div
        className="relative z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))",
        }}
      >
        <img className="w-full" src={img} alt="" style={{ height: "400px" }} />
      </div>
      <div className="pt-2 pb-4 text-gray-800 text-center text-lg">
        <p>{Title}</p>
        <p className="text-sm">{Desc}</p>
      </div>

      <div className="pb-6 uppercase text-center tracking-wide flex justify-around">
        <div className="cost">
          <p className="text-gray-400 text-sm">Cost</p>
          <p className="text-lg font-semibold text-blue-300">${Price}</p>
        </div>
        <div className="book">
          <p className="text-gray-400 text-sm mb-4">{Location}</p>

          <NavLink
            to={`/booktour/${_id}`}
            className="text-white bg-green-500 px-4 py-2 rounded"
          >
            Book Now
          </NavLink>
        </div>
        <div className="following">
          <p className="text-gray-400 text-sm">Duration</p>
          <p className="text-lg font-semibold text-blue-300">{Duration} days</p>
        </div>
      </div>
    </div>
  );
};

export default Tour;
