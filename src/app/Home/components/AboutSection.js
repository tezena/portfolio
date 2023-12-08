
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";


const roboto = Montserrat({
  subsets: ["vietnamese"],
  preload: true,
  weight: "200",
  style: "italic",
});

const AboutSection = () => {
  useEffect(() => {
    AOS.init()
  }, []);
  
  

  return (
    <div className="sm:h-1/2 h-full  bg-slate-100 dark:bg-opacity-50 bg-opacity-90 flex items-center sm:p-8  px-8 sm:px-20 lg:px-56 sm:py-48 py-32 lg:text-[2rem] md:text-[1.5rem] sm:text-xl text-center font-extrabold ">
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="2000"
        className={`leading-relaxed  dark:text-slate-100  text-black ${roboto.className} font-thin`}
      >
        My journey has encompassed dynamic contributions to web and mobile
        application development projects, equipping me with proficient skills in
        MERN stack and Flutter development.
      </h1>
    </div>
  );
}

export default AboutSection
