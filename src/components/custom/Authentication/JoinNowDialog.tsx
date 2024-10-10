import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AuthenticationTabs from "./AuthenticationTabs";

const JoinNowDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className={`rounded-full  bg-red-500 font-bold`}>
          Join Now
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-[600px]  min-w-[315px] max-w-[650px]  ">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <AuthenticationTabs />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default JoinNowDialog;
