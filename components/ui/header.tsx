"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  return (
    <header className="max-w-[2440px]  mt-5 h-10 flex justify-between items-center sm:px-16 font-pt-sans-narrow relative">
      <div className="logo absolute left-10 text-2xl text-lg flex items-center justify-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text font-bold">
        PixaNova
      </div>
      <nav className="navGroup  text-white text-sm  items-center absolute px-0 h-10 right-1/3 left-1/3 flex invisible text-center justify-center gap-5">
        <div className="how ">How it Works</div>
        <div className="about">About Us</div>
        <div className="terms">Terms of Use</div>
      </nav>

      <button
        className="menu absolute right-10 pt-2 z-120 "
        onClick={() => setToggle(!toggle)}
      >
        <Image
          src="/menu.png"
          className="menu-icon "
          alt="menu-icon"
          height={10}
          width={25}
        />
      </button>

      {toggle && (
        <ul className="menu-group z-100 text-black right-0 t-0 b-0 mx-auto my-auto px-auto bg-white h-screen w-screen text-sm items-center  rounded-sm font-700 py-10">
          <li className="menu-group_item  border-stone-700 pt-2">
            How it works
          </li>
          <li className="menu-group_item border-t border-stone-700">
            About us
          </li>
          <li className="menu-group_item border-t border-stone-700">
            Terms of service
          </li>
          <li className="menu-group_item border-t  border-stone-700 pb-2">
            Sign In
          </li>
        </ul>
      )}

      <button className="sign-in absolute invisible md:visible right-10 text-sm text-white min-w-[10px]">
        Sign In
      </button>
    </header>
  );
};
export default Header;
