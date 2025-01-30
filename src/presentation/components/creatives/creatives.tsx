import { CreativesData } from "../../../data/creativesData";
import { Fade } from "react-awesome-reveal";
interface dataProps {
  image: string;
  name: string;
  style1: string;
  style2: string;
  style3: string;
  social1: string;
  social2: string;
}
import { Carousel } from "@material-tailwind/react";
export const Creatives = () => {
  const CreativeItem = ({ item }: { item: dataProps }) => (
    <Fade
      delay={200} // Wait 200ms before starting
      duration={1000} // Animation lasts 1 second
    >
      <div className="w-full sm:w-auto ">
        <div className="bg-white p-3 border-0 w-full sm:w-auto">
          <img
            src={item.image}
            alt="creatives-grid-img"
            className="w-full h-full sm:h-[263px] object-cover"
          />
          <p className="font-bold text-center text-xs mt-2">{item.name}</p>
          <p className="my-3 text-center">
            <span className="border-r  px-2 text-xs font-light ">
              {item.style1}
            </span>{" "}
            <span className="border-r px-2 text-xs font-light ">
              {item.style2}
            </span>{" "}
            <span className="text-xs font-light ">{item.style3}</span>
          </p>
          <div className="flex justify-center gap-2 items-center">
            {item.social1 !== "" ? (
              <>
                <img
                  src={item.social1}
                  alt="creatives-grid-socials"
                  className="w-[20.82px] h-[20.82px] object-cover  "
                />
                <span className="divider"></span>
              </>
            ) : (
              ""
            )}
            <img
              src={item.social2}
              alt="creatives-grid-socials"
              className="w-[20.82px] h-[20.82px] object-cover"
            />
          </div>
        </div>
      </div>
    </Fade>
  );

  return (
    <div className="h-[auto] w-full bg-creatives ">
      <div className="md:text-center text-start px-6 bg-gradient-to-r from-transparent via-[#F04C00FF] py-12  h-[auto] to-transparent">
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1000} // Animation lasts 1 second
        >
          <p className="xl:text-[52px] text-2xl md:text-4xl  text-white headerWithFont ">
            Meet Our Creatives
          </p>
        </Fade>

        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1200} // Animation lasts 1 second
        >
          <p className="md:text-base text-xs font-light text-white w-full md:max-w-xl mx-auto leading-8">
            Discover the visionaries shaping the future of storytelling. Our
            talents bring authenticity and creativity to every project."
          </p>
        </Fade>
        <div className="sm:grid grid-cols-1 sm:grid-cols-2 hidden md:grid-cols-3  lg:grid-cols-4 justify-start md:justify-center w-full  sm:max-w-7xl  mx-auto gap-4 mt-8 ">
          {CreativesData.map((item: dataProps, index: number) => (
            <CreativeItem key={index} item={item} />
          ))}
        </div>

        <div className="block sm:hidden">
          <Carousel
            className="rounded-none my-3 "
            placeholder="" // Add a placeholder if needed
            onPointerEnterCapture={() => {}} // Provide a no-op function
            onPointerLeaveCapture={() => {}} // Provide a no-op function
          >
            {/* Add your carousel items here */}
            {CreativesData.map((item: dataProps, index: number) => (
              <CreativeItem key={index} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
