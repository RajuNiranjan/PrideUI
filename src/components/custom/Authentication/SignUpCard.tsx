import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GeNDERS } from "@/utils/Genders";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";

const SignUpCard = () => {
  return (
    <div>
      <form className="w-full space-y-4">
        <div className="space-y-2">
          <Label>EMAIL</Label>
          <Input type="email" placeholder="john@deo.com" />
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="space-y-2 w-full">
            <Label>USER NAME</Label>
            <Input type="text" placeholder="JOHN_DEO" />
          </div>
          <div className="space-y-2 w-full">
            <Label>Date Of Birth</Label>

            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className=" w-full">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick Your DOB</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    captionLayout="dropdown-buttons"
                    fromYear={1990}
                    toYear={2024}
                    mode="single"
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label>MOBILE NUMBER</Label>
          <div className="flex items-center gap-2 w-full">
            <div className="w-full">
              <Input type="number" placeholder="john@deo.com" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label>GENDER</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="SELECT YOUR GENDER" />
            </SelectTrigger>
            <SelectContent>
              {GeNDERS.map((gender, idx) => (
                <SelectItem key={idx} value={gender}>
                  {gender}
                </SelectItem>
              ))}{" "}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>PASSWORD</Label>
          <Input type="password" placeholder="john@deo.com" />
        </div>
        <div className="flex items-center gap-1">
          <Checkbox className="h-5 w-5" />{" "}
          <Label className="text-md">
            I am agree with the terms & conditions
          </Label>
        </div>
        <div className="w-full">
          <Button className="w-full rounded-full bg-red-500 hover:bg-red-600 transition-all duration-200">
            JOIN NOW
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpCard;
