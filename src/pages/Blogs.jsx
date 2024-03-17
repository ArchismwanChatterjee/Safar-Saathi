/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import BlogsComp from "../components/Blogs/BlogsComp";

const Blogs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <BlogsComp />
    </div>
  );
};

export default Blogs;
