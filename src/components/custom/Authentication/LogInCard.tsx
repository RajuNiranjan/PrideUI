import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import EyeOFF from "@/asserts/svg/eyeOff.svg";
import EyeOpen from "@/asserts/svg/eyeOpen.svg";
import Image from "next/image";

const LogInCard = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [form, setForm] = useState({
    usernameOremail: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("LOGIN FORM", form);
  };

  return (
    <div>
      <form onSubmit={handleLogIn} className="w-full space-y-4">
        <div className="space-y-2">
          <Label>USER NAME / EMAIL</Label>
          <Input
            type="text"
            name="usernameOremail"
            value={form.usernameOremail}
            onChange={handleChangeInput}
            placeholder="john@deo.com"
          />
        </div>
        <div className="space-y-2">
          <Label>PASSWORD</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChangeInput}
              placeholder="john@deo.com"
            />
            <div className="absolute top-2 right-3">
              {showPassword ? (
                <Image
                  src={EyeOFF}
                  alt="eye_off"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Image
                  src={EyeOpen}
                  alt="eye_off"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <Button type="submit" className="w-full rounded-full bg-red-500">
            LOG IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogInCard;
