export const AutoSlider = () => {
  return (
    <>
      <div className="bg-[#146A90] px-4 py-12  w-full ">
        <ul className="flex flex-col items-left justify-left w-full ">
          <div id="scroll-container">
            <div id="scroll-text">
            <ul className="flex flex-nowrap gap-4 w-full">
              {[1, 2, 3, 4, 5, 6, 7].map((key) => (
                <li key={key} className="text-white whitespace-normal">
                 <p className="w-[300px]">CONTACT DETAILS</p> 
                </li>
              ))}
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
