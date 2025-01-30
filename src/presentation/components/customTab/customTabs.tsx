import { useState } from "react";

const CustomTab = () => {
  const [active, setActive] = useState("one");
  const [translation, setTranslation] = useState("translationOne");
  const [position, setPosition] = useState("");

  const toggleButton = (value: any) => {
    switch (value) {
      case "one":
        setActive("one");
        setTranslation("translationOne");
        setPosition("translateX(4.5rem)");
        break;
      case "two":
        setActive("two");
        setTranslation("translationTwo");
        setPosition("translateX(9rem)");
        break;
    }
  };

  const firstTabForm = (
    <form>
      <div className=" py-2">
        <p>
          <label className="text-black font-normal text-sm">Full Name</label>
        </p>
        <input type="text" className="p-2 border border-gray-300 w-full" />
      </div>
      <div className=" py-2">
        <p>
          <label className="text-black font-normal text-sm">Email</label>
        </p>
        <input type="text" className="p-2 border border-gray-300 w-full" />
      </div>
      <div className="flex gap-4 ">
        <div className="w-1/2  py-2">
          <p>
            <label className="text-black font-normal text-sm">City</label>
          </p>
          <input type="text" className="p-2 border border-gray-300 w-full" />
        </div>
        <div className="w-1/2  py-2">
          <p>
            <label className="text-black font-normal text-sm">State</label>
          </p>
          <input type="text" className="p-2 border  border-gray-300 w-full" />
        </div>
      </div>
      <div className=" py-2">
        <p>
          <label className="text-black font-normal text-sm">Phone Number</label>
        </p>
        <input type="text" className="p-2 border border-gray-300  w-full" />
      </div>
      <div className="flex gap-4 ">
        <div className="w-1/2">
          <p>
            <label className="text-black font-normal text-sm">Instagram</label>
          </p>
          <input type="text" className="p-2 border border-gray-300  w-full" />
        </div>
        <div className="w-1/2">
          <p>
            <label className="text-black font-normal text-sm">TikTok</label>
          </p>
          <input type="text" className="p-2 border border-gray-300 w-full" />
        </div>
      </div>
      <button className="w-full p-3 text-sm text-white bg-[#F76828] my-4">
        Submit
      </button>
    </form>
  );

  const secondTabForm = (
    <form>
      <div className=" py-2">
        <p>
          <label className="text-black font-normal text-sm">Brand Name</label>
        </p>
        <input type="text" className="p-2 border border-gray-300 w-full" />
      </div>
      <div className=" py-2">
        <p>
          <label className="text-black font-normal text-sm">Category</label>
        </p>
        <input type="text" className="p-2 border border-gray-300 w-full" />
      </div>
      <div className="flex gap-4 ">
        <div className="w-1/2  py-2">
          <p>
            <label className="text-black font-normal text-sm">City</label>
          </p>
          <input type="text" className="p-2 border border-gray-300 w-full" />
        </div>
        <div className="w-1/2  py-2">
          <p>
            <label className="text-black font-normal text-sm">State</label>
          </p>
          <input type="text" className="p-2 border  border-gray-300 w-full" />
        </div>
      </div>
      <div className="flex gap-4 py-2">
        <div className="w-1/2  py-2">
          <p>
            <label className="text-black font-normal text-sm">
              Email
            </label>
          </p>
          <input type="text" className="p-2 border border-gray-300  w-full" />
        </div>
        <div className="w-1/2  py-2">
          <p>
            <label className="text-black font-normal text-sm">
              Phone Number
            </label>
          </p>
          <input type="text" className="p-2 border border-gray-300  w-full" />
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="w-1/2">
          <p>
            <label className="text-black font-normal text-sm">Instagram</label>
          </p>
          <input type="text" className="p-2 border border-gray-300  w-full" />
        </div>
        <div className="w-1/2">
          <p>
            <label className="text-black font-normal text-sm">TikTok</label>
          </p>
          <input type="text" className="p-2 border border-gray-300 w-full" />
        </div>
      </div>
      <button className="w-full p-3 text-sm text-white bg-[#F76828] my-4">
        Submit
      </button>
    </form>
  );

  return (
    <div
      className={`max-w-full   m-0 p-0 overflow-hidden items-center justify-start 
      `}
    >
      <div className="p-0 m-0 bg-white ">
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
