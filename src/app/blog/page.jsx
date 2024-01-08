import PostCard from "@/components/PostCard";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("something went worng");
  }
  return res.json();
};

const page = async () => {
  const post = await getData();
  return (
    <div className="grid grid-cols-4">
      {post.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          img="https://i.pinimg.com/564x/27/21/d9/2721d9210cdbf453e1e0af0ce0db340b.jpg"
          title={post.title}
          desc={post.body}
        />
      ))}
    </div>
  );
};

export default page;
