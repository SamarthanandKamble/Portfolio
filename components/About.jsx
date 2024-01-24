"use client";
import DevImage from "./DevImage";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  Home,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Samarthanand Kamble",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "(+91) 7304279200",
  },
  {
    icon: <MailIcon size={20} />,
    text: "samarthanand622001@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 06 Feb, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Engineering (CSE)",
  },
  {
    icon: <Home size={20} />,
    text: "Solapur, Maharashtra",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Savitribai Phule Pune University (SPPU)",
        qualification: "B.E Computer Science",
        year: "2018-2022",
      },
      {
        university: "Telangana State Board of Intermediate Education (TSIE)",
        qualification: "HSC",
        year: "20016-2018",
      },
      {
        university: "Central Board of Secondary Education (CBSE)",
        qualification: "Matric",
        year: "2006-2016",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "TripStack",
        role: "Software Engineer 1",
        year: "2022-2023",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      { name: "HTML , CSS" },
      { name: "Javascript , React" },
      { name: "Firebase , Appwrite" },
      { name: "Frontend Development" },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/postman.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/github.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImage
              containerStyles={
                "bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              }
              imgSrc={"/about/developer.png"}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] " value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] " value="qualifications">
                  Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] " value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for over a year
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with cutting
                      edge technology, delivering dynamic and engaging user
                      experience{" "}
                    </p>

                    <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
                      {infoData.map((data) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={data.text}
                        >
                          <div className="text-primary">{data.icon}</div>
                          <div>{data.text}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-y-2 ">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi,Marathi, Kannada, Telugu</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I use Everyday...</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4 "></div>

                      <div>
                        {getData(skillsData, "skills").data.map(
                          (data, index) => {
                            const { name } = data;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4 "></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (data, index) => {
                            const { imgPath } = data;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt="tools"
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
