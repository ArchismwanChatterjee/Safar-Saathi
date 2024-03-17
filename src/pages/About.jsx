import React, {useEffect} from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <h2>
            SAFAR SAATHI Your personal AI-trip Planner to Make Travel Planning
            Simple.
          </h2>
          <br />
          <p>
            We are a team of passionate developers and designers who have always
            been fascinated by the world of travel and technology. We believe
            that every journey should be made with a purpose and that's why we
            created Safar Saathi-Your Personal AI Trip Planner. Our mission is
            to make planning your next trip as easy as possible. We want to help
            you explore new places, learn about different cultures, and make
            memories that will last a lifetime. We are constantly working on
            improving our platform so keep an eye out for new features!
          </p>
          <br />
          <p>
          Safar Saathi addresses the common challenges faced by travelers when planning a trip. In a world where travel is a blend of passion and necessity, our AI-powered platform revolutionizes the way people explore and experience new destinations. Traditional trip planning can be overwhelming and time-consuming, especially when faced with situations like 'Ever planned to visit Goa with your friends? but don't know the local attractions?' or 'How to plan a 4-day trip for 3 people?' Safar Saathi simplifies this tedious process into a few clicks, offering quick, efficient, and tailored travel planning. Leave the hassale to us and enjoy the ultimate travel experience.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
