import Form from "@/components/Form";
import { PhoneIcon, HomeIcon, PhoneCall, MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24 ">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4 ">
              <span className="w-[30px] h-[2px] bg-primary "></span>
              Hey buddy 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Let's collaborate! Elevate your digital presence with my passion
              and expertise. Together, we can turn
              ideas into impactful and engaging online experiences.
            </p>
          </div>
          <div className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        <div className="grid lg:grid-cols-2 mb-24 lg:mb-32">
          <div className="flex flex-col gap-y-4 lg:gap-y-14 mb-12 lg:mb-24">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>samarthanand622001@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Solapur (413004), Maharashtra India</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneIcon size={18} className="text-primary" />
              <div>+91 7304279200</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
