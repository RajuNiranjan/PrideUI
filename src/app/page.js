import SampleLayout from "@/components/sampleLayout/SampleLayout";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <SampleLayout
      heading="Creative Thoughts Agency"
      desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          sapiente."
      rightImg="/hero.gif"
      img="/brands.png"
      btn1="Learn more"
      btn2="Contact"
    />
  );
};

export default Home;
