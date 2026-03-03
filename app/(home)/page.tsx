
import Intro from "./_components/Intro";
import Navbar from "./_components/navbar/Navbar";

import Communities from "./_components/Communities";
import FeaturedProjects from "./_components/Featured";
import LatestNews from "./_components/News";
import NewsLetter from "./_components/NewsLetter";
import QualityServices from "./_components/QualityServices ";
import ClientTestimonials from "./_components/Testimonial";
import Footer from "./_components/Footer";


export default function page() {
  return (
    <>
      <Navbar />
      <Intro />
      <Communities />
      <FeaturedProjects />
      <QualityServices />
      <ClientTestimonials />
      <LatestNews />
      <NewsLetter />
      <Footer/>
    </>
  );
}
