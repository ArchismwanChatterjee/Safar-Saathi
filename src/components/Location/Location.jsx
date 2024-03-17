/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location: 
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Netaji+Subhash+Engineering+College,+Techno+City,+Garia,+West+Bengal,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
