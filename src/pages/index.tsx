import JoinNowDialog from "@/components/custom/Authentication/JoinNowDialog";
import BoxReveal from "@/components/ui/box-reveal";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="h-screen">
      <div className="h-[10%] flex justify-between items-center px-10">
        <div>
          <h1 className="font-bold">PrideConnect</h1>
        </div>
        <div>
          <JoinNowDialog />
        </div>
      </div>
      <div className="h-[60%] grid grid-cols-1 md:grid-cols-2 ">
        <div className="h-full flex justify-center items-center">
          <div>
            <div>
              <BoxReveal boxColor={"red"} duration={0.5}>
                <h1 className="font-bold text-[3.5rem]">Express yourself</h1>
              </BoxReveal>
              <BoxReveal boxColor={"red"} duration={0.5}>
                <h1 className="font-semibold text-[3.5rem]">
                  <span className="text-red-500">&</span>
                  <span> connect with</span>
                </h1>
              </BoxReveal>
              <BoxReveal boxColor={"red"} duration={0.5}>
                <p>connect openly and Authentically with our community.</p>
              </BoxReveal>
            </div>
            <div>
              <JoinNowDialog />
            </div>
          </div>
        </div>
        <div className="h-full flex justify-center items-center">RIGHT</div>
      </div>
      <div className="h-[30%] bg-red-500"></div>
    </div>
  );
};

export default HomeScreen;
