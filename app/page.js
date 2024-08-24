"use client";

import React, { useState } from "react";

import Header from "../Components/Header";

const page = () => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setImages(data);
      console.log(data);
    } catch (error) {
      console.log("Image not found");
    }
  };
  return (
    <>
      <div className="container">
        <button onClick={getImages}>Get Images</button>
        <div className="image-gallery">
          {images.map((img) => {
            return (
              <img
                id={img.id}
                src={img.download_url}
                alt={img.author}
                width="200"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default page;
