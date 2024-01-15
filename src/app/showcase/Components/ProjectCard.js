import ProjectSlider from "../../Components/Carousel";
import { Card3Animation, BigTitleAnimation } from "../../Components/AosAnimation";
import { Montserrat, Roboto } from "next/font/google";
import TechStackDisplayer from "./TechStackDisplay";
import Link from "next/link";

const montitle = Montserrat({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
});
const roboSub = Roboto({
  subsets: ["latin-ext"],
  weight: "500",
  style: "normal",
});

const projects = [
  {
    title: "Art Gallery Platform",
    link: "https://github.com/tezena/portfolio",
    detail:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscingelit. Lorem consectetur adipiscing elit.",
    images: [
      {
        url: "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg",
        alt: "image1",
      },
      {
        url: "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg",
        alt: "image2",
      },
      {
        url: "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg",
        alt: "image3",
      },
    ],
    techStack: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "Art Gallery Platform",
    link: "https://github.com/tezena/portfolio",
    detail:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscingelit. Lorem consectetur adipiscing elit.",
    images: [
      {
        url: "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg",
        alt: "image1",
      },
      {
        url: "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg",
        alt: "image2",
      },
      {
        url: "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg",
        alt: "image3",
      },
    ],
    techStack: ["React", "Tailwind", "Node.js"],
  },
 
];

const ProjectCard = () => {
  return (
    <div class="container w-full xl:px-32  lg:px-8 md:px-32   sm:px-16 px-8  mx-auto">
          <div className="flex flex-col w-full justify-center ">
              {projects.map((item, index) => {
                return (
                  <Card3Animation key={index} >
                    <div className=" flex flex-col flex-col-reverse lg:flex-row my-5 items-stretch  shadow-lg hover:shadow-2xl duration-200 delay-75 overflow-hidden rounded-md  dark:bg-gray-900">
                      <div className=" w-full lg:w-1/2 text-black text-start  sm:mx-5 px-5 p-5  xl:relative flex flex-col justify-between">
                        <div>
                          <div className=" flex flex-col md:justify-between  ">
                            <h1
                              className={`text-black dark:text-slate-100 lg:text-4xl text-2xl md:text-3xl ${montitle.className}`}
                            >
                              {item.title}
                            </h1>
                            <Link href={item.link}>
                              <div className="my-2 shadow-lg hover:shadow-2xl w-20 duration-200 delay-75 rounded-full  text-center py-2 px-2  text-white bg-[#DAA520] border-white border ">
                                <p
                                  className={`mx-auto text-sm  ${montitle.className}`}
                                >
                                  Github
                                </p>
                              </div>
                            </Link>
                          </div>

                          <p
                            class={`text-sm font-normal text-gray-500 dark:text-slate-300 group-hover:text-gray-700 dark:group-hover:text-slate-200  mt-2 leading-6  text-justify sm:pr-10 ${roboSub.className}`}
                          >
                            {item.detail}
                          </p>
                        </div>
                        <div className="">
                          <TechStackDisplayer techStack={item.techStack} />
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 overflow-clip ">
                        <ProjectSlider images={item.images} />
                      </div>
                    </div>
                  </Card3Animation>
                );
            })}
              
      </div>
       
    </div>
  );
};

export default ProjectCard;
