
import ProjectSlider from "./Carousel";
import { Card2Animation, BigTitleAnimation } from "./AosAnimation";
import { Montserrat, Roboto } from "next/font/google";



const montitle = Montserrat({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
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
  },
];

const ProjectDisplay = () => {
  return (
    <div className="lg:px-32 px-16  ">
      <BigTitleAnimation>
        <div className=" py-24 ">
          <h1
            className={`text-black dark:text-slate-100 md:text-4xl text-2xl sm:text-3xl ${montitle.className}`}
          >
            {" "}
            Selected Projects :
          </h1>
        </div>
      </BigTitleAnimation>
      <div class="container">
        <div class="flex flex-wrap -mx-4 ">
          {projects.map((project, index) => {
            return (
              <Card2Animation key={index}>
                <div class="bg-white text-black rounded-lg overflow-hidden mb-10 group  ">
                  <ProjectSlider images={project.images} />
                  <div class="p-8 z-[300] sm:p-9 md:p-7 xl:p-9 text-center relative overflow-hidden group-hover:text-white">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      {project.detail}
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                    >
                      View Details
                    </a>
                    <div class="ease z-[-10]  transition-all absolute  delay-150 right-0 bottom-0 h-full w-[120%] translate-x-[100%] bg-[#DAA520]  duration-[2000ms]  group-hover:-translate-x-[30%] group-hover:z-0"></div>
                    {/* <div class="ease   transition-all absolute  delay-150  left-0 bottom-0 h-full w- -translate-x-[100%] bg-[#DAA520] opacity-50 duration-[2000ms]  group-hover:translate-x-[50%]"></div> */}
                  </div>
                </div>
              </Card2Animation>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
