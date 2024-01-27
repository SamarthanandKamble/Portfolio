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
      "A platform where user can search and discover a wide array of videos effortlessly.",
    link: "/bingeyoutube.vercel.app",
    github: "/github.com/SamarthanandKamble/YoutubeClone",
  },
  {
    image: "/work/chatRoom.png",
    category: "ReactJs",
    name: "ChatRoom",
    description:
      "Facilitates seamless and realtime communication, allowing users to send and receive messages instantly.",
    link: "/letthechathappen.vercel.app",
    github: "/github.com/SamarthanandKamble/ChatApp",
  },
  {
    image: "",
    category: "Next Js",
    name: "Portfolio",
    description:
      "Explore my handpicked portfolio, showcasing a glimpse of my recent work and development.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/caloriefit.png",
    category: "ReactJs",
    name: "CalorieFit",
    description:
      "Empowering users to monitor their daily nutrition with a sleek and intuitive application",
    link: "/calorifit.netlify.app",
    github: "/https://github.com/Samarth1002/CalorieFit",
  },
  {
    image: "",
    category: "ReactJs",
    name: "ChillFlix",
    description:
      " Recreating the magic of the popular streaming platform. Dive into a seamless user experience with my Netflix clone, featuring an immersive interface and responsive design",
    link: "/",
    github: "/",
  },

  {
    image: "",
    category: "ReactJs",
    name: "GiphyTalks",
    description:
      "Experience the joy of dynamic conversations with my GIF-powered messaging application. Bringing the vibrancy of Giphy into your chats, this project adds a lively touch to communication",
    link: "/giphytalks.netlify.app",
    github: "/https://github.com/Samarth1002/GiphyTalks",
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
