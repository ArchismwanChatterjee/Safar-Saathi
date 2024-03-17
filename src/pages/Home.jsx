import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/india_1.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/1.png";
import Banner2 from "../assets/2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import { Helmet } from "react-helmet";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <div id="banner">
          <Banner />
        </div>
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
      <Helmet>
        <script>
          {`
            window.embeddedChatbotConfig = {
              chatbotId: "w3qnjs7onUzEZysYBkSIL",
              domain: "www.chatbase.co",
            };
          `}
        </script>
        <script
          src="https://www.chatbase.co/embed.min.js"
          chatbotId="w3qnjs7onUzEZysYBkSIL"
          domain="www.chatbase.co"
          defer
        />
      </Helmet>
    </>
  );
};

export default Home;
