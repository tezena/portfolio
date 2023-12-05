
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <div className="h-[50%] bg-amber-400 flex items-center lg:p-32 lg:text-3xl text-center font-montserrat font-semibold ">
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="leading-relaxed text-slate-100"
      >
        My journey has encompassed dynamic contributions to web and mobile
        application development projects, equipping me with proficient skills in
        MERN stack and Flutter development.
      </h1>
    </div>
  );
}

export default AboutSection
