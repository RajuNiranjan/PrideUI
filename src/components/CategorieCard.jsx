import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

const CategorieCard = ({ title, image, description }) => {
  return (
    <Card className="w-full max-w-[300px] h-[280px] hover:shadow-xl transition-all duration-200">
      <CardContent className="h-[75%] flex justify-center items-center">
        <Image width={500} height={500} src={image} alt="categori_img" />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 h-[25%]">
        <h1 className="text-sm md:text-lg">{title}</h1>
        <small className=" text-gray-500">{description}</small>
      </CardFooter>
    </Card>
  );
};

export default CategorieCard;
