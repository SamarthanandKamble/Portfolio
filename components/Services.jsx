import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "lorem, afciaa , aoinacnac, caoincao ncaocaca, acnac, acnacaa,aconaca",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "lorem, afciaa , aoinacnac, caoincao ncaocaca, acnac, acnacaa,aconaca",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Web Developer",
    description:
      "lorem, afciaa , aoinacnac, caoincao ncaocaca, acnac, acnacaa,aconaca",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          {" "}
          Services
        </h2>
        <div className="grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-pink dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
