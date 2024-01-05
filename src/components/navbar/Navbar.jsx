import React from "react";
import Linkes from "./Linkes";

const Navbar = () => {
  return (
    <div className="bg-slate-800 flex h-16 justify-between items-center p-5">
      <div>
        <h1 className="font-extrabold">Logo</h1>
      </div>
      <div className="">
        <Linkes />
      </div>
    </div>
  );
};

export default Navbar;
