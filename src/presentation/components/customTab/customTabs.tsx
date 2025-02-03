import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const CustomTab = () => {
  const [active, setActive] = useState("one");

  const toggleButton = (value: any) => {
    switch (value) {
      case "one":
        setActive("one");

        break;
      case "two":
        setActive("two");

        break;
    }
  };

  const firstTabForm = (
    <Fade
      direction="up"
      delay={100} // Wait 200ms before starting
      duration={500} // Animation lasts 1 second
    >
      <form>
        <div className="py-2">
          <p>
            <label className="text-black font-normal md:text-sm text-xs ">
              Full Name
            </label>
          </p>
          <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
        </div>
        <div className=" py-2">
          <p>
            <label className="text-black font-normal md:text-sm text-xs">
              Email
            </label>
          </p>
          <input type="text" className="p-2  w-full"  style={{border:'1px solid gray'}}/>
        </div>
        <div className="flex gap-4 ">
          <div className="w-1/2  py-2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                City
              </label>
            </p>
            <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
          </div>
          <div className="w-1/2  py-2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                State
              </label>
            </p>
            <input type="text" className="p-2  w-full" style={{border:'1px solid gray'}}/>
          </div>
        </div>
        <div className=" py-2">
          <p>
            <label className="text-black font-normal md:text-sm text-xs">
              Phone Number
            </label>
          </p>
          <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
        </div>
        <div className="flex gap-4 ">
          <div className="w-1/2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                Instagram
              </label>
            </p>
            <input type="text" className="p-2   w-full" style={{border:'1px solid gray'}}/>
          </div>
          <div className="w-1/2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                TikTok
              </label>
            </p>
            <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
          </div>
        </div>
        <button className="w-full p-3 md:text-sm text-xs text-white bg-[#F76828] my-4">
          Submit
        </button>
      </form>
    </Fade>
  );

  const secondTabForm = (
    <Fade
      direction="up"
      delay={100} // Wait 200ms before starting
      duration={1000} // Animation lasts 1 second
    >
      <form>
        <div className=" py-2">
          <p>
            <label className="text-black font-normal md:text-sm text-xs">
              Brand Name
            </label>
          </p>
          <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
        </div>
        <div className=" py-2">
          <p>
            <label className="text-black font-normal md:text-sm text-xs">
              Category
            </label>
          </p>
          <input type="text" className="p-2 w-full" style={{border:'1px solid red'}} />
        </div>
        <div className="flex gap-4 ">
          <div className="w-1/2  py-2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                City
              </label>
            </p>
            <input type="text" className="p-2 border border-gray-300 w-full" />
          </div>
          <div className="w-1/2  py-2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                State
              </label>
            </p>
            <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
          </div>
        </div>
        <div className="flex gap-4 py-2">
          <div className="w-1/2  py-2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                Email
              </label>
            </p>
            <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
          </div>
          <div className="w-1/2  py-2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                Phone Number
              </label>
            </p>
            <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="w-1/2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                Instagram
              </label>
            </p>
            <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}}/>
          </div>
          <div className="w-1/2">
            <p>
              <label className="text-black font-normal md:text-sm text-xs">
                TikTok
              </label>
            </p>
            <input type="text" className="p-2 w-full" style={{border:'1px solid gray'}} />
          </div>
        </div>
        <button className="w-full p-3 md:text-sm text-xs text-white bg-[#F76828] my-4">
          Submit
        </button>
      </form>
    </Fade>
  );

  return (
    <div
      className={`w-full xl:max-w-full m-0  lg:p-0 overflow-hidden items-center justify-start 
      `}
    >
      <div className="p-0 m-0 bg-white ">
        <Fade
          direction="up"
          delay={200} // Wait 200ms before starting
          duration={1000} // Animation lasts 1 second
          fraction={0.5}
        >
          <menu className="menu flex gap-2 my-3  w-max px-1 py-1  relative items-center justify-start bg-[#DCCCC5]">
            <button
              className={`menu__item active ${
                active === "one" &&
                "bg-[#f76829] text-white transform py-2 px-6  duration-1000 "
              } text-xs font-normal py-2 px-6 `}
              onClick={() => toggleButton("one")}
            >
              Creator
            </button>
            <button
              className={`menu__item active ${
                active === "two" &&
                "bg-[#f76829] text-white text-xs font-light py-2 px-6 transform  duration-1000 "
              }  text-xs font-normal py-2 px-6`}
              onClick={() => toggleButton("two")}
            >
              Branch
            </button>
          </menu>
        </Fade>
        <div className={active === "two" ? "hidden" : "block"}>
          {firstTabForm}
        </div>
        <div className={active === "one" ? "hidden" : "block"}>
          {secondTabForm}
        </div>
      </div>
    </div>
  );
};

export default CustomTab;
