"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Swith_dark_mode from "./Swith_dark_mode";
import { Roboto } from "next/font/google";
 const ubuntu = Roboto({ subsets: ["greek"], weight: "500" });

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center  relative group">
          <span className="absolute left-0 -top-1  h-1 bg-[#F8BE0C] -z-10 w-0 group-hover:w-full group-hover:transition-all"></span>
          <p>Home</p>
          <span className="absolute left-0 -bottom-1  h-1 bg-[#F8BE0C] -z-10 w-full group-hover:w-0 group-hover:transition-all delay-100"></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/showcase" className="flex items-center">
          Showcase
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/ContactMe" className="flex items-center">
          Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/About" className="flex items-center">
          About
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className={`sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-4 lg:px-8 lg:py-6 text-black bg-white bg-opacity-95  dark:bg-black dark:text-white dark:bg-opacity-75 ${ubuntu.className}`}>
      <div className="flex items-center justify-between lg:justify-center text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer  w-24 h-18 sm:ml-16 mt-4 lg:absolute lg:left-10 mb-3"
        >
         <img src="images/logo.png"/>
        </Typography>
        <div className="flex items-center gap-4 lg:w-80 ">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <div className="flex items-center gap-x-1 lg:absolute lg:right-10">
            <Swith_dark_mode myStyle="hidden lg:inline-block" />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
         
          <Swith_dark_mode myStyle="" />
        </div>
      </MobileNav>
    </Navbar>
  );
}
