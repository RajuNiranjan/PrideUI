import PostCard from "@/components/PostCard";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-4">
      <PostCard
        img="https://i.pinimg.com/564x/27/21/d9/2721d9210cdbf453e1e0af0ce0db340b.jpg"
        title="shirt and pant"
        desc="one demo"
      />
      <PostCard
        img="https://i.pinimg.com/236x/19/63/8b/19638be1c183dbf075adca545371ee49.jpg"
        title="shirt and pant"
        desc="Demo"
      />
      <PostCard
        img="https://i.pinimg.com/236x/6a/9a/a8/6a9aa8821738ec43af66b4cb21142bcc.jpg"
        title="shirt and pant"
        desc="Anoother demo"
      />
      <PostCard
        img="https://i.pinimg.com/236x/d8/08/ab/d808aba25445e5bed313d8cc0151fb34.jpg"
        title="shirt and pant"
        desc=" yes it is"
      />
    </div>
  );
};

export default page;
