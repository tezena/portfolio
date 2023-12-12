import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const BigTitleAnimation = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      {children}
    </div>
  );
};

export {BigTitleAnimation}