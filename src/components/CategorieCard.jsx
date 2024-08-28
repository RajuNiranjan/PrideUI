import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FaSnapchatSquare } from "react-icons/fa";

import { SiMega } from "react-icons/si";
import { Button } from "./ui/button";
import { FaFacebookSquare } from "react-icons/fa";
import { MoveRight } from "lucide-react";

const CategorieCard = ({ category, apps, description }) => {
  return (
    <Card className="w-full flex flex-col gap-2 h-max md:h-[280px]  max-w-[300px] sm:h-[300px] overflow-hidden  hover:shadow-xl transition-all duration-200 space-y-2 p-2">
      <CardHeader className="p-0">
        <CardTitle className="text-sm md:text-2xl">{category}</CardTitle>
      </CardHeader>
      <CardContent className=" h-max sm:h-[70%] flex flex-col gap-2  p-0 ">
        <p className="text-xs md:text-sm text-gray-500">{description}</p>
        <div className="flex gap-2 items-center">
          <FaFacebookSquare size={24} className="text-blue-500" />
          <SiMega size={24} className="text-red-500" />
          <FaSnapchatSquare size={24} className="text-yellow-400" />
        </div>
      </CardContent>
      <hr />
      <CardFooter className="flex flex-col md:flex-row md:justify-between md:items-center p-0 gap-1 h-[30%]">
        <p className="text-xs md:text-lg text-green-500 ">{apps} Apps</p>
        <Button className="h-6 md:h-8  text-xs md:text-sm p-1 md:p-2  rounded-full flex justify-center items-center gap-2">
          Explore more <MoveRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategorieCard;
