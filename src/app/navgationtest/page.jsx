"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Navgationpage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParam = useSearchParams();

  const q = searchParam.get("q");
  console.log(q);

  console.log(pathName);
  const handleClick = () => {
    console.log("clicked btn");
    router.forward();
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        click here
      </Link>
      <button onClick={handleClick}>Click btn</button>
    </div>
  );
};

export default Navgationpage;
