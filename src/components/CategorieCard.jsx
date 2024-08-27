import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

const CategorieCard = ({ title, image, description }) => {
  return (
    <Card className="w-full max-w-[300px] md:h-[300px] hover:shadow-xl">
      <CardContent className="h-[75%]">
        <Image width={500} height={500} src="" alt="categori_img" />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 h-[25%]">
        <h1 className="text-sm md:text-lg">{title}</h1>
        <small className="hidden md:block text-gray-500">{description}</small>
      </CardFooter>
    </Card>
  );
};

export default CategorieCard;
