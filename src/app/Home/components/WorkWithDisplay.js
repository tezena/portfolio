
import { Montserrat } from 'next/font/google';
import { BigTitleAnimation } from './AosAnimation';

const montitle = Montserrat({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
});


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
      <div className="h-1/4    ">
        <BigTitleAnimation>
          <div
            className=" sm:py-16 py-8 lg:px-32 px-16 "
          >
            <h1
              className={`text-black dark:text-slate-100 md:text-4xl text-2xl sm:text-3xl ${montitle.className}`}
            >
              {" "}
              Worked with
            </h1>
          </div>
        </BigTitleAnimation>

        <div className="bg-[#DAA520] dark:bg-opacity-50 py-12 w-full ">
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
      </div>
    );
}

export default WorkWithDisplay
