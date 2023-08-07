import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-black min-h-screen ">
      <div className="text-white text-2xl flex items-center justify-start  ">
        PixaNova
      </div>
      <div className="fixed w-full text-4xl text-white flex items-center justify-center  bg-black ">
        Generate{" "}
        <span className="bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text">
          Stunning Visuals
        </span>{" "}
        with AI
      </div>
    </main>
  );
}
