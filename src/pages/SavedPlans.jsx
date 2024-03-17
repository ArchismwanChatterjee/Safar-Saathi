import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./SavedPlans.css";

const PreviousItinerary = () => {
  const email = localStorage.getItem("email");

  const [responseBody, setResponseBody] = useState([]);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const [selectedCard2Data, setSelectedCard2Data] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({ email: email });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const response = await fetch(
          "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/get_itenary",
          requestOptions
        );

        const result = await response.text();
        const parsedResult = JSON.parse(result).body;
        //Kolkata-{email}_1,Manali-{email}_2

        const card2Data = Array.from(parsedResult, (x) => ({
          id: x.split("-")[1],
          title: x.split("-")[0],
          content: `Content for ${x.split("-")[1]}`,
        }));

        // const card2Data = Array.from({ length: numberOfCard2s }, (_, index) => ({
        //   id: index + 1,
        //   title: `${index + 1}`,
        //   content: `Content for ${email}_${index + 1}`,
        // }));

        setResponseBody(card2Data);

        console.log(parsedResult);
        console.log(card2Data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [email]);

  const handleCard2Click = async (card2) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ id: card2.title + "-" + card2.id });
    console.log(raw);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/get_itenary_data", //change this api
        requestOptions
      );

      const result = await response.text();
      const parsedResult = JSON.parse(result).body;

      console.log(parsedResult);
      setSelectedCard2Data(parsedResult);
    } catch (error) {
      console.error("Fetch error:", error);
    }

    setSelectedCard2(card2);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 min-h-screen">
      <div className="flex container1 mt-32">
        {/* Left Column */}
        <div className="flex-1 p-5 border-r-2 text-center mt-3 mb-5 text-white">
          <h2 style={{ fontWeight: "bold", fontStyle: "italic" }}>
            PREVIOUS PLANS
          </h2>

          <div className="flex flex-wrap">
            {responseBody.map((card2) => (
              <div
                key={card2.id}
                className={`card2 ${
                  selectedCard2 === card2.id ? "selected" : ""
                }`}
                onClick={() => handleCard2Click(card2)}
              >
                <h3>{card2.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <h2 style={{ fontWeight: "bold", fontStyle: "italic" }}>PLAN</h2>
          <div>
            {selectedCard2Data !== null ? (
              <div>
                <h3>{selectedCard2Data.title}</h3>
                <ReactMarkdown>{selectedCard2Data}</ReactMarkdown>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousItinerary;
