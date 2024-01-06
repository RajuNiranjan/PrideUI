import Image from "next/image";
import React from "react";

const SampleLayout = (props) => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-xl text-slate-500 font-bold">
          {props.mainHeading}
        </h1>
        <h1 className="text-6xl font-bold">{props.heading}</h1>
        <p>{props.desc}</p>
        <div className="flex gap-5">
          <button className="border  p-3 rounded-md hover:bg-white hover:text-black">
            {props.btn1}
          </button>
          <button className="border  p-3 rounded-md hover:bg-white hover:text-black">
            {props.btn2}
          </button>
        </div>
        <div>
          <Image src={props.img} alt="" width={300} height={300} />
        </div>
        <div className="flex items-center  justify-between p-5">
          <div className="flex justify-center  gap-1 flex-col">
            <h1 className="font-extrabold text-4xl text-slate-600">
              {props.count1}
            </h1>
            <p className="text-sm capitalize ">{props.countHeading1}</p>
          </div>
          <div className="flex justify-center  gap-1 flex-col">
            <h1 className="font-extrabold text-4xl text-slate-600">
              {props.count2}
            </h1>
            <p className="text-sm capitalize ">{props.countHeading2}</p>
          </div>
          <div className="flex justify-center  gap-1 flex-col">
            <h1 className="font-extrabold text-4xl text-slate-600">
              {props.count3}
            </h1>
            <p className="text-sm capitalize ">{props.countHeading3}</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image src={props.rightImg} width={500} height={500}></Image>
      </div>
    </div>
  );
};

export default SampleLayout;
