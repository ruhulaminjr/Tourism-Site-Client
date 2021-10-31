import React from "react";

const Gallery = () => {
  return (
    <section className="text-gray-800 body-font">
      <div className="container p-4 mx-auto flex flex-wrap">
        <div className="flex w-full mb-4 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0">
            Most Beautiful Places In The world
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/ha-long-bay/pagePropertiesImage/ha-long-bay.jpg.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/06/01/38547.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-935746242-1567619461.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://wallpaperaccess.com/full/1361157.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://www.indochinavoyages.com/wp-content/uploads/2017/06/The-ancient-beauty-of-Angkor-Wat.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
