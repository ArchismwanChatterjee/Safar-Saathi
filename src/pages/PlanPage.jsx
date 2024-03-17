/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Database from "../database/database.json";
import NatureVid from "../assets/video/footer.mp4";

const PlanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { place, durationValue } = location.state;

  const [data, setData] = useState([]);
  const [matchingPlaces, setMatchingPlaces] = useState([]);
  const [elements, setElements] = useState([]);
  var itinerary = [];

  const Submit = () => {
    var checkboxes = document.querySelectorAll(".check");
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        var parent = document.getElementById(checkbox.parentNode.id);
        var hi = parent.querySelector("h2").innerText;
        console.log(hi);
        itinerary = [...itinerary, hi];
      }
    });
    navigate("/itinerary", { state: { itinerary, place, durationValue } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = Database;
        setData(jsonData);

        const places = jsonData
          .filter((entry) => entry.City === place)
          .map(
            (entry) =>
              `${entry.Place.replace(/^\d+\.\s*/, "")} ~ ${entry.Place_desc}`
          );

        setMatchingPlaces(places);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [place]);

  useEffect(() => {
    const newElements = matchingPlaces.map((place, index) => {
      const [nplace1, nplace2] = place.split("~").map((item) => item.trim());
      return (
        <div key={index} className="data-box relative mt-4">
          <div
            id={`place${index + 1}`}
            className="flex items-center card p-4 bg-gradient-to-r from-primary to-secondary shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 opacity-80 text-white">
            <div className="flex-1">
              <h2 className="border-l-8 border-secondary pl-2 uppercase font-bold">
                {nplace1}
              </h2>
              <p className="description italic opacity-0 hover:opacity-100">
                {nplace2}
              </p>
            </div>
            <input
              id={`checkbox${index + 1}`}
              type="checkbox"
              className="check appearance-none h-6 w-6 rounded-md border bg-red-100 border-white checked:bg-gray-700 checked:border-white focus:ring-red-600 outline-none transition duration-300 hover:h-8 hover:w-8 hover:scale-105 ml-4"
            />
          </div>
        </div>
      );
    });

    setElements(newElements);
  }, [matchingPlaces]);

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 blur">
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container mt-20 pt-10 relative z-10">
        <div id="heading">
          <h1 className="border-l-8 border-primary/50 pl-2 text-black text-4xl font-bold">
            Choose Places You Want To Visit
          </h1>
        </div>
        <div className="fixed left-0 bottom-5 mt-8 ml-8 z-50">
          <button
            id="submit"
            onClick={Submit}
            className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-900 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Submit
          </button>
        </div>
        <div className="flex-col mt-4">{elements}</div>
      </div>
    </div>
  );
};

export default PlanPage;
