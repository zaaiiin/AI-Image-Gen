"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-screen  mt-5 h-10 flex justify-between items-center sm:px-16 font-pt-sans-narrow relative">
      <Link href="/">
        <div className="logo absolute left-10 text-lg flex items-center justify-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text font-bold">
          PixaNova
        </div>
      </Link>
      <nav className="navGroup invisible md:visible text-white text-sm items-center absolute px-0 h-10 mt-5 right-1/4 left-1/4 flex text-center justify-center gap-5">
        <div className="how ">How it Works</div>
        <div className="about">About Us</div>
        <div className="terms">Terms of Use</div>
      </nav>

      <button
        className="menu absolute right-10 pt-2 z-120 md:invisible"
        onClick={() => setToggle(!toggle)}
      >
        <Image
          src="/menu-icon.png"
          className="menu-icon "
          alt="menu-icon"
          height={10}
          width={25}
        />
      </button>

      {toggle && (
        <ul className="menu-group text-black flex flex-col absolute top-0 left-0 b-0 mt-0 mb-0 bg-white h-screen w-screen text-sm items-left rounded-sm font-700 px-3 z-100">
          <li className="menu-group_item pt-6">How it works</li>
          <li className="menu-group_item border-t">About us</li>
          <li className="menu-group_item border-t">Terms of service</li>
          <li className="menu-group_item border-t pb-2">Sign In</li>
        </ul>
      )}

      <button className="sign-in absolute invisible md:visible right-10  mt-5  text-sm text-white min-w-[10px]">
        Sign In
      </button>
    </header>
  );
};
export default Header;
