import React from "react";

const Review = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:mb-0 mb-8 text-center">
          What Our Customers Say?
        </h1>
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.pinimg.com/originals/90/2a/39/902a392d7af51b9ef526944138d15c98.jpg"
                />
                <p className="leading-relaxed">
                  Look to the Better Business Bureau (BBB) for complaints filed
                  in the company's primary area of business. Consider asking for
                  client references, and contact those references to get the
                  opinions of past travelers.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">Traveler</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://millennialboss.com/wp-content/uploads/2017/05/quotes-about-travel-for-girls.jpg"
                />
                <p className="leading-relaxed">
                  Travel agents are useful if you're doing a very costly or
                  complex trip, planning a honeymoon or something fancy, or
                  traveling with a large group. ... They are also perfect for
                  people who just don't want to handle a big,
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">Traveler</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/14/07/tom-hanks.jpg"
                />
                <p className="leading-relaxed">
                  Booking with travel agents is often cheaper than booking
                  online as they have access to awesome money-saving deals.
                  Privy to secret airline prices, travel agents book scores of
                  air tickets each day and will be able to easily
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Tom Hanks
                </h2>
                <p className="text-gray-500">Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
