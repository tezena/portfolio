"use client";
import { useSelect } from "@material-tailwind/react";
import Image from "next/image";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Home from "./Home/Home";


export default function Main() {
 
  return (
    <div
         className=""
    >
      <Home />
    </div>
  );
}
