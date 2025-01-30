import { Facebook, Instagram, Logo, Tiktok } from "../../../assets/images";
import scrollIntoView from "smooth-scroll-into-view-if-needed"; // Import the scrollIntoView function

export const Footer = () => {
  const handleScrollTo = (section: string) => {
    const checkRoute = location.pathname;
    if (checkRoute === "/about") {
      const newUrl =
        window.location.href.replace("/about", "") + `/home#${section}`;
      window.history.pushState({}, "", newUrl); // Update URL
      // Scroll to the respective section after the URL change
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          scrollIntoView(element, {
            behavior: "smooth",
            block: "start",
          });
        }
      }, 1000); // Delay to ensure the URL change takes effect
    }
  };

  return (
    <div className="px-6 py-6 md:p-12 bg-[#146A90]  text-white text-sm font-light">
      <div className="flex justify-between flex-wrap items-start max-w-7xl mx-auto border-b border-b-neutral-400/45 pb-6 ">
        <div className="w-full lg:max-w-xl text-start order-2 lg:order-1 my-3">
          <img
            src={Logo}
            alt="logo"
            className="object-cover h-full w-[215px]"
          />
          <p>
            {" "}
            Manifold is a premier talent agency celebrating the brilliance of
            African and diasporan creatives in North America. Our mission is to
            bridge talent and opportunities.
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-4 md:gap-36 w-full lg:w-auto order-1 lg:order-2">
          <div className="text-start ">
            <p className="my-3 font-bold">Navigation</p>
            <ul>
              <li>
                <a href="#home" onClick={() => handleScrollTo("home")}>
                  Home
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="/about" onClick={() => handleScrollTo("about")}>
                  About Us
                </a>{" "}
              </li>
              <li>
                <a href="#talent" onClick={() => handleScrollTo("talent")}>
                  Talent
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="text-start ">
            <p className="my-3 font-bold">Help</p>
            <ul>
              <li>
                <a href="#privacy" onClick={() => handleScrollTo("privacy")}>
                  Privacy Policy
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="#terms" onClick={() => handleScrollTo("terms")}>
                  Terms of Use
                </a>{" "}
              </li>
              <li>
                <a href="#contact" onClick={() => handleScrollTo("contact")}>
                  Contact Us
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-4 items-center  max-w-7xl mx-auto">
        <div>Copyright © 2025 | All Rights Reserved </div>
        <div className="flex gap-2">
          <img
            src={Instagram}
            alt="socials-logos"
            className="rounded-full h-6 w-5 object-cover"
          />
          <img
            src={Tiktok}
            alt="socials-logos"
            className="rounded-full h-6 w-5 object-cover"
          />
          <img
            src={Facebook}
            alt="socials-logos"
            className="rounded-full h-6 w-5 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
