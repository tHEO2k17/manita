import { HeroImg } from "../../../assets/images";

export const HeroSection = () => {

  return (
    <section className="relative h-screen max-w-full">
      {/* Image */}
      <img 
        src={HeroImg} 
        alt="hero-img" 
        className="h-screen w-full object-cover" 
      />
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text (centered) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="font-bold headerWithFont xl:text-[78.61px]">Manifold Talent</h1>
        <p className="mt-4 text-lg font-light">Connecting world-class talent with iconic brands to craft stories that resonate</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
            <button className="bg-white text-black text-xs p-5">Join Our Roster</button>
            <button className="border text-white text-xs p-5">Join Our Roster</button>
        </div>
        <div className="flex justify-center flex-wrap gap-12" >
            <div>
                <p className="text-[25.22px]">8</p>
                <p className="text-xs">Creators</p>
            </div>
            <div>
                <p className="headerWithFont text-[25.22px]">93.4k</p>
                <p className="text-xs">Avg. IG Reels Play</p>
            </div>

        </div>
      </div>
     
    </section>
  );
};
