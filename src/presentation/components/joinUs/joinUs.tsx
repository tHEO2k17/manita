import { JoinUsImg } from "../../../assets/images";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CustomTab from "../customTab/customTabs";

const JoinUs = () => {
 
  return (
    <section className="h-screen w-full bg-join-us py-12">
      <div className=" flex gap-8 rounded-4xl items-center bg-white md:w-[1200px] mx-auto  ">
        <div className="rounded-tl-xl rounded-bl-xl">
          <img
            src={JoinUsImg}
            alt="join-us-img"
            className="h-[800px] w-[480px]  object-fill object-center rounded-tl-4xl rounded-bl-4xl"
          />
        </div>
        <div className="p-6 text-start">
          <p className="headerWithFont text-[52px] ">Join Us!</p>{" "}
          <p className="lg:max-w-xl leading-8 font-light">
            Are you a talented creative looking for representation, or a brand
            seeking innovative partnerships, we invite you to explore our site
            and connect with us.
          </p>
          <CustomTab/>
          {/* <form>
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
                <TabPanel key={"creator"} value={"creator"} className="w-full">
                  {firstTabForm}
                </TabPanel>
                <TabPanel key={"brand"} value={"brand"}>
                  masdsd
                </TabPanel>
              </TabsBody>
            </Tabs>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
