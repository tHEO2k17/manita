import { AboutInfo } from "../components/aboutInfo/aboutInfo";
import { AutoSlider } from "../components/autoSlider/autoSilder";
import { Creatives } from "../components/creatives/creatives";

import { HeroSection } from "../components/hero/heroSection";
import JoinUs from "../components/joinUs/joinUs";
import { Partners } from "../components/partners/partners";

function Home() {
  return (
    <div className="text-black font-bold bg-white w-full p-0 m-0 max-w-full ">
      <section id="home">
        <HeroSection />
      </section>
      <section id="autoSlider">
        <AutoSlider />
      </section>
      <section id="talent">
        <AboutInfo />
      </section>
      <section id="creatives">
        <Creatives />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="contact">
        <JoinUs />
      </section>
      
    </div>
  );
}

export default Home;
