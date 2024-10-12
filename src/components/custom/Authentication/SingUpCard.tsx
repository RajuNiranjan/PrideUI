import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GENDERS } from "@/utils/Genders";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import EyeOff from "@/asserts/svg/eyeOff.svg";
import EyeOpen from "@/asserts/svg/eyeOpen.svg";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth.hook";

export interface SignUpForm {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  mobileNumber: string;
  acceptTerms: boolean;
  gender: string;
}

const SingUpCard = () => {
  const [formData, setFormData] = React.useState<SignUpForm>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    mobileNumber: "",
    acceptTerms: false,
    gender: "",
  });

  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [dob, setDob] = useState<Date | undefined>();

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle gender selection
  const handleGenderChange = (value: string) => {
    setFormData({
      ...formData,
      gender: value,
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      acceptTerms: checked,
    });
  };

  // Handle date selection
  const handleDateChange = (date: Date | undefined) => {
    setDob(date);
    setFormData({
      ...formData,
      dob: date ? date.toISOString().split("T")[0] : "",
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <div className="w-full">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label>EMAIL</Label>
          <Input
            type="email"
            name="email"
            placeholder="john@deo.com"
            className="rounded-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="space-y-2 w-full">
            <Label>USER NAME</Label>
            <Input
              type="text"
              name="userName"
              placeholder="John Deo"
              className="rounded-full"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="space-y-2  w-full">
            <Label>DOB</Label>
            <div className="w-full">
              <Popover>
                <PopoverTrigger className="w-full">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="rounded-full gap-2 text-red-500 w-full hover:bg-transparent">
                    <CalendarIcon className="h-4 w-4" />
                    {dob ? dob.toDateString() : "Select Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={dob}
                    onSelect={handleDateChange}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="space-y-2 w-full">
          <Label>MOBILE NUMBER</Label>
          <Input
            type="number"
            name="mobileNumber"
            className="rounded-full"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label>GENDER</Label>
          <Select value={formData.gender} onValueChange={handleGenderChange}>
            <SelectTrigger className="w-full  rounded-full">
              <SelectValue placeholder="SELECT YOUR GENDER" />
            </SelectTrigger>
            <SelectContent>
              {GENDERS.map((gender, idx) => (
                <SelectItem key={idx} value={gender}>
                  {gender}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="space-y-2 w-full">
            <Label>PASSWORD</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=""
                className="rounded-full"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="absolute top-2 right-2">
                {showPassword ? (
                  <Image
                    src={EyeOff}
                    alt="eye_close"
                    height={20}
                    width={20}
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  />
                ) : (
                  <Image
                    src={EyeOpen}
                    alt="eye_close"
                    height={20}
                    width={20}
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2 w-full">
            <Label>CONFIRM PASSWORD</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder=""
                className="rounded-full"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div className="absolute top-2 right-2">
                {showPassword ? (
                  <Image
                    src={EyeOff}
                    alt="eye_close"
                    height={20}
                    width={20}
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  />
                ) : (
                  <Image
                    src={EyeOpen}
                    alt="eye_close"
                    height={20}
                    width={20}
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={formData.acceptTerms}
            onCheckedChange={handleCheckboxChange}
          />
          <Label>I agree with the terms & conditions</Label>
        </div>
        <div className="w-full">
          <Button
            type="submit"
            className="w-full rounded-full bg-red-500 hover:bg-red-600 transition-all duration-200">
            JOIN NOW
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SingUpCard;
