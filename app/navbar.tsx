const Navbar = () => {
  return (
    <nav className="max-w-[2440px]  mt-5 h-10 flex justify-between items-center sm:px-16  font-pt-sans-narrow relative">
      <div className="logo absolute left-10 text-2xl flex items-center justify-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text font-bold">
        PixaNova
      </div>

      <div className="navGroup absolute px-0  right-1/4 left-1/4 justify-center gap-5">
        <div className="text-white">How it Works</div>
        <div className="text-white">About Us</div>
        <div className="text-white">Terms of Use</div>
      </div>

      <button className="sign-in absolute right-10 text-white min-w-[10px]">
        Sign In
      </button>
    </nav>
  );
};
export default Navbar;
