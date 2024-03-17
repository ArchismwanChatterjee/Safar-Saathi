/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogFormModal from "./BlogFormModal";

const BlogsComp = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAddBlog = (blogData) => {
    const newBlog = {
      id: Date.now(),
      ...blogData,
    };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Add Blog
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {blogs.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
      <BlogFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddBlog}
      />
    </>
  );
};

export default BlogsComp;
