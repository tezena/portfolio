import React from "react";
import { Montserrat, Roboto } from "next/font/google";


const roboSub = Roboto({
  subsets: ["latin-ext"],
  weight: "500",
  style: "normal",
});

function TechStackDisplayer (props){

    const { techStack } = props;
    console.log(techStack);
  return (
      <div className="flex relative w-full  my-5 justify-start">
          
          { techStack.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    class=" shadow-xl hover:shadow-2xl font-normal before:ease border border-white relative flex items-center  text-center h-12  lg:w-28 overflow-hidden  text-white bg-[#DAA520]   transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-20 before:duration-700  hover:before:-translate-x-60 rounded-full"
                  >
                    <div
                    className= {`text-sm font-normal  dark:text-slate-300  dark:group-hover:text-slate-200   leading-6 mx-auto text-justify  ${roboSub.className}`} >
                      {item}
                    </div>
                  </div>
                </>
              );
          })}
      
    </div>
  );
};

export default TechStackDisplayer;
