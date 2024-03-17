/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    // If `image` is a file, create a URL for the file
    if (image instanceof File) {
      setImageUrl(URL.createObjectURL(image));
    } else {
      // If `image` is a path, use it directly
      setImageUrl(image);
    }
  }, [image]);
  return (
    <div className=" pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
