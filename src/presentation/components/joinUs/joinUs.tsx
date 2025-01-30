import { JoinUsImg } from "../../../assets/images";
import CustomTab from "../customTab/customTabs";
import { Fade } from "react-awesome-reveal";
const JoinUs = () => {
  return (
    <section className="h-auto w-full bg-join-us py-24 xl:px-0 px-4 md:px-8">
      <Fade
        delay={100} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
      >
        <div className=" flex flex-wrap lg:flex-nowrap gap-8 rounded-4xl items-center  bg-white w-full xl:w-[1200px] mx-auto  ">
          <div className="rounded-tl-xl rounded-bl-xl hidden lg:block">
            <Fade
              delay={200} // Wait 200ms before starting
              duration={1000} // Animation lasts 1 second
            >
              {" "}
              <img
                src={JoinUsImg}
                alt="join-us-img"
                className=" lg:h-[750px] xl:h-[800px] xl:w-[480px]  object-fill object-center rounded-tl-4xl rounded-bl-4xl"
              />
            </Fade>
          </div>
          <div className="py-6 px-5 md:p-6 text-start">
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1000} // Animation lasts 1 second
              fraction={0.5}
            >
              <p className="headerWithFont xl:text-[52px] text-2xl md:text-4xl ">
                Join Us!
              </p>
            </Fade>{" "}
            <Fade
              direction="up"
              delay={200} // Wait 200ms before starting
              duration={1200} // Animation lasts 1 second
              fraction={0.5}
            >
              <p className="lg:max-w-xl leading-8 font-light text-xs md:text-base">
                Are you a talented creative looking for representation, or a
                brand seeking innovative partnerships, we invite you to explore
                our site and connect with us.
              </p>
            </Fade>
            <CustomTab />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default JoinUs;
