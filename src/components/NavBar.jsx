import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, MenuIcon, MoveRightIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 h-20 shadow-xl bg-white flex justify-between items-center px-10">
      <dvi className="flex justify-center items-center gap-2">
        <Link href="/">
          <h1 className="font-bold text-2xl lg:text-3xl text-violet-500">
            ShopDigest
          </h1>
        </Link>
        <div className="hidden lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex border border-violet-500 rounded-lg p-1 justify-center items-center">
              Shopify <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Items List</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Item 1</DropdownMenuItem>
              <DropdownMenuItem>Item 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </dvi>
      <dvi>
        <ul className="hidden lg:flex justify-center items-center gap-4 ">
          <li>Features</li>
          <li>Marketplace</li>
          <li className="flex justify-center items-center">
            Company <ChevronDown size={14} />
          </li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </dvi>
      <dvi className="hidden lg:flex justify-center items-center gap-4">
        <Button className="bg-transparent border border-violet-500  hover:bg-violet-500 hover:text-white text-violet-500">
          Login
        </Button>
        <Button className="bg-violet-500 text-white border border-violet-500  hover:bg-transparent hover:text-violet-500 flex justify-center items-center gap-2 ">
          Add post <MoveRightIcon size={16} />
        </Button>
      </dvi>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Features</DropdownMenuItem>
            <DropdownMenuItem>Marketplace</DropdownMenuItem>
            <DropdownMenuItem>Company</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
            <DropdownMenuItem>Login</DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              Add post <MoveRightIcon size={16} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
