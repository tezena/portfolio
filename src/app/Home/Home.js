"use client";
import { useSelect } from "@material-tailwind/react";
import Image from "next/image";
import { useSelector } from "react-redux/es/hooks/useSelector";
import HeroBotton from "@/Components/heroBotton";

export default function Home() {
  const dark_mode = useSelector((state) => state.dark_mode.value);
  const backgroundImageUrl = dark_mode ? "url(images/bg1.png)" : "";
    return (
      <div>
        <div
          className="flex  flex-col items-center justify-between p-24  bg-cover  h-full  bg-opacity-30 z-2"
          style={{ backgroundImage: "", height: "92%" }}
        >
          <div className="h-52 w-52 z-0  absolute  right-24">
            <img src="images/circle.png" />
          </div>
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl font-montserrat my-4">
            Hi ,
          </h1>
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl font-montserrat my-4">
            I'm Tewodros Nibret
          </h1>
          <h3 class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4  ">
            Full-Stack Developer | Problem Solver | Continuous Learner
          </h3>
          <HeroBotton/>
        </div>
      </div>
    );
}
