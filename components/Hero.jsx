import React from "react";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiArrowDownSLine,
  RiBracesFill,
  RiBriefcase2Fill,
  RiBriefcase3Fill,
} from "react-icons/ri";

import DevImage from "./DevImage";
import Socials from "./Socials";
import Badge from "./Badge";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-10 lg:py-20 h-[80vh] sm:h-[84vh] lg:pt-14  bg-no-repeat bg-bottom bg-cover dark:bg-none sm:mb-16 md:mb-0">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[500px] sm:max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Howdy folks! Let's explore together.</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with the insights into myself, my vocational
              journey and what I engage in professional journey.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <a href="/cv.pdf" download="cv">
                  Download CV
                </a>
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconsStyles={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>
          <div className="hidden xl:flex relative">
            <div>
              <Badge
                containerStyles={"absolute -left-[420px] top-[320px]"}
                icon={<RiBriefcase3Fill />}
                endCountNum={1}
                badgeText={"Years of Experience"}
              />
            </div>

            <div className=" rounded-full aspect-video bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImage
                containerStyles={
                  "bg-hero_shape   bg-no-repeat relative bg-bottom rounded-full"
                }
                imgSrc={"/hero/developer.png"}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
