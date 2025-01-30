import "./App.css";
import { AboutInfo } from "./presentation/components/aboutInfo/aboutInfo";
import { AutoSilder } from "./presentation/components/autoSlider/autoSilder";
import { Creatives } from "./presentation/components/creatives/creatives";
import { Footer } from "./presentation/components/footer/footer";
import { HeroSection } from "./presentation/components/hero/heroSection";
import JoinUs from "./presentation/components/joinUs/joinUs";
import { StickyNavbar } from "./presentation/components/navbar";

function App() {
  return (
    <div className="text-black font-bold bg-white w-full p-0 m-0 max-w-full ">
      <StickyNavbar>
        <HeroSection />
        <AutoSilder/>
        <AboutInfo/>
        <Creatives/>
        <JoinUs/>
        <Footer/>
      </StickyNavbar>
    </div>
  );
}

export default App;
