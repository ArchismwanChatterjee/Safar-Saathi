/* eslint-disable no-unused-vars */
import React from "react";
import TravelImg from "../../assets/travelbox.png";

import { GrArticle } from "react-icons/gr";
import { GoCopilot } from "react-icons/go";
import { PiVirtualRealityBold } from "react-icons/pi";
import { FcPlanner } from "react-icons/fc";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={TravelImg}
                  alt="biryani img"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Explore all corners of India with us
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  Safar Saathi simplifies this tedious process into a few
                  clicks, offering quick, efficient, and tailored travel
                  planning. Leave the hassale to us and enjoy the ultimate
                  travel experience.
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 font-bold text-sm mb-4 opacity-70">
                      <PiVirtualRealityBold className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Virtual Tour</p>
                    </div>
                    <div className="flex items-center gap-4 font-bold text-sm mb-4 opacity-70">
                      <FcPlanner className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Tour Planner</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 font-bold text-sm mb-4 opacity-70">
                      <GoCopilot className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>AI Powered Chatbot</p>
                    </div>
                    <div className="flex items-center gap-4 font-bold text-sm mb-4 opacity-70">
                      <GrArticle className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Travel Blogs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
