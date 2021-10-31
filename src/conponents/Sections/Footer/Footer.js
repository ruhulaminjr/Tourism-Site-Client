import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-8">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-8 mx-auto">
        <div className="flex flex-wrap items-baseline lg:justify-center">
          <span className="mt-2 text-md text-green-900">
            {" "}
            Copyright © 2021{" "}
            <span className="text-wickedblue hover:text-gray-300">
              Destination
            </span>{" "}
            All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
