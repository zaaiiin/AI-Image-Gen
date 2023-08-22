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

      <div className="hero text-2xl md:text-4xl lg:text-7xl text-white w-full flex justify-center uppercase tracking-widest font-archivo-narrow font-bold leading-6">
        <p className="title text-center leading-none transform absolute top-32 scale-y-150">
          Generate <br></br>
          Stunning Visuals
        </p>
      </div>
      <div className="ai-container flex justify-center my-auto absolute top-0.5 left-1/2">
        <Image src={AI} alt="AI" id="ai-image1" className="ai-image" />

        <ImageGenerator title=".title" aiImage=".ai-container" />
      </div>
    </main>
  );
}
