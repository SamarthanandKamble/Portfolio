"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.jpg",
    name: "Simranjeet Kaur",
    job: "Tech Lead",
    review:
      "It was really great working with you! Best wishes for future endeavours.",
  },
  {
    avatar: "/reviews/avatar-3.jpg",
    name: "Aditi Kansal",
    job: "SDE 2",
    review: "Keep growing, keep learning. You've been a true team player.",
  },
  {
    avatar: "/reviews/avatar-4.jpg",
    name: "Mihir Mondhe",
    job: "SDE 2",
    review: "Your contributions were invaluable and your positive spirit is irreplaceable.",
  },
  {
    avatar: "/reviews/avatar-5.jpg",
    name: "Manish Gupta",
    job: "SDE 2",
    review: "Such an incredible coworker and friend",
  },
  {
    avatar: "/reviews/avatar-2.jpg",
    name: "Vikas Rai",
    job: "SDE 1",
    review: "Incredible colleague and friend. Stay in touch!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Review's</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((data) => (
            <SwiperSlide key={data.name}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={data.avatar}
                      alt="avatar"
                      width={100}
                      height={100}
                      priority
                      className="rounded-full w-[70px]"
                    />
                    <div className="flex flex-col">
                      <CardTitle className="">{data.name}</CardTitle>
                      <p>{data.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {data.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
