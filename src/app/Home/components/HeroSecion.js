"use client";
import { useSelect } from "@material-tailwind/react";
import Image from "next/image";
import { useSelector } from "react-redux/es/hooks/useSelector";
import HeroBotton from "@/app/Components/heroBotton";
import AnimatedBG from "../../Components/AnimatedBackground/AnimatedBG";
import SkillText from "../../Components/animateSkillText/SkillText";

export default function HeroSecion() {
  const dark_mode = useSelector((state) => state.dark_mode.value);
  const backgroundImageUrl = dark_mode ? "url(images/bg1.png)" : "";
  return (
    <div>
      <AnimatedBG />
      <div className="text-start flex-col items-start lg:my-[5%] pb-2">
        <div
          className="flex  flex-col sm:items-center justify-between sm:p-24 pt-32 px-8 bg-cover  h-full  bg-opacity-30 z-2 w-full "
          style={{ backgroundImage: "", height: "92%" }}
        >
          <div className="md:h-52  md:w-52  h-32 w-32 z-0  absolute  sm:right-24 right-2 top-32 opacity-60 ">
            <img src="images/circle.png" />
          </div>
          <div class="flex ">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl sm:text-6xl font-extrabold text-transparent  font-montserrat sm:my-4 my-2 inline">
              Hi ,
            </h1>
            <span class="sm:text-6xl text-3xl inline">👋🏽</span>
          </div>
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl font-montserrat sm:my-4 my-2">
            I'm Tewodros Nibret
          </h1>
          <div className="flex  sm:items-center flex-col md:flex-row  items-start ">
            <h3 class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4  ">
              <spna> Full-Stack Developer |</spna> Problem Solver |{" "}
              <span></span>
            </h3>
            <SkillText />
          </div>

          <div className="my-8  sm:mx-0">
            <HeroBotton />
          </div>
        </div>
      </div>
    </div>
  );
}
