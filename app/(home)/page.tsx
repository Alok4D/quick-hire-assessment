
import Intro from "./_components/Intro";
import Image from "next/image";


import Communities from "./_components/Communities";
import FeaturedProjects from "./_components/Featured";
import LatestNews from "./_components/News";
import NewsLetter from "./_components/NewsLetter";
import QualityServices from "./_components/QualityServices ";
import ClientTestimonials from "./_components/Testimonial";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import CompanyLogos from "./_components/CompanyLogos";
import ExploreCategories from "./_components/ExploreCategories";


export default function page() {
  return (
    <>
      <div className="relative w-full bg-[#F8F8FD] overflow-hidden">
        {/* Background Geometric Pattern - Exact Figma Specs: 860px x 794px, Left: 580px */}
        <div 
          className="absolute z-0 pointer-events-none hidden lg:block overflow-visible"
          style={{ 
            width: '860px', 
            height: '794px', 
            left: '800px', 
            top: '-40px',
          }}
        >
          <Image
            src="/Pattern.svg" 
            alt="Geometric pattern background" 
            width={860}
            height={794}
            className="w-full h-full object-contain opacity-40 mix-blend-multiply"
          />
        </div>
        
        <Navbar />
        <Intro />
      </div>
      <CompanyLogos />
      <ExploreCategories />
      {/* <Communities /> */}
      {/* <FeaturedProjects /> */}
      {/* <QualityServices /> */}
      {/* <ClientTestimonials /> */}
      {/* <LatestNews /> */}
      {/* <NewsLetter /> */}
      <Footer/>
    </>
  );
}
