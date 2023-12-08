import React from "react";
import Styles from "./SkillText.module.css";

const SkillText = () => {
  const skills = [
    "Continuous Learner",
    "Team Player",
    "Networking Guru",
    "Time Management",
  ];
    return (
      <div className="h-6 sm:h-2 flex items-center py-4 overflow-y-clip relative  text-start">
        <div class={Styles.string}>
         
            {skills.map((skill,index)=>{
              return (
                <h1 key={index} className={Styles.greeting}>
                  <span class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4 text-start">
                    {skill}
                  </span>
                </h1>
              );
            })}
        </div>
      </div>
    );
};

export default SkillText;
