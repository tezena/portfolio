"use client";
import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {GrClose}  from "react-icons/gr";
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
          <span className="absolute left-0 -top-1  h-1 a -z-10 w-0 group-hover:w-full group-hover:transition-all"></span>
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
    <Navbar
      className={`sticky top-0 z-30 h-max max-w-full rounded-none px-8 py-4 lg:px-8 lg:py-6 text-black bg-white bg-opacity-95  dark:bg-black dark:text-white dark:bg-opacity-75 ${ubuntu.className}`}
    >
      <div className="flex items-center justify-between lg:justify-center text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer  w-24 h-18 sm:ml-16 mt-4 lg:absolute lg:left-10 mb-3"
        >
          <img src="images/logo.png" />
        </Typography>
        <div className="flex items-start gap-4 lg:w-80 w-42">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <div className="flex items-center gap-x-1 lg:absolute lg:right-10">
            <Swith_dark_mode myStyle="hidden lg:inline-block" />
          </div>
          <div
            variant="text"
            className="ml-auto h-10 w-12 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mx-auto "
            ripple={true}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <GrClose className="w-8 h-8 " /> : <GiHamburgerMenu className="w-8 h-8 " />}
          </div>
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
