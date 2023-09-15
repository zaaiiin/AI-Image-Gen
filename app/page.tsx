import Image from "next/image";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import ImageGenerator from "./services/imageGen";
// import AI from "../ai-image.png";

// import searchbtn from "../search-btn.png";
// import { Textarea } from "@/components/ui/textarea";

function Page() {
  return (
    <main className=" bg-black min-h-screen flex flex-col">
      <Header />

      <div className="hero text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-white w-full flex justify-center uppercase tracking-widest font-archivo-narrow font-bold leading-6">
        <p className="title text-center leading-none transform absolute top-28 scale-y-150">
          Generate <br></br>
          Stunning Visuals
        </p>
      </div>
      <div className="ai-container flex flex-col w-300 xl:w-400 justify-center z-20 items-center mx-auto my-88 md:my-110 lg:my-160 xl:my-190">
        <Image
          src="/ai-image.png"
          alt="AI"
          id="ai-image1"
          className="ai-image md:w-300 md:h-300 xl:w-400 xl:h-400"
          width={212}
          height={212}
        />

        <ImageGenerator title=".title" aiImage=".ai-image" />
      </div>
      <Footer></Footer>
    </main>
  );
}
export default Page;
