import { React ,useEffect} from 'react'
import { Montserrat, Roboto } from 'next/font/google';
import AOS from "aos";
import "aos/dist/aos.css";


const montitle = Montserrat({ subsets: ["latin"], weight: "500", style: "italic" });
const montitle2 = Montserrat({
  subsets: ["latin"],
  weight: "800",
  style: "normal",
});
const roboSub = Roboto({
  subsets: ["latin-ext"],
  weight: "500",
  style: "normal",
});

const ServiceDisplay = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  
  const services = [
    {
      title: "Mobile Application",
      detail:
        "I can build your mobile application using the latest Flutter technology. With my dedication, attention to detail, and curiosity, the final product will be awesome",
    },
    {
      title: "Web Front-end Development",
      detail:
        "As a front-end developer, I specialize in crafting sleek and responsive user interfaces using React, Next.js, and CSS libraries. My commitment to excellence ensures a final product that not only meets but surpasses expectations, providing a seamless and visually appealing user experience",
    },
    {
      title: "Back-end Development",
      detail:
        "As a backend developer, I specialize in crafting robust server-side solutions with Node.js, Django, and .NET. Proficient in MongoDB and MySQL, I bring dedication and expertise to serve you with efficient backend development.",
    },
    {
      title: "Full Stack Development",
      detail:
        "As a full-stack developer, I bring a comprehensive skill set to cater to both frontend and backend requirements.My unwavering commitment to excellence guarantees a final product that not only meets but exceeds expectations. If you seek a full-stack developer, I am here, ready to serve you with dedication and proficiency across the entire technology spectrum",
    },
  ];
  return (
    <div className="h-1/2 flex-col items-center justify-center pb-12  lg:px-32 px-16 ">
      <div data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000" className=" py-24 ">
        <h1 className={`text-black dark:text-slate-100 md:text-4xl text-2xl sm:text-3xl ${montitle.className}`}>
          {" "}
          Here's what I can do to help:
        </h1>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2    gap-8">
        {services.map((item, index) => {
          return (
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              key={index}
              class="grid   relative "
            >
              <div
                class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white dark:bg-gray-900 rounded-sm py-6 pr-6 pl-9"
                href=""
              >
                <p
                  class={` text-xl sm:text-2xl font-bold text-gray-500 dark:text-slate-400 group-hover:text-gray-700  dark:group-hover:text-slate-300 ${montitle2.className}`}
                >
                  {" "}
                  {item.title}{" "}
                </p>

                <p
                  class={`text-sm font-normal text-gray-500 dark:text-slate-300 group-hover:text-gray-700 dark:group-hover:text-slate-200  mt-2 leading-6  text-justify  ${roboSub.className}`}
                >
                  {" "}
                  {item.detail}{" "}
                </p>

                <div class="bg-[#DAA520]   group-hover:bg-opacity-75 h-full w-4 absolute top-0 left-0">
                  {" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceDisplay
