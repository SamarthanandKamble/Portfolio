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
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum   ",
    link: "/bingeyoutube.vercel.app",
    github: "/github.com/SamarthanandKamble",
  },
  {
    image: "/work/chatRoom.png",
    category: "ReactJs",
    name: "ChatRoom",
    description:
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum lorem Lorem  ",
    link: "/",
    github: "/",
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
    link: "/",
    github: "/",
  },
  {
    image: "",
    category: "ReactJs",
    name: "ChillFlix",
    description:
      "Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem.Lorem ipsum,ipsum lorem Lorem ipsum ipsum lorem.Lorem ipsum ipsum lorem  ",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12  xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8 ">
            lorem ipsum ipsum Lorem.lorem ipsum ipsum Lorem.lorem ipsum ipsum
            Lorem. lorem ipsum ipsum Lorem.
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
