export const AutoSilder = () => {
  return (
    <>
      <div className="bg-[#146A90] px-12 py-12  w-full ">
        <ul className="flex gap-12 justify-center ">
          {[1, 2, 3, 4, 5, 6, 7].map((key) => (
            <li key={key} className="text-white">
              CONTACT DETAILS
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
