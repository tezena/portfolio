import React from 'react'


const companyes = [
  {
    url: "https://shopinaddis.com/de/images/logo.png",
    alt: "DanEnergy black",
  },
  {
    url: "https://hbgbtrading.com/img/hbgb-logo1.jpg",
    alt: "HBGB ",
  },
  {
    url: "https://shopinaddis.com/de/images/logo-white.png",
    alt: "DanEnergy white",
  },

  {
    url: "/images/dallol.png",
    alt: "Dallol Tech",
  },
];

const WorkWithDisplay = () => {
    return (
      <div className="h-1/4   bg-[#DAA520]  lg:py-32 sm:py-20 lg:px-32  py-16 px-8 ">
        <div className=" inline-flex flex-nowrap w-full  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll">
            {companyes.map((item, index) => (
              <li className="sm:w-40 sm:h-24  w-28 h-12 " key={index}>
                {" "}
                <img
                  className="w-full h-full"
                  src={item.url}
                  alt={item.alt}
                />{" "}
              </li>
            ))}
          </ul>

          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {companyes.map((item, index) => (
              <li className="sm:w-40 sm:h-24  w-28 h-12     " key={index}>
                {" "}
                <img
                  className="w-full h-full"
                  src={item.url}
                  alt={item.alt}
                />{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default WorkWithDisplay
