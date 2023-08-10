"use client";
import Image from "next/image";
import React, { useState } from "react";
import Api from "../components/api";
import { Textarea } from "@/components/ui/textarea";
import searchbtn from "../search-btn.png";

const ImageGenerator = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${Api}`,
          },
          body: JSON.stringify({ inputs: input }),
        }
      );
      const blob = await res.blob();
      setImage(URL.createObjectURL(blob));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-transparent h-20 flex items-center absolute bottom-20 justify-center w-full left-0">
      {/* <Textarea /> */}
      <div className="flex flex-col font-poppins font-medium items-center justify-center"></div>{" "}
      <div className="flex py-20 items-center justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a prompt"
            id="text-area"
          />
        </form>

        <button type="submit" onClick={handleSubmit}>
          <Image src={searchbtn} alt="search" id="search-btn" />
        </button>
      </div>
      <div className="image-container">
        {image && <img src={image} alt="Generated-pic" />}
      </div>
      <div className="loading-container">
        {isLoading && (
          <div>
            <p className="loading-text text-white ">Generating image...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;