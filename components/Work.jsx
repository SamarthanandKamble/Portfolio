"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
    image: "/work/portfolio-bg.png",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12  xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8 ">
            Featured snapshots of my latest projects. Explore a glimpse of my current work-in-progress,
            highlighting ongoing dedication to quality and innovation.
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[800px] xl:absolute right-0 top-0 p-1 ">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((data, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
