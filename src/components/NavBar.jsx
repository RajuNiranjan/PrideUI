import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 h-20 shadow-xl bg-white flex justify-center items-center">
      <Link href="/">
        <h1 className="font-bold text-xl">CATEGORIES CARD</h1>
      </Link>
    </nav>
  );
};

export default NavBar;
