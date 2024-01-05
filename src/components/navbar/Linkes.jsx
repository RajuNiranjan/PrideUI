"use client";
import Link from "next/link";
import { useState } from "react";

const Linkes = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-5 items-center">
      <>
        <div className="items-center hidden md:inline ">
          <div className="flex gap-5">
            {links.map((link) => (
              <Link href={link.path} key={link.title}>
                {link.title}
              </Link>
            ))}
            <>
              {session ? (
                <>
                  {isAdmin && <Link href="/admin">Admin</Link>}{" "}
                  <button className="bg-white rounded-md text-black p-1">
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="relative md:hidden  lg:hidden xl:hidden">
          Menu
        </button>
        {open && (
          <div className="flex flex-col absolute w-full items-center overflow-hidden top-[64px] right-0 text-center bg-slate-800 m-auto ">
            {links.map((link) => (
              <Link href={link.path} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Linkes;
