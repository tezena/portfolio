import React from 'react'
import ProjectSlider from './Carousel';


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
    <div className='lg:px-32  '>
      <div class="container">
        <div class="flex flex-wrap -mx-4 ">
          {
            projects.map((project,index) => {
              return (
                <div key={index} class="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div class="bg-white text-black rounded-lg overflow-hidden mb-10">
                    <ProjectSlider images={project.images} />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
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
                    </div>
                  </div>
                </div>
              );
            })
          }
              
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay
