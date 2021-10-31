import React from "react";
import Banner from "../../Sections/Banner/Banner";
import Gallery from "../../Sections/Gallery/Gallery";
import Review from "../../Sections/Review/Review";
import Tours from "../../Sections/Tours/Tours";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tours />
      <Gallery/>
      <Review/>
    </div>
  );
};

export default Home;
