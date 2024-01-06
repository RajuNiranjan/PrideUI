import React from "react";
import Linkes from "./Linkes";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-800 flex h-16 justify-between items-center p-5">
      <div>
        <Link href="/">
          <h1 className="font-extrabold">Logo</h1>
        </Link>
      </div>
      <div className="">
        <Linkes />
      </div>
    </div>
  );
};

export default Navbar;
