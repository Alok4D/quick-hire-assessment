import React from 'react';

export default function CallToAction() {
  return (
    // Outer section to provide spacing around the banner
    <section className="w-full bg-white flex justify-center items-center py-16 lg:py-24 overflow-hidden">
      
      {/* Main Container locked to 1192px max-width */}
      <div className="relative max-w-[1192px] w-full lg:px-0 md:px-8">
        
        {/* Slanted Blue Background Layer */}
        {/* Using clip-path to perfectly replicate the upward slant from left to right */}
        <div 
          className="absolute inset-0 bg-[#4640DE] hidden md:block"
          style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)' }}
        ></div>
        
        {/* Mobile Background (Less aggressive slant for small screens) */}
        <div 
          className="absolute inset-0 bg-[#4640DE] block md:hidden"
          style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)' }}
        ></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full min-h-[450px] py-20 lg:py-24 px-6 md:px-12 lg:px-16 gap-12 lg:gap-8">
          
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-[45%] flex flex-col items-start gap-6 lg:gap-8">
            
            <h2 className="text-white text-[40px] md:text-[48px] font-[600] leading-[1.1] tracking-tight">
              Start posting <br className="hidden md:block" /> jobs today
            </h2>
            
            <p className="text-white/90 text-[16px] md:text-[18px] font-medium">
              Start posting jobs for only $10.
            </p>
            
            <button className="bg-white hover:bg-gray-50 transition-colors text-[#4640DE] font-semibold px-8 py-3.5 mt-2 whitespace-nowrap shadow-lg">
              Sign Up For Free
            </button>
            
          </div>

          {/* Right Column: Dashboard Mockup Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
            
            {/* NOTE: Replace the 'src' below with the actual exported image of the dashboard mockup 
              from your Figma file (e.g., '/images/dashboard-mockup.png').
            */}
            <img 
              src="/3.1 Dashboard Company.png" 
              alt="QuickHire Dashboard Interface" 
              className="w-full max-w-[650px] h-auto object-cover shadow-[0px_20px_40px_rgba(0,0,0,0.15)] rounded-sm"
              
              // Fallback styling so the layout doesn't break before you add the real image
              style={{ 
                display: 'block',
                aspectRatio: '16/10'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}