import React from "react";
import BoxReveal from "@/components/ui/box-reveal";
import JoinNowDialog from "@/components/custom/Authentication/JoinNowDialog";

const HomeScreen = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-[10%] flex justify-between items-center px-10">
        <div>
          <h1 className="font-bold text-xl">PRIDE COMMUNITY</h1>
        </div>
        <div>
          <JoinNowDialog />
        </div>
      </div>
      <div className="h-[60%] flex items-center ">
        <div className="w-[50%]  h-full flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <div>
              <BoxReveal boxColor={"red"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                  WELCOME<span className="text-[red]">!</span>
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"red"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                  Here <span className="text-[red]">You Are</span>
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"red"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem]">
                  You Are{" "}
                  <span className="text-[red]">
                    Sace, Seen, and Celebrated.
                  </span>
                </h2>
              </BoxReveal>
            </div>
            <BoxReveal boxColor={"red"} duration={0.5}>
              <JoinNowDialog />
            </BoxReveal>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          {/* <div className="w-[450px] h-[200px]  shadow-xl shadow-red-500 rounded-xl "></div> */}
        </div>
      </div>
      <div className="h-[30%] bg-red-500"></div>
    </div>
  );
};

export default HomeScreen;
