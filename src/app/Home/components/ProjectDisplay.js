import React from 'react'

const ProjectDisplay = () => {
  const services = [
    {
      title: "Mobile Application",
      detail:
        "I can build your mobile application using the latest Flutter technology. With my dedication, attention to detail, and curiosity, the final product will be awesome",
    },
    {
      title: "Web Front-end Development",
      detail:
        "As a front-end developer, I specialize in crafting sleek and responsive user interfaces using React, Next.js, and CSS libraries. My commitment to excellence ensures a final product that not only meets but surpasses expectations, providing a seamless and visually appealing user experience",
    },
    {
      title: "Back-end Development",
      detail:
        "As a backend developer, I specialize in crafting robust server-side solutions with Node.js, Django, and .NET. Proficient in MongoDB and MySQL, I bring dedication and expertise to serve you with efficient backend development.",
    },
    {
      title:""
    }
  ];
  return (
    <div className="h-1/2 flex items-center justify-center py-32 ">
      <div class="grid grid-cols-12 max-w-5xl gap-4">
        <div class="grid col-span-4 relative">
          <div
            class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9"
            href=""
          >
            <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700">
              {" "}
              View repositories with Code in Jira{" "}
            </p>

            <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">
              {" "}
              Include an issue key in a commit, branch name, or PR, and it will
              automatically update in Jira.{" "}
            </p>

            <div class="bg-[#DAA520]   group-hover:bg-opacity-75 h-full w-4 absolute top-0 left-0">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay
