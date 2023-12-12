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



const MainTitleAnimation = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      {children}
    </div>
  );
};
const AboutTextAnimation = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
      {children}
    </div>
  );
};





const CardAnimation = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      class="grid   relative "
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      {children}
    </div>
  );
};



const Card2Animation = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1000"
      class="w-full md:w-1/2 xl:w-1/3 px-4"
    >
      {children}
    </div>
  );
};

const MoreButtonAnimation = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      {children}
    </div>
  );
};



export {BigTitleAnimation,CardAnimation,Card2Animation,MainTitleAnimation,AboutTextAnimation,MoreButtonAnimation}