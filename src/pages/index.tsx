import JoinNowDialog from "@/components/custom/Authentication/JoinNowDialog";
import BoxReveal from "@/components/ui/box-reveal";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// BACKGOUND IMAGE = 'http://res.cloudinary.com/dlgewrscf/image/upload/v1728655934/rhnnpswb1jwyo9bazknh.jpg'

const HomeScreen = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  console.log("user,", user);

  return (
    <div className="h-screen ">
      <div className="h-[10%] flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
            PrideConnect
          </h1>
        </div>
        <div>
          <JoinNowDialog />
        </div>
      </div>
      <div className="h-[60%] grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-full  flex justify-center items-center">
          <div className="space-y-4 ">
            <div>
              <BoxReveal boxColor="red" duration={0.5}>
                <h1 className="font-bold text-[3.5rem]">Express yourself</h1>
              </BoxReveal>
              <BoxReveal boxColor="red" duration={0.5}>
                <h1 className="font-bold text-[3.5rem]">
                  <span className="text-red-500">&</span>
                  <span> connect with</span>
                </h1>
              </BoxReveal>
              <BoxReveal boxColor="red" duration={0.5}>
                <p>connect openly and Authentically with our community.</p>
              </BoxReveal>
            </div>
            <div className="float-end">
              <JoinNowDialog />
            </div>
          </div>
        </div>
        <div className="h-full flex justify-center items-center">
          <div>
            <Image
              src="http://res.cloudinary.com/dlgewrscf/image/upload/v1728654707/zuivz3xn593b4miwuifa.jpg"
              alt="pride_image"
              width={500}
              height={500}
              className="rounded-lg shadow-xl shadow-red-500 "
            />
          </div>
        </div>
      </div>
      <div className="h-[30%] "></div>
    </div>
  );
};

export default HomeScreen;
