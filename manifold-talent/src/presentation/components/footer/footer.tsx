import { Facebook, Instagram, Tiktok } from "../../../assets/images";

export const Footer = () => {
  return (
    <div className="p-12 bg-[#146A90]  text-white text-sm font-light">
      <div className="flex justify-between max-w-7xl mx-auto border-b border-b-neutral-400/45 pb-6 ">
        <div className="max-w-xl text-start">
          Manifold is a premier talent agency celebrating the brilliance of
          African and diasporan creatives in North America. Our mission is to
          bridge talent and opportunities.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
          <div className="text-start ">
            <p className="my-3 font-bold">Navigation</p>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li className="my-2">
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Talent</a>
              </li>
            </ul>
          </div>
          <div className="text-start ">
            <p className="my-3 font-bold">Help</p>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li className="my-2">
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-4 items-center  max-w-7xl mx-auto">
        <div>Copyright © 2025 | All Rights Reserved </div>
        <div className="flex gap-2">
          <img src={Instagram} alt="socials-logos" className="rounded-full h-6 w-5 object-cover" />
          <img src={Tiktok} alt="socials-logos" className="rounded-full h-6 w-5 object-cover" />
          <img src={Facebook} alt="socials-logos" className="rounded-full h-6 w-5 object-cover" />

        </div>
      </div>
    </div>
  );
};
