
import { SlideShow } from "../../assets/images";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  const data = [
    { number: "8", text: "Creators" },
    { number: "94.4k", text: "Avg. IG Reels Play" },
    { number: "10+", text: "Brand Collaborators" },
  ];
  return (
    <section className="h-auto w-full">
      <div className=" w-full bg-[#E7F8FF]">
        <div className=" w-full px-6 md:max-w-7xl mx-auto gap-x-12 flex  flex-wrap md:flex-nowrap py-24">
          <div className=" w-full md:w-1/2">
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1000} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p className="rounded-full py-3 text-[#146A90] w-[173px] h-[44px] my-3 text-xs md:text-sm bg-[#B0E1F6]  uppercase">
                Manifold Talent
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1100} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p className="xl:text-[52px] lg:text-4xl text-2xl  text-start headerWithFont">
                {" "}
                who are we?
              </p>
            </Fade>
          </div>
          <div>
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1200} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p className="md:text-base text-sm font-light text-start">
                We are a premier talent agency dedicated to empowering African
                and diasporan creatives in North America. We believe in the
                transformative power of storytelling and are committed to
                supporting talented individuals in achieving their content
                creation ambitions.
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1300} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p className="md:text-base text-sm font-light my-3 text-start">
                We are a premier talent agency dedicated to empowering African
                and diasporan creatives in North America. We believe in the
                transformative power of storytelling and are committed to
                supporting talented individuals in achieving their content
                creation ambitions.{" "}
              </p>
            </Fade>
          </div>
        </div>
        <div className="pb-6">
          <Fade
            delay={200} // Wait 200ms before starting
            duration={1100} // Animation lasts 1 second
            // fraction={0.5}
          >
            <img
              src={SlideShow}
              alt="slide-img"
              className="h-full w-full object-cover"
            />
          </Fade>
        </div>
      </div>
      <div className="w-full text-start font-light px-6 md:max-w-7xl mx-auto gap-x-12 grid grid-cols-1 items-center lg:grid-cols-2 md:flex-nowrap py-24">
        <div>
          <div>
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1000} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p className="xl:text-[52px] font-bold my-3 text-2xl lg:text-4xl  text-start headerWithFont">
                What Do We Stand For?
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1100} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p>
                We are built on the principles of inclusivity, creativity, and
                community. We aim to provide expert guidance and support to
                emerging talent, building concrete partnerships with brands.
              </p>
            </Fade>
          </div>
          <div className="my-12">
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1200} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p className="xl:text-[52px] font-bold  my-3 lg:text-4xl text-2xl  text-start headerWithFont">
                What Do We Believe In?{" "}
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1300} // Animation lasts 1 second
              // fraction={0.5}
            >
              <p>
                We envision a world where African and diasporan creatives are
                valued, celebrated, and empowered to tell their stories without
                limitation
              </p>
            </Fade>
          </div>
        </div>
        <div className="bg-white/5">
          <Fade
            delay={200} // Wait 200ms before starting
            duration={1000} // Animation lasts 1 second
            // fraction={0.5}
          >
            <div className="bg-kente">
              <div className="md:p-10 p-6 bg-transparent">
                {data.map((item, key) => (
                  <Fade
                    direction="up"
                    delay={200} // Wait 200ms before starting
                    duration={1300} // Animation lasts 1 second
                    
                  >
                    <div className="bg-white p-6 rounded-md my-4" key={key}>
                      <p className="headerWithFont text-[30px] font-bold">{item.number}</p>
                      <p>{item.text}</p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};
