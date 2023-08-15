const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[2440px] mx-20 mt-10 flex justify-between items-center sm:px-16 px-6 py-4 font-pt-sans-narrow">
        <div className=" text-2xl flex items-center justify-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text font-bold">
          PixaNova
        </div>

        <div className="navGroup">
          <p className="text-white">How it Works</p>
          <p className="text-white">About Us</p>
          <p className="text-white">Terms of Use</p>
        </div>

        <button className="sign-in text-white min-w-[10px]">Sign In</button>
      </nav>
    </header>
  );
};
export default Navbar;
