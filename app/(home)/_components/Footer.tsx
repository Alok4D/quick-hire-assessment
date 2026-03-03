
import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    // Outer wrapper ensures the exact background color and minimum height
    <footer className="bg-[#202430] w-full flex justify-center items-center lg:h-[497px] min-h-[497px]">
      
      {/* Main container with exact max-width and internal spacing */}
      <div className="max-w-[1192px] w-full px-6 md:px-8 py-12 md:py-0 h-full flex flex-col justify-center">
        
        {/* Top Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-6">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              {/* Custom CSS Logo replicating the image perfectly */}
              <div className="w-8 h-8 rounded-full bg-[#4640DE] relative overflow-hidden flex-shrink-0">
                <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-1.5 left-1.5 z-10"></div>
                <div className="w-7 h-7 border-2 border-white rounded-full absolute -bottom-2 -right-2 opacity-50"></div>
              </div>
              <span className="text-white text-[22px] font-bold tracking-wide">
                QuickHire
              </span>
            </div>
            <p className="text-[#A9B1C0] leading-relaxed text-base pr-4">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Column 2: About Links */}
          <div className="lg:col-span-2 lg:justify-self-center">
            <h3 className="text-white text-lg font-semibold mb-6">About</h3>
            <ul className="space-y-[18px]">
              {['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#A9B1C0] hover:text-white transition-colors text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources Links */}
          <div className="lg:col-span-2 lg:justify-self-center">
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-[18px]">
              {['Help Docs', 'Guide', 'Updates', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#A9B1C0] hover:text-white transition-colors text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-4 lg:pl-4">
            <h3 className="text-white text-lg font-semibold mb-6">Get job notifications</h3>
            <p className="text-[#A9B1C0] leading-relaxed text-base mb-6 max-w-sm">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex w-full items-center shadow-sm">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/50"
              />
              <button className="bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-white font-semibold px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-[#303645] mt-[60px] mb-[30px]" />

        {/* Bottom Area: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pb-2">
          <p className="text-[#A9B1C0] text-[15px]">
            2021 @ QuickHire. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Dribbble} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Twitter} />
          </div>
        </div>

      </div>
    </footer>
  );
}

// Sub-component for clean social icon rendering
function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a 
      href="#" 
      className="w-[38px] h-[38px] rounded-full bg-[#303645] hover:bg-[#3f475a] transition-colors flex items-center justify-center text-[#A9B1C0] hover:text-white"
    >
      <Icon size={16} strokeWidth={2} />
    </a>
  );
}