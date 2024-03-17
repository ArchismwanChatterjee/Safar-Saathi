/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Ankit Das",
    text: "Amazing design and a great collection of places, keep it up!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Karan Kawathia",
    text: "Loved the work, keep it up! looking forward to more such places",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Eshan",
    text: "Amazing experience! Loved the work! Looking forward to more such places",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 1,
    name: "Krishnava",
    text: "Amazing travel planning and execution! Loved the work!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 1,
    name: "Archismwan Chatterjee",
    text: "Loved the virtual tour feature and the handy chatbot keep it up! Looking forward to more such places",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <br></br>
            <p className="text-xs text-gray-400">
              Our user's valuable feedback which keeps us motivated and helps us
              to improve our services to the wonderful community
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
