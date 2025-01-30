import { GridAboutImg1 } from "../../../assets/images";
import { Fade } from "react-awesome-reveal";
export const AboutInfo = () => {
  return (
    <div className="h-auto relative p-6 md:p-24 grid grid-cols-1 xl:grid-cols-2 gap-12 w-full md:max-w-[80vw] items-center mx-auto bg-white">
      <Fade
        delay={200} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
      >
        <div className="bg-kente p-4">
          <img
            src={GridAboutImg1}
            alt="about-manifold-talent-img"
            className="h-full w-full object-contain"
          />
        </div>
      </Fade>

      <div>
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1000} // Animation lasts 1 second
        >
          <p className="text-2xl md:text-4xl xl:text-[52px] text-start headerWithFont text-[#152E39]">
            About Manifold Talent
          </p>
        </Fade>
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1200} // Animation lasts 1 second
        >
          <p className="text-start text-xs md:text-base font-light leading-8  w-full xl:w-[512px] my-3">
            Manifold is a premier talent agency celebrating the brilliance of
            African and diasporan creatives in North America. Our mission is to
            bridge talent and opportunity, creating meaningful connections that
            redefine storytelling across beauty, fashion, and hair care
            industries.
          </p>
        </Fade>
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1000} // Animation lasts 1 second
        >
          <div className="flex justify-start my-3">
            <button className="text-white text-xs py-4 px-6 font-light bg-[#146A90]">
              Learn More About Our Vision
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};
