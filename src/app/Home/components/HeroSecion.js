"use client";
import { useSelect } from "@material-tailwind/react";
import Image from "next/image";
import { useSelector } from "react-redux/es/hooks/useSelector";
import HeroBotton from "@/app/Components/heroBotton";
import AnimatedBG from "../../Components/AnimatedBackground/AnimatedBG";
import SkillText from "../../Components/animateSkillText/SkillText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({subsets:["cyrillic"], weight: "900", style:"italic"})
export default function HeroSecion() {
  useEffect(() => { 
    AOS.init();
  }, []);

  const dark_mode = useSelector((state) => state.dark_mode.value);
  return (
    <div className="h-full  "> 
      <div className="text-start flex-col items-start sm:items-center sm:text-center lg:pt-[3%] pt-[10%] sm:pt-[6%] relative">
        <AnimatedBG />
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="flex  flex-col sm:items-center justify-between sm:p-24 pt-32 px-8 bg-cover  h-full  bg-opacity-30  w-full "
        >
          <div class={`flex ${montserrat.className} `}>
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl sm:text-6xl font-extrabold text-transparent   sm:my-4 my-2 inline">
              Hi ,
            </h1>
            <span class="sm:text-6xl text-3xl inline">👋🏽</span>
          </div>
          <h1 class={`bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl font-montserrat sm:my-4 my-2 ${montserrat.className}`}>
            I'm Tewodros Nibret
          </h1>
          <div className="flex  sm:items-center flex-col md:flex-row  items-start ">
            <h3 class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4  ">
              <spna> Full-Stack Developer |</spna> Problem Solver |{" "}
              <span></span>
            </h3>
            <SkillText />
          </div>

          <div className="sm:my-8  my-16  sm:mx-0 sm:pb-[6%] pb-40">
            <HeroBotton />
          </div>
        </div>
      </div>
    </div>
  );
}
