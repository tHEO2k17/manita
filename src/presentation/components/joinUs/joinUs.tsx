import { JoinUsImg } from "../../../assets/images";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const JoinUs = () => {
  const firstTabForm = (
    <div>
      <div className="inline">
        <p>
          <label className="text-black">Full Name</label>
        </p>
        <input type="text" className="p-3 border w-full" />
      </div>
      <div className="inline">
        <p>
          <label className="text-black">Email</label>
        </p>
        <input type="text" className="p-3 border w-full" />
      </div>
      <div className="flex gap-4 ">
        <div className="w-1/2">
          <p>
            <label className="text-black">City</label>
          </p>
          <input type="text" className="p-3 border w-full" />
        </div>
        <div className="w-1/2">
          <p>
            <label className="text-black">State</label>
          </p>
          <input type="text" className="p-3 border w-full" />
        </div>
      </div>
      <div className="inline">
        <p>
          <label className="text-black">Phone Number</label>
        </p>
        <input type="text" className="p-3 border w-full" />
      </div>
      <div className="flex gap-4 ">
        <div className="w-1/2">
          <p>
            <label className="text-black">Instagram</label>
          </p>
          <input type="text" className="p-3 border w-full" />
        </div>
        <div className="w-1/2">
          <p>
            <label className="text-black">TikTok</label>
          </p>
          <input type="text" className="p-3 border w-full" />
        </div>
      </div>
      <button className="w-full p-3 text-sm text-white bg-[#F76828] my-4">Submit</button>
    </div>
  );
  return (
    <section className="h-screen w-full bg-join-us py-8">
      <div className=" flex gap-8 rounded-xl items-center bg-white md:max-w-[80vw] mx-auto  ">
        <div className="rounded-tl-xl rounded-bl-xl">
          <img
            src={JoinUsImg}
            alt="join-us-img"
            className="max-h-[924px] w-[650px]  object-cover object-top rounded-tl-xl rounded-bl-xl"
          />
        </div>
        <div className="p-6 text-start">
          <p className="headerWithFont text-[52px] ">Join Us!</p>{" "}
          <p className="lg:max-w-xl leading-8 font-light my-4">
            Are you a talented creative looking for representation, or a brand
            seeking innovative partnerships, we invite you to explore our site
            and connect with us.
          </p>
          <form>
            <Tabs value="html">
              <TabsHeader
                placeholder="" // Add a placeholder if needed
                onPointerEnterCapture={() => {}} // Provide a no-op function
                onPointerLeaveCapture={() => {}}
                className="bg-gray-400 max-w-xl"
              >
                <Tab
                  key={"creator"}
                  value={"creator"}
                  placeholder="" // Add a placeholder if needed
                  onPointerEnterCapture={() => {}} // Provide a no-op function
                  onPointerLeaveCapture={() => {}}
                  className="rounded-none"
                >
                  Creator
                </Tab>
                <Tab
                  key={"brand"}
                  value={"brand"}
                  placeholder="" // Add a placeholder if needed
                  onPointerEnterCapture={() => {}} // Provide a no-op function
                  onPointerLeaveCapture={() => {}}
                  className="rounded-none"
                >
                  Brand
                </Tab>
              </TabsHeader>
              <TabsBody
                placeholder="" // Add a placeholder if needed
                onPointerEnterCapture={() => {}} // Provide a no-op function
                onPointerLeaveCapture={() => {}}
              >
                <TabPanel key={"creator"} value={"creator"} className="max-w-4xl">
                  {firstTabForm}
                </TabPanel>
                <TabPanel key={"brand"} value={"brand"}>
                  masdsd
                </TabPanel>
              </TabsBody>
            </Tabs>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
