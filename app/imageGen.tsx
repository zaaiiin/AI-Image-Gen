"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import apiKey from "../components/apiKey";
import searchbtn from "../search-btn.png";
import { Skeleton } from "../components/ui/skeleton";
// import { Progress } from "@/components/ui/progress";

interface ImageGeneratorProps {
  title: string;
  aiImage: string;
}

// function ProgressDemo() {
//   const [progress, setProgress] = useState(13);

//   useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return <Progress value={progress} className="loading indicator" />;
// }

const ImageGenerator: React.FC<ImageGeneratorProps> = (props) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmitAnimation();

    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${apiKey}`,
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

    const promptContainer: JSX.IntrinsicElements["div"] =
      document.querySelector(".prompt-container");
    promptContainer.classList.add("prompt-container_animation");

    const titleElement = document.querySelector(props.title);
    if (titleElement) {
      titleElement.classList.add("title-animation");
    }

    // const aiImage = document.querySelector(props.aiImage);
    // if (aiImage) {
    //   aiImage.classList.add("hidden");
    // }
  };

  return (
    <div className="section flex flex-col w-full">
      <div className="prompt-container flex  items-center justify-center w-full">
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

      <div className="image-container flex justify-center z-20 border-2 border-opacity-50 rounded-md ">
        {image && (
          <img src={image} alt="Generated-pic" className="image rounded-md " />
        )}
      </div>
      <div className="loading-container flex absolute top-1/4 z-50">
        {isLoading && (
          <div>
            <Skeleton className=" w-[212px] h-[214px]  flex justify-center my-auto" />
            <div className="loading-indicator flex  justify-end font-pt-sans-narrow text-white tracking-widest uppercase scale-y-150 font-bold text-lg mt-2 "></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
