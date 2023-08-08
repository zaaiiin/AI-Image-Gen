import Image from "next/image";
import Navbar from "./navbar";
import AI from "../ai-image.png";

export default function Home() {
  return (
    <main className=" bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto pt-36">
        <div className="hero text-7xl text-white w-full flex justify-center uppercase tracking-widest font-archivo-narrow font-bold leading-6">
          <p className="text-center leading-none ">
            Generate <br></br>
            Stunning Visuals
          </p>
        </div>
        <div className="ai-container flex justify-center my-auto">
          <Image src={AI} alt="AI" id="ai-image" />
        </div>
      </div>
      <div className="prompt text-black w-44 flex flex-col justify-start mx-auto bg-white mt-auto">
        Enter a prompt
      </div>
    </main>
  );
}
