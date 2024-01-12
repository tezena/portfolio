import ProjectSlider from "../../Components/Carousel";
import { Card2Animation, BigTitleAnimation } from "../../Components/AosAnimation";
import { Montserrat, Roboto } from "next/font/google";
import TechStackDisplayer from "./TechStackDisplay";

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
    <div class="container w-full lg:px-32 px-16 ">
          <div className="flex flex-col w-full ">
              {projects.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex my-5   shadow-lg hover:shadow-2xl duration-200 delay-75 overflow-hidden rounded-md  dark:bg-gray-900"
                    >
                      <div className="w-1/2 text-black text-start m-5 p-5">
                        <h1
                          className={`text-black dark:text-slate-100 md:text-4xl text-2xl sm:text-3xl ${montitle.className}`}
                        >
                          {item.title}
                        </h1>
                        <p
                          class={`text-sm font-normal text-gray-500 dark:text-slate-300 group-hover:text-gray-700 dark:group-hover:text-slate-200  mt-2 leading-6  text-justify  ${roboSub.className}`}
                        >
                          {item.detail}
                        </p>

                        <div>
                          <TechStackDisplayer techStack={item.techStack} />
                        </div>
                      </div>
                      <div className="w-1/2 overflow-clip">
                        <ProjectSlider images={item.images} />
                      </div>
                    </div>
                  );
            })}
              
      </div>
       
    </div>
  );
};

export default ProjectCard;
