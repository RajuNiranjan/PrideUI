import Link from "next/link";
import React from "react";

const PostCard = (props) => {
  return (
    <div>
      <div className="flex flex-col m-10 border max-w-[210px] p-1 rounded-md hover:bg-white hover:text-black">
        <img className="w-52" src={props.img} alt="" />
        <div className="mt-2 flex flex-col justify-center items-center gap-2">
          <h1 className="capitalize font-bold">{props.title}</h1>
          <p className="capitalize">{props.desc}</p>
          <Link href="/blog/post">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
