import { Ayomide } from "../../../assets/images";
import { CreativesData } from "../../../data/creativesData";
interface dataProps {
  image: string;
  name: string;
  style1: string;
  style2: string;
  style3: string;
  social1: string;
  social2: string;
}
export const Creatives = () => {
  return (
    <section className="h-[auto] w-full bg-creatives ">
      <div className="text-center bg-gradient-to-r from-transparent via-[#F04C00FF] py-12  h-[auto] to-transparent">
        <p className="text-[52px] text-white headerWithFont ">
          Meet Our Creatives
        </p>
        <p className="text-sm font-light text-white max-w-xl mx-auto leading-8">
          Discover the visionaries shaping the future of storytelling. Our
          talents bring authenticity and creativity to every project."
        </p>
        <div className="flex justify-center max-w-7xl flex-wrap mx-auto gap-4 mt-8">
          {CreativesData.map((item: dataProps, index: number) => (
            <div key={index}>
              <div className="bg-white p-3 border-0 ">
                <img
                  src={item.image}
                  alt="creatives-grid-img"
                  className="w-[244px] h-[263px] object-cover"
                />
                <p className="font-bold text-xs mt-2">{item.name}</p>
                <p className="my-3">
                  <span className="border-r px-2 text-xs font-light ">
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
          ))}
        </div>
      </div>
    </section>
  );
};
