/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, author }) => {
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
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        state={{ image, date, title, description, author }}
      >
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
          <div className="overflow-hidden">
            <img
              src={imageUrl}
              alt="No image"
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p>{date}</p>
            <p className="line-clamp-1">By {author}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold">{title}</h1>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
