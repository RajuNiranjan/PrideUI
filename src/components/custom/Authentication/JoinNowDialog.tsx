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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import LogInCard from "./LogInCard";
import SingUpCard from "./SingUpCard";

const JoinNowDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="rounded-full  bg-red-500 hover:bg-red-600 transition-all duration-300">
          JOIN NOW
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[650px] h-full min-h-[580px] max-h-[580px] ">
        <DialogHeader>
          <DialogTitle>
            <VisuallyHidden></VisuallyHidden>
          </DialogTitle>
          <DialogDescription>
            <Tabs defaultValue="logIn" className="w-full">
              <TabsList className="w-full bg-transparent">
                <TabsTrigger
                  value="logIn"
                  className="w-full h-10 data-[state=active]:bg-red-500 data-[state=active]:text-white font-bold transition-all duration-200 rounded-full">
                  LOG IN
                </TabsTrigger>
                <TabsTrigger
                  value="signUp"
                  className="w-full h-10 data-[state=active]:bg-red-500 data-[state=active]:text-white font-bold transition-all duration-200 rounded-full">
                  SIGN UP
                </TabsTrigger>
              </TabsList>
              <TabsContent value="logIn">
                <LogInCard />
              </TabsContent>
              <TabsContent value="signUp">
                <SingUpCard />
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default JoinNowDialog;
