import { GridAboutImg1 } from "../../../assets/images";

export const AboutInfo = () => {
  return (
    <section className="h-screen relative p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:max-w-[80vw] items-center mx-auto bg-white">
      <div className="bg-kente p-4">
        <img
          src={GridAboutImg1}
          alt="about-manifold-talent-img"
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <p className="xl:text-[52px] text-start headerWithFont text-[#152E39]">
          About Manifold Talent
        </p>
        <p className="text-start text-base font-light leading-8  w-full md:w-[512px]">
          Manifold is a premier talent agency celebrating the brilliance of
          African and diasporan creatives in North America. Our mission is to
          bridge talent and opportunity, creating meaningful connections that
          redefine storytelling across beauty, fashion, and hair care
          industries.
        </p>
        <div className="text-start mt-8">
          <button className="text-white text-xs py-4 px-6 font-light bg-[#146A90]">
            Learn More About Our Vision
          </button>
        </div>
      </div>
    </section>
  );
};
