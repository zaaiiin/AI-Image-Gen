"use client";
import Image from "next/image";
import React, { useState } from "react";
import Api from "../components/api";
import searchbtn from "../search-btn.png";
import { after } from "node:test";
import { Skeleton } from "../components/ui/skeleton";

interface ImageGeneratorProps {
  title: string;
  aiImage: string;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = (props) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [isAiImageHidden, setIsAiImageHidden] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsAiImageHidden(true);
    onSubmitAnimation();

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

  const onSubmitAnimation = () => {
    setIsLoading(true);
    // setIsAiImageHidden(true);
    const promptContainer: JSX.IntrinsicElements["div"] =
      document.querySelector(".prompt-container");
    promptContainer.classList.add("prompt-container_animation");

    const titleElement = document.querySelector(props.title);
    if (titleElement) {
      titleElement.classList.add("title-animation");
    }

    const aiImage = document.querySelector(props.aiImage);
    if (aiImage) {
      aiImage.classList.add("hidden");
    }
  };

  return (
    <div className="bg-transparent h-20 flex items-center bottom-20 justify-center w-full left-0 ">
      {/* {React.cloneElement(props.aiImage, {
        className: `${props.aiImage.props.className} ${
          isAiImageHidden ? "hidden" : ""
        }`,
      })} */}
      <div className="flex flex-col font-poppins font-medium items-center justify-center"></div>{" "}
      <div className="prompt-container flex py-20 items-center justify-center absolute top-3/4">
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
      <div className="image-container z-20 h-512 w-512 flex absolute top-1/4 border-zinc-800 border-2 border-opacity-50 rounded-md">
        {image && (
          <img src={image} alt="Generated-pic" className="image rounded-md" />
        )}
      </div>
      <div className="loading-container flex absolute top-1/4 z-50">
        {isLoading && (
          <div>
            <Skeleton className="w-[512px] h-[514px]  flex justify-center my-auto" />
            <div className="loading-text flex text-white">Generating...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
