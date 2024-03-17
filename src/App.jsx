/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import PlanPage from "./pages/PlanPage";
import Itinerary from "./pages/Itinerary";
import PreviousItinerary from "./pages/SavedPlans";
import AOS from "aos";
import "aos/dist/aos.css";
import { signInWithGoogle } from "./(auth)/login";
import { auth } from "./(auth)/login";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  function doLogin() {
    signInWithGoogle()
      .then(() => {
        setLoggedIn(true);
        var myHeaders = new Headers();
        var user_mail = localStorage.getItem("email");
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({ email: user_mail });
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        // make API call with parameters and use promises to get response
        fetch(
          "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/ss_username",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            const responseBody = JSON.parse(result).body;
            console.log(responseBody);
          })
          .catch((error) => console.log("error", error));
        //console.log(localStorage.getItem("email"))
      })
      .catch((error) => {
        // Handle errors from signInWithGoogle
        console.error("Error signing in with Google:", error);
      });
  }

  function doLogout() {
    setLoggedIn(false);
    localStorage.clear();
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout
                  isLoggedIn={isLoggedIn}
                  login={doLogin}
                  logout={doLogout}
                />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route
              path="planpage/:id"
              element={isLoggedIn ? <PlanPage /> : <NoPage />}
            />
            <Route
              path="itinerary"
              element={isLoggedIn ? <Itinerary /> : <NoPage />}
            />
            <Route
              path="savedplans"
              element={isLoggedIn ? <PreviousItinerary /> : <NoPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;