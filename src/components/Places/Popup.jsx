/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

const Popup = ({ isOpen, onClose, place }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div
        className="bg-gray-800 bg-opacity-75 w-full h-full absolute"
        onClick={onClose}
      ></div>
      <div className="w-96 bg-white p-6 rounded-lg popup-content overflow-y-auto max-h-full transform scale-100 backdrop-blur-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <IoCloseOutline size={24} />
        </button>
        <h2 className="border-l-8 border-primary/50 pl-2 text-xl font-bold mb-2">
          {place.title}
        </h2>
        <hr className="my-2 border-gray-300" />
        <div className="mb-4">
          <div className="flex justify-center">
            <img
              src={place.img}
              alt={place.title}
              className="max-w-full h-auto max-h-48 rounded-lg"
            />
          </div>
        </div>
        <p className="text-sm mb-4">{place.description}</p>
        <p className="font-bold text-sm mb-4">
          Best Time to visit: {place.time}
        </p>
        <div className="flex justify-center">
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
              What are you waiting for, PLAN NOW!!!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
