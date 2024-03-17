/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const BlogFormModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    onSubmit({ title, description, author, date, image });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      title: title,
      description: description,
      author: author,
      date: date
    });
    console.log(raw);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/ss_addblog",
        requestOptions
      );

      const result = await response.text();
      const parsedResult = JSON.parse(result).body;

      console.log(parsedResult);
    } catch (error) {
      console.error("Fetch error:", error);
    }

    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <h2 className="text-xl font-bold mb-4">Create a New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
          rows="4"></textarea>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogFormModal;
