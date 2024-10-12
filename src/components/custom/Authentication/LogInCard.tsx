import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent, FormEvent, useState } from "react";
import EyeOff from "@/asserts/svg/eyeOff.svg";
import EyeOpen from "@/asserts/svg/eyeOpen.svg";
import Image from "next/image";

interface LogInForm {
  userNameOremail: string;
  password: string;
}

const LogInCard = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<LogInForm>({
    userNameOremail: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form", formData);
  };

  return (
    <div>
      <form onSubmit={handleSumbitForm} className="space-y-4 ">
        <div className="space-y-2">
          <Label>USER NAME / EMAIL</Label>
          <Input
            type="text"
            name="userNameOremail"
            value={formData.userNameOremail}
            onChange={handleChangeInput}
            placeholder="john@deo.com"
            className="rounded-full"
          />
        </div>
        <div className="space-y-2">
          <Label>PASSWORD</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChangeInput}
              placeholder=""
              className="rounded-full"
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
        <div className="w-full">
          <Button
            type="submit"
            className="bg-red-500 w-full rounded-full hover:bg-red-600 transition-all duration-200">
            LOG IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogInCard;
