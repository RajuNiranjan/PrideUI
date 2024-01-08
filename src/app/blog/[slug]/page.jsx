import React from "react";

const SinglePostPage = async ({ params }) => {
  return (
    <div className="flex  p-10 ">
      <div className="flex-1">
        <img
          className="w-72"
          src="https://i.pinimg.com/236x/2a/9d/e4/2a9de415d49b21010e0e226726df1f6b.jpg"
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1>Title</h1>
        <div className="flex items-center mt-5 gap-3">
          <div className="flex justify-center item-center">
            <img
              className="h-10 w-10 object-fill rounded-full"
              src="https://i.pinimg.com/236x/7f/ea/12/7fea12f884dd6dfe3421c9ea49cd9bda.jpg "
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <span>Auther</span>
            <span>Teerry jaddu</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Published</span>
            <span>06/01/2024</span>
          </div>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            sapiente eos exercitationem magni qui alias aliquam tempora,
            quisquam accusantium nulla sit architecto, aperiam neque atque,
            dolorem doloremque quas cupiditate sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
