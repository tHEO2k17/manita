import { HeroImg } from "../../../assets/images";
import { Fade } from "react-awesome-reveal";
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

export const HeroSection = () => {
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      scrollIntoView(element, { // Use the element directly after the null check
        behavior: 'smooth',
        block: 'start',
      });
   // Set active nav item
    }
  
  }

  return (
    <div className="relative h-screen w-full lg:max-w-full">
      {/* Image */}
      <img
        src={HeroImg}
        alt="hero-img"
        className="h-screen w-full  object-cover sm:object-center object-left"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text (centered) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center  w-full md:w-auto px-6">
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1000} // Animation lasts 1 second
          fraction={0.5}
        >
          <h1 className="font-bold headerWithFont xl:text-[78.61px]  text-2xl md:text-4xl ">
            Manifold Talent
          </h1>
        </Fade>
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1200} // Animation lasts 1 second
          fraction={0.5}
        >
          <p className="mt-4 text-lg font-light">
            Connecting world-class talent with iconic brands to craft stories
            that resonate
          </p>
        </Fade>
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1400} // Animation lasts 1 second
          fraction={0.5}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
            <button className="bg-white text-black text-xs p-5 hover:bg-[#F76828] hover:text-white"  onClick={()=>handleNavClick("contact")}>
              Join Our Roster
            </button>
            <button className="border text-white text-xs p-5 hover:bg-[#F76828] hover:text-white hover:border-0" onClick={()=>handleNavClick("contact")}>
             Partner With Us
            </button>
          </div>
        </Fade>
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1600} // Animation lasts 1 second
          fraction={0.5}
        >
          <div className="flex justify-center flex-wrap gap-12">
            <div>
              <p className="text-[25.22px]">8</p>
              <p className="text-xs">Creators</p>
            </div>
            <div>
              <p className="headerWithFont text-[25.22px]">93.4k</p>
              <p className="text-xs">Avg. IG Reels Play</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
