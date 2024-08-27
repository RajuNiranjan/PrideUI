import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

const CategorieCard = ({ title, image, description }) => {
  return (
    <Card className="w-full flex flex-col gap-2  max-w-[300px] md:h-[280px] overflow-hidden  hover:shadow-xl transition-all duration-200">
      <CardContent className=" h-[55%] md:h-[70%]  p-0 ">
        <Image
          width={500}
          height={500}
          src={image}
          alt="categori_img"
          className="rounded-sm"
        />
      </CardContent>
      <CardFooter className="flex flex-col p-1 items-start gap-1 h-[30%]">
        <h1 className="text-sm font-semibold md:text-lg">{title}</h1>
        <small className="text-xs md:text-sm text-gray-500 ">
          {description}
        </small>
      </CardFooter>
    </Card>
  );
};

export default CategorieCard;
