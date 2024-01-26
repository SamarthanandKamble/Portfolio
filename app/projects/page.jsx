"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
const projectData = [
  {
    image: "/work/youtube.png",
    category: "ReactJs",
    name: "BingeYoutube",
    description:
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum   ",
    link: "/bingeyoutube.vercel.app",
    github: "/github.com/SamarthanandKamble/YoutubeClone",
  },
  {
    image: "/work/chatRoom.png",
    category: "ReactJs",
    name: "ChatRoom",
    description:
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum lorem Lorem  ",
    link: "/letthechathappen.vercel.app",
    github: "/github.com/SamarthanandKamble/ChatApp",
  },
  {
    image: "",
    category: "Next Js",
    name: "Portfolio",
    description:
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum",
    link: "/",
    github: "/",
  },
  {
    image: "/work/caloriefit.png",
    category: "ReactJs",
    name: "CalorieFit",
    description: "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum",
    link: "/calorifit.netlify.app",
    github: "/github.com/SamarthanandKamble/CalorieFit",
  },
  {
    image: "",
    category: "ReactJs",
    name: "ChillFlix",
    description:
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum lorem Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem  ",
    link: "/",
    github: "/github.com/SamarthanandKamble/NetflixClone",
  },

  {
    image: "",
    category: "ReactJs",
    name: "GiphyTalks",
    description:
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum lorem Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem  ",
    link: "/giphytalks.netlify.app",
    github: "/github.com/SamarthanandKamble/GiphyTalks",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];
console.log("uniqueCategories :", uniqueCategories);
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                key={index}
                value={category}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
