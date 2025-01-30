import React, { ReactNode, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLogo } from "../../../assets/images";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { useLocation } from "react-router-dom";

interface StickyNavbarProps {
  children: ReactNode; // This allows for any valid React children type
}

export function StickyNavbar({ children }: StickyNavbarProps): JSX.Element {
  const [openNav, setOpenNav] = React.useState(false);
  const [activeNav, setActiveNav] = useState<string>(""); // Track active nav item
  const location = useLocation();

  const handleNavClick = (section: string) => {
    const checkRoute = location.pathname;
    if (checkRoute === "/about") {
      const newUrl =
        window.location.href.replace("/about", "") + `/home#${section}`;
      window.history.pushState({}, "", newUrl); // Update URL
      // Scroll to the respective section after the URL change
      setActiveNav(`/home#section`);
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

  // const handleNavClickAbout = (section: string) => {
  //   const element = document.getElementById(section);
  //   if (element) {
  //     scrollIntoView(element, {
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //     setActiveNav(section);
  //   }
  // };

  useEffect(() => {
    // alert(activeNav);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, [activeNav]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal ${
          activeNav === "home" || activeNav === ""
            ? "text-blue-500 border py-2 px-3"
            : ""
        }`} // Active class
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onClick={() => handleNavClick("home")}
      >
        <a href="#home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal ${
          activeNav === "about" ? "text-blue-500 border py-2 px-3" : ""
        }`}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onClick={() => handleNavClick("about")}
      >
        <a href="/about" className="flex items-center">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal ${
          activeNav === "/home#talent" ? "text-blue-500 border py-2 px-3" : ""
        }`}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onClick={() => handleNavClick("talent")}
      >
        <a href="#talent" className="flex items-center">
          Talent
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal ${
          activeNav === "contact" ? "text-blue-500 border py-2 px-3" : ""
        }`}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onClick={() => handleNavClick("contact")}
      >
        <a href="#contact" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="h-screen w-full overflow-scroll">
      <Navbar
        className="sticky top-0 left-0 z-10 h-max max-w-full  rounded-none px-4 py-2 lg:px-8 lg:py-4 text-blue-950"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="flex items-center justify-between text-blue-900 md:mx-24">
          <>
            <img
              src={NavLogo}
              alt="logo"
              className="object-cover h-full w-[215px]"
            />
          </>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder=""
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
      <div className=" max-w-full">{children}</div>
    </div>
  );
}
