import SampleLayout from "@/components/sampleLayout/SampleLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <SampleLayout
        mainHeading="About Agency"
        heading="We create digital ideas that are bigger, bolder, brave and better"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          sapiente.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          sapiente.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          sapiente."
        rightImg="/about.png"
        img="/brands.png"
        btn1="Learn more"
        btn2="Contact"
        count1="10K+"
        count2="231K+"
        count3="5K+"
        countHeading1="year of exoeriences"
        countHeading2="people reached"
        countHeading3="service and plugins"
      />
    </div>
  );
};

export default page;
