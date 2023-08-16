import Image from "next/image";
import Navbar from "./navbar";
import ImageGenerator from "./imageGen";
import AI from "../ai-image.png";
// import searchbtn from "../search-btn.png";
// import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className=" bg-black min-h-screen flex flex-col relative">
      <Navbar />
      <div className="container mx-auto pt-40 ">
        <div className="hero text-7xl text-white w-full flex justify-center uppercase tracking-widest font-archivo-narrow font-bold leading-6">
          <p className="title text-center leading-none transform scale-y-150">
            Generate <br></br>
            Stunning Visuals
          </p>
        </div>
        <div className="ai-container flex justify-center my-auto">
          <Image src={AI} alt="AI" id="ai-image1" className="ai-image" />
        </div>
        <div className="bg-transparent h-20 flex items-center absolute bottom-20 justify-center w-full left-0">
          {/* <Textarea />
          <Image src={searchbtn} alt="search" id="search-btn" /> */}
        </div>
        <ImageGenerator
          title=".title"
          // aiImage={
          //   <Image src={AI} alt="AI" id="ai-image1" className="ai-image" />
          // }
          aiImage=".ai-container"
        />
      </div>
    </main>
  );
}
