import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between items-center gap-3 p-10">
      <div className="flex-1">
        <Image src="/contact.png" width={500} height={500}></Image>
      </div>
      <form className="flex-1 flex flex-col gap-5">
        <Input type="text" placeholder="Name and sureName" />
        <Input type="email" placeholder="Email addrss" />
        <Input type="text" placeholder="Phone Number" />
        <textarea
          placeholder="message..."
          name=""
          className="bg-transparent border rounded-md h-10 p-2 focus:outline-none"
          id=""
          cols="30"
          rows="10"></textarea>
        <Button btnName="send" />
      </form>
    </div>
  );
};

export default page;
