interface dataProps {
  image: string;
}
import { Fade } from "react-awesome-reveal";

import {
  BeautyPartners,
  FashionPartners,
  HairPartners,
} from "../../../data/partnersData";
export const Partners = () => {
  const sections = [
    { title: "Beauty & Skin", data: BeautyPartners, limit: 9 },
    { title: "Fashion", data: FashionPartners, limit: 3 },
    { title: "Hair & Haircare", data: HairPartners, limit: 4 },
  ];
  const CreativeItem = ({ item }: { item: dataProps }) => (
    <div className="w-full sm:w-auto">
      <div className=" p-3 border-0 h-[auto] w-[200px] bg-transparent  md:w-full  ">
        <img
          src={item.image}
          alt="creatives-grid-img"
          className=" md:object-contain object-cover "
        />
      </div>
    </div>
  );

  return (
    <section className="h-[auto] w-full  ">
      <div className="md:text-center text-start px-6 py-12  h-[auto] to-transparent">
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1000} // Animation lasts 1 second
        >
          {" "}
          <p className="xl:text-[52px] text-2xl  my-4 md:text-4xl  text-black headerWithFont ">
            Meet Our Creatives
          </p>
        </Fade>
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1200} // Animation lasts 1 second
        >
          <p className="md:text-base text-xs font-light text-black my-4 w-full md:max-w-xl mx-auto leading-8">
            Collaborating with Leading Brands Across Industries
          </p>
        </Fade>
        {/* beauty and skin */}
        {sections.map((item: any, key: number) => (
          <Fade
            delay={200} // Wait 200ms before starting
            duration={1200} // Animation lasts 1 second
          >
            {" "}
            <div
              key={key}
              className="md:flex my-4 px-4 gap-6 bg-[#E8EEF0] rounded-md py-6 max-w-7xl mx-auto"
            >
              <div className="whitespace-normal text-xl mb-3 md:w-1/4 md:border-r border-gray-300 text-start">
                {item.title}
              </div>
              <div className="w-full md:grid grid-cols-5 items-center hidden">
                {item.data
                  .slice(0, item.limit)
                  .map((item: dataProps, index: number) => (
                    <CreativeItem key={index} item={item} />
                  ))}
              </div>
              <div className=" px-4 w-full block md:hidden">
                <ul className="flex flex-col items-left justify-left  ">
                  <div id="scroll-container">
                    <div id="scroll-text">
                      <ul className="flex gap-4 w-full items-center">
                        {item.data.map((item: dataProps, index: number) => (
                          <CreativeItem key={index} item={item} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
                {/* </div> */}
              </div>
            </div>
          </Fade>
        ))}

        {/* fashion */}
      </div>
    </section>
  );
};
