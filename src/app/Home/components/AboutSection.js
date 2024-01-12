import { Montserrat } from "next/font/google";
import MoreButton from "@/app/Components/MoreButton";
import { AboutTextAnimation } from "../../Components/AosAnimation";
import { MoreButtonAnimation } from "../../Components/AosAnimation";

const roboto = Montserrat({
  subsets: ["vietnamese"],
  preload: true,
  weight: "200",
  style: "italic",
});

const AboutSection = () => {
  return (
    <div className="sm:h-1/2 h-full  bg-[#DAA520] dark:bg-opacity-50  flex-col items-center sm:p-8  px-8 sm:px-20 lg:px-56 sm:py-40 py-32 lg:text-[2rem] md:text-[1.5rem] sm:text-xl text-center font-extrabold ">
      <AboutTextAnimation>
        <h1
          className={`leading-relaxed  text-white ${roboto.className} font-thin`}
        >
          My journey has encompassed dynamic contributions to web and mobile
          application development projects, equipping me with proficient skills
          in MERN stack and Flutter development.
        </h1>
      </AboutTextAnimation>
      <MoreButtonAnimation>
        <div className="sm:mt-16 mt-8">
          <MoreButton />
        </div>
      </MoreButtonAnimation>
    </div>
  );
};

export default AboutSection;
