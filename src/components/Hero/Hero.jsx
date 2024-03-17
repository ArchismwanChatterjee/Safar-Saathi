// import React from "react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [durationValue, setDurationValue] = React.useState(1); //duration
  const [place, setSearchInput] = useState(""); //search input
  const [suggestions, setSuggestions] = useState([]);

  const locations = [
    "Manali",
    "Leh Ladakh",
    "Coorg",
    "Andaman",
    "Lakshadweep",
    "Goa",
    "Udaipur",
    "Srinagar",
    "Gangtok",
    "Munnar",
    "Varkala",
    "Mcleodganj",
    "Rishikesh",
    "Alleppey",
    "Darjeeling",
    "Nainital",
    "Shimla",
    "Ooty",
    "Jaipur",
    "Lonavala",
    "Mussoorie",
    "Kodaikanal",
    "Dalhousie",
    "Pachmarhi",
    "Varanasi",
    "Mumbai",
    "Agra",
    "Kolkata",
    "Jodhpur",
    "Bangalore",
    "Amritsar",
    "Delhi",
    "Jaisalmer",
    "Mount Abu",
    "Wayanad",
    "Hyderabad",
    "Pondicherry",
    "Khajuraho",
    "Chennai",
    "Vaishno Devi",
    "Ajanta and Ellora Caves",
    "Haridwar",
    "Kanyakumari",
    "Pune",
    "Kochi",
    "Ahmedabad",
    "Mysore",
    "Chandigarh",
    "Hampi",
    "Gulmarg",
    "Almora",
    "Shirdi",
    "Auli",
    "Madurai",
    "Amarnath",
    "Bodh Gaya",
    "Mahabaleshwar",
    "Visakhapatnam",
    "Kasol",
    "Nashik",
    "Tirupati",
    "Ujjain",
    "Jim Corbett National Park",
    "Gwalior",
    "Mathura",
    "Alibaug",
    "Rameshwaram",
    "Vrindavan",
    "Coimbatore",
    "Lucknow",
    "Digha",
    "Dharamshala",
    "Kovalam",
    "Madikeri",
    "Matheran",
    "Ranthambore",
    "Agartala",
    "Khandala",
    "Kalimpong",
    "Thanjavur",
    "Bhubaneswar",
    "Ajmer",
    "Aurangabad",
    "Jammu",
    "Dehradun",
    "Puri",
    "Cherrapunji",
    "Bikaner",
    "Shimoga (Shivamogga)",
    "Hogenakkal",
    "Kasauli",
    "Pushkar",
    "Chittorgarh",
    "Nahan",
    "Lavasa",
    "Poovar",
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter locations based on the input value
    const filteredLocations = locations.filter((location) =>
      location.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredLocations);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  const dropdownRef = useRef(null); // Create a ref for the dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]); // Clear suggestions when clicked outside
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm"></p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Plan your trip
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Destination
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="destination"
                    id="searchInput"
                    placeholder="Enter..."
                    value={place}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                  />
                  {suggestions.length > 0 && (
                    <div
                      className="dropdown absolute w-full mt-1"
                      ref={dropdownRef}
                    >
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          onClick={() => handleSuggestionClick(suggestion)}
                          onTouchEnd={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Duration</p>
                    <p className="font-bold text-xl">
                      {durationValue} {durationValue == 1 ? "day" : "days"}
                    </p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full h-2 rounded-full my-2"
                    min="1"
                    max="30"
                    value={durationValue}
                    step="1"
                    onChange={(e) => setDurationValue(e.target.value)}
                    style={{
                      background: `linear-gradient(to right, #6875f5 0%, #6875f5 ${
                        (durationValue / 30) * 100
                      }%, #e5e7eb ${
                        (durationValue / 30) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={`/planpage/${place}`} state={{ place, durationValue }}>
              <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
                Plan Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
