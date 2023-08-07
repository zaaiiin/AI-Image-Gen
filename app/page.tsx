import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className=" bg-black min-h-screen ">
      <Navbar />
      /*{" "}
      <div className="text-4xl text-white w-full fixed z-[100] h-20">
        Generate{" "}
        <span className="bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text">
          Stunning Visuals
        </span>{" "}
        with AI
      </div>{" "}
      */
    </main>
  );
}
