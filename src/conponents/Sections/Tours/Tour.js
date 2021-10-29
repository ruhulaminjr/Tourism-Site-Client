import React from "react";
import { NavLink } from "react-router-dom";

const Tour = ({ tour }) => {
  const { Location, Title, Duration, Price, img, _id } = tour;
  return (
    <div>
      <div className="p-2">
        <div className="flex relative">
          <img
            alt={Location}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={img}
          />
          <div className="px-8 py-24 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex flex-col items-center gap-2 justify-center">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              {Location}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {Title}
            </h1>
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                width="30"
                alt=""
              />
              {Duration} Days
            </div>
            <div className="mt-5">Cost: ${Price}</div>
            <NavLink
              to={`/booktour/${_id}`}
              className="px-4 py-2 bg-green-700 text-white"
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
