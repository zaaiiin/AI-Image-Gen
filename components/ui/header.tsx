const Header = () => {
  return (
    <header className="max-w-[2440px]  mt-5 h-10 flex justify-between items-center sm:px-16 font-pt-sans-narrow relative">
      <div className="logo absolute left-5 text-2xl text-lg flex items-center justify-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text font-bold">
        PixaNova
      </div>

      <nav className="navGroup text-white text-sm  items-center absolute px-0 h-10 right-1/3 left-1/3 flex text-center justify-center gap-5">
        <div className="how ">How it Works</div>
        <div className="about">About Us</div>
        <div className="terms">Terms of Use</div>
      </nav>

      <button className="sign-in absolute right-5 text-sm text-white min-w-[10px]">
        Sign In
      </button>
    </header>
  );
};
export default Header;
