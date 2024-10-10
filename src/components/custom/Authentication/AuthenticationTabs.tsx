import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogInCard from "./LogInCard";
import SignUpCard from "./SignUpCard";

const AuthenticationTabs = () => {
  return (
    <Tabs defaultValue="logIn" className="w-full h-full">
      <TabsList className="w-full bg-transparent">
        <TabsTrigger
          value="logIn"
          className="w-full py-2 transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white"
        >
          LOG IN
        </TabsTrigger>
        <TabsTrigger
          value="signUp"
          className="w-full py-2 transition-all duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white"
        >
          SIGN UP
        </TabsTrigger>
      </TabsList>
      <TabsContent value="logIn">
        <LogInCard />
      </TabsContent>
      <TabsContent value="signUp">
        <SignUpCard />
      </TabsContent>
    </Tabs>
  );
};

export default AuthenticationTabs;
