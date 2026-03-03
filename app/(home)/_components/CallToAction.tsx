import React from 'react';
import Image from 'next/image';

export default function CallToAction() {
  return (
    // Outer section to provide spacing around the banner
    <section className="w-full bg-white flex justify-center items-center py-16 lg:py-24">
      
      {/* Main Container locked to 1192px max-width */}
      <div className="relative max-w-[1192px] w-full lg:px-0 md:px-8">
        
        {/* Deep Blue Background Layer with specific Corner Cuts */}
        {/* clip-path: polygon(TopLeft-X TopLeft-Y, Corner1-X Corner1-Y, TopRight-X TopRight-Y, BottomRight-X BottomRight-Y, Corner2-X Corner2-Y, BottomLeft-X BottomLeft-Y) */}
        <div 
          className="absolute inset-0 bg-[#4640DE] z-0"
          style={{ 
            clipPath: 'polygon(0 18%, 14% 0, 100% 0, 100% 82%, 86% 100%, 0 100%)' 
          }}
        ></div>
        
        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full min-h-[480px] py-16 lg:py-0 px-8 md:px-16 lg:px-20 gap-12">
          
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-[45%] flex flex-col items-start gap-6 lg:gap-10">
            
            <h2 className="text-white text-[42px] md:text-[56px] font-bold leading-[1.05] tracking-tight">
              Start posting <br className="hidden md:block" /> jobs today
            </h2>
            
            <p className="text-white/90 text-[18px] md:text-[20px] font-medium max-w-[380px]">
              Start posting jobs for only $10.
            </p>
            
            <button className="bg-white hover:bg-gray-100 transition-all duration-300 text-[#4640DE] text-[18px] font-bold px-10 py-4 shadow-xl hover:scale-105">
              Sign Up For Free
            </button>
            
          </div>

          {/* Right Column: Dashboard Mockup Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative lg:pt-10">
            <div className="relative w-full max-w-[720px] aspect-[16/10] shadow-[0px_30px_60px_rgba(0,0,0,0.25)] translate-y-4 lg:translate-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Image 
                src="/3.1 Dashboard Company.png" 
                alt="QuickHire Dashboard Interface" 
                fill
                className="object-cover rounded-sm"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
