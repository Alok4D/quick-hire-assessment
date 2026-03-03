

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center py-5 bg-transparent relative z-50"> 
      <div className="max-w-[1192px] w-full lg:px-0 md:px-8 flex justify-between items-center">
        
        {/* Left Section: Logo & Links */}
        <div className="flex items-center gap-10">
          
          {/* Brand / Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#4640DE] relative overflow-hidden flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-1.5 left-1.5 z-10"></div>
              <div className="w-7 h-7 border-2 border-white rounded-full absolute -bottom-2 -right-2 opacity-50"></div>
            </div>
            <span className="text-[#202430] text-[22px] font-bold tracking-wide">
              QuickHire
            </span>
          </div>

          {/* Nav Links (Hidden on small mobile, visible on tablet/desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[#515B6F] text-[15px] font-medium hover:text-[#4640DE] transition-colors">
              Find Jobs
            </a>
            <a href="#" className="text-[#515B6F] text-[15px] font-medium hover:text-[#4640DE] transition-colors">
              Browse Companies
            </a>
          </div>
        </div>

        {/* Right Section: Auth Buttons */}
        <div className="flex items-center gap-5 md:gap-6">
          <a href="#" className="text-[#4640DE] text-[15px] font-bold hover:text-[#3b36be] transition-colors">
            Login
          </a>
          
          {/* Vertical Divider */}
          <div className="hidden sm:block w-px h-[28px] bg-[#D6DDEB]"></div>
          
          <button className="bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-white text-[15px] font-semibold py-2.5 px-6 rounded-none">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;  