"use client";
import Image from "next/image";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import apiKey from "../../components/apiKey";
import { Skeleton } from "../../components/ui/skeleton";

interface ImageGeneratorProps {
  title: string;
  aiImage: string;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = (props) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // addFocus();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmitAnimation();
    imageToVariable();

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
    scrollToTop();
    disableKeyboard();

    const promptContainer: HTMLDivElement | null =
      document.querySelector(".prompt-container");

    if (promptContainer !== null) {
      promptContainer.classList.add("prompt-container_animation");
    }

    const titleElement = document.querySelector(props.title);
    if (titleElement) {
      titleElement.classList.add("title-animation");
    }
  };

  function imageToVariable() {
    const aiImageElement = document.querySelector(props.aiImage);

    if (aiImageElement !== null) {
      aiImageElement.classList.add("invisible");
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function disableKeyboard() {
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", (event) => scrollToTop);
    }
  }

  // function addFocus() {
  //   const promptContainer = document.getElementById(".text-area");
  //   if (promptContainer) {
  //     promptContainer.focus();
  //   }
  // }

  return (
    <div className="section flex flex-col w-full place-items-center">
      <div className="prompt-container flex mt-14 items-center justify-center w-max z-100">
        <form onSubmit={handleSubmit}>
          <input
            className="form w-52"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a prompt"
            id="text-area"
            ref={textAreaRef}
          />
        </form>

        <button type="submit" onClick={handleSubmit}>
          <Image
            src="/search-btn.png"
            alt="search"
            id="search-btn"
            width={40}
            height={20}
          />
        </button>
      </div>

      <div className="image-container  justify-center z-20  rounded-md absolute top-151 md:w-300 md:h-300 lg:h-400 lg:w-400 xl:h-500 xl:w-500">
        {image && (
          <img src={image} alt="Generated-pic" className="image rounded-md " />
        )}
      </div>
      <div className="loading-container flex absolute top-151 z-50 md:w-300 md:h-300 lg:h-400 lg:w-400 xl:h-500 xl:w-500">
        {isLoading && (
          <div>
            <Skeleton className=" w-[212px] h-[214px] md:w-300 md:h-300 lg:w-400 lg:h-400 xl:h-500 xl:w-500 flex justify-center" />
            <div className="loading-indicator flex  justify-end font-pt-sans-narrow text-white tracking-widest uppercase scale-y-150 font-bold text-lg mt-2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
