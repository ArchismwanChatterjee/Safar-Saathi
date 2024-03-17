/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ItineraryCard = ({ itinerary, place, durationValue }) => {
  const [responseBody, setResponseBody] = useState(null);
  const email = localStorage.getItem("email");

  useEffect(() => {
    window.scrollTo(0, 0);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      day: durationValue,
      place: itinerary,
      email: email,
      city: place,
    });
    // console.log(id);
    // id = id + 1;
    // if (id % 2 != 0) return;
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/ghumo_bharat",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const parsedResult = JSON.parse(result).body;
        setResponseBody(parsedResult);
        console.log(parsedResult);
      })
      .catch((error) => console.log("error", error));
  }, [durationValue, itinerary]);

  return (
    <div className="itinerary-card p-4 md:p-8 mt-16">
      <h2 className="border-l-8 border-secondary pl-2 uppercase text-base md:text-2xl font-bold p-4 mb-4">
        Generated Itinerary
      </h2>
      <div
        id="itinerary"
        className="font-bold overflow-auto bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-lg p-4"
      >
        <div>
          {responseBody ? (
            <ReactMarkdown className="whitespace-pre-wrap">
              {responseBody}
            </ReactMarkdown>
          ) : (
            <div className="flex justify-center items-center">
              <div className="relative inline-flex">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                <div className="w-6 h-6 bg-white rounded-full absolute top-0 left-0 animate-ping"></div>
                <div className="w-6 h-6 bg-white rounded-full absolute top-0 left-0 animate-pulse"></div>
              </div>
              <h2 className="ml-2 mr-2">
                Sit tight generating your perfect plan
              </h2>
              <div className="mt-2 hidden md:block">
                <div className="relative inline-flex">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                  <div className="w-6 h-6 bg-white rounded-full absolute top-0 left-0 animate-ping"></div>
                  <div className="w-6 h-6 bg-white rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="fixed left-0 bottom-5 ml-8 z-40">
        <button
          onClick={() => {
            window.open("https://safar-saathi-vt.netlify.app", "_blank");
          }}
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          VIRTUAL TOUR
        </button>
      </div>
    </div>
  );
};
const Itinerary = () => {
  const location = useLocation();
  const { itinerary, place, durationValue } = location.state;

  console.log(itinerary);
  console.log(place);
  console.log(durationValue);
  return (
    <div className="main-content">
      <div className="itinerary-container">
        <ItineraryCard
          itinerary={itinerary}
          place={place}
          durationValue={durationValue}
        />
      </div>
    </div>
  );
};

export default Itinerary;
