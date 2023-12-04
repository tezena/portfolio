import React from "react";
import Styles from "./SkillText.module.css";

const SkillText = () => {
    return (
      <div className="h-4 flex items-center py-4 overflow-y-clip ">
        <div class={Styles.string}>
          <h1 className={Styles.greeting}>
            <span class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4  ">
              Continuous Learner
            </span>
          </h1>
          <h1 className={Styles.greeting}>
            <span class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4  ">
              Team Player
            </span>
          </h1>
          <h1 className={Styles.greeting}>
            <span class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4  ">
              Networking Guru
            </span>
          </h1>
          <h1 className={Styles.greeting}>
            <span class="bg-gradient-to-r from-yellow-700 via-purple-500 to-orange-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl font-montserrat my-4  ">
              Time Management
            </span>
          </h1>
        </div>
      </div>
    );
};

export default SkillText;
