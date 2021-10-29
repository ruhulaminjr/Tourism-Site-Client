import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="py-28 bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">
            Travel, Enjoy Live New Life
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Travel is the only thing you buy that makes you richer
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800">
            Life is a journey, not a destination
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
