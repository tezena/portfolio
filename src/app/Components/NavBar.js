"use client";
import {React, useState ,useEffect} from "react";
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
import { usePathname, useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
 const ubuntu = Roboto({ subsets: ["greek"], weight: "500" });

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
 
     const router = usePathname();

  useEffect(() => {

    const currentPage = router;

    setActiveLink(currentPage);

    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, [router]);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center  relative group">
          <p className="hover:text-[#DAA520]">Home</p>
          <span
            className={`absolute left-0 -bottom-1  h-1 bg-[#F8BE0C] -z-10 ${
              activeLink === "/" ? "w-full" : ""
            } group-hover:w-0 transition-all delay-100`}
          ></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/Showcase" className="flex items-center  relative group">
          <p className="hover:text-[#DAA520]">Showcase</p>
          <span
            className={`absolute left-0 -bottom-1  h-1 bg-[#F8BE0C] -z-10 ${
              activeLink === "/Showcase" ? "w-full" : ""
            } group-hover:w-0 transition-all delay-100`}
          ></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/ContactMe" className="flex items-center  relative group">
          <p className="hover:text-[#DAA520]">Contact</p>
          <span
            className={`absolute left-0 -bottom-1  h-1 bg-[#F8BE0C] -z-10 ${
              activeLink === "/ContactMe" ? "w-full" : ""
            } group-hover:w-0 transition-all delay-100`}
          ></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/About" className="flex items-center  relative group">
          <p className="hover:text-[#DAA520]">About</p>
          <span
            className={`absolute left-0 -bottom-1  h-1 bg-[#F8BE0C] -z-10 ${
              activeLink === "/About" ? "w-full" : ""
            } group-hover:w-0 transition-all delay-100`}
          ></span>
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
