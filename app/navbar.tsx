const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[2440px] mx-20 mt-10 flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="text-white text-2xl flex items-center justify-center ">
          PixaNova
        </div>
        <button className="text-white rounded-full min-w-[10px]">
          Sign In
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
