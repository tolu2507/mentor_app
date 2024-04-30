import HomeHeader from "@/components/header";
import HeaderBottom from "@/components/headerbottom";
import { Space } from "antd";
import ConsultSection from "@/components/secondpard";
import MetricsSection from "@/components/metricssection";
import Footer from "@/components/footer";
import StickyHeader from "@/components/stickyheader";
import { stickConstant } from "@/constant/stickyconstant";
import TestimonialsContent from "@/components/testimonials";
import Sponsors from "@/components/sponsors";
import StickyHeaderNav from "@/components/headernav";

export default function Home() {
  const objects = [
    {
      text: "Mentors.ng has been my guiding light as I embarked on my writing journey. The mentor I connected with provided constructive feedback on my work, shared writing techniques, and encouraged me to explore new genres. Their mentorship gave me the confidence to pursue my passion for writing.",
      name: "Amina S.",
    },
    {
      text: "Mentors.ng has been my guiding light as I embarked on my writing journey. The mentor I connected with provided constructive feedback on my work, shared writing techniques, and encouraged me to explore new genres. Their mentorship gave me the confidence to pursue my passion for writing.",
      name: "Amina K.",
    },
    {
      text: "Mentors.ng has been my guiding light as I embarked on my writing journey. The mentor I connected with provided constructive feedback on my work, shared writing techniques, and encouraged me to explore new genres. Their mentorship gave me the confidence to pursue my passion for writing.",
      name: "Tolu S.",
    },
    {
      text: "Mentors.ng has been my guiding light as I embarked on my writing journey. The mentor I connected with provided constructive feedback on my work, shared writing techniques, and encouraged me to explore new genres. Their mentorship gave me the confidence to pursue my passion for writing.",
      name: "Sunday M.",
    },
    {
      text: "Mentors.ng has been my guiding light as I embarked on my writing journey. The mentor I connected with provided constructive feedback on my work, shared writing techniques, and encouraged me to explore new genres. Their mentorship gave me the confidence to pursue my passion for writing.",
      name: "Jude C.",
    },
    {
      text: "Mentors.ng has been my guiding light as I embarked on my writing journey. The mentor I connected with provided constructive feedback on my work, shared writing techniques, and encouraged me to explore new genres. Their mentorship gave me the confidence to pursue my passion for writing.",
      name: "Amina T.",
    },
  ];
  const url = "/images/bg/footer-bg.jpg";
  return (
    <div className=" w-screen bg-white relative flex-1 flex-row justify-center items-center">
      <div className="relative no-scrollbar w-screen flex flex-col ">
        <StickyHeaderNav
          logo={"mentor.svg"}
          data={stickConstant}
          show={false}
          link="/expert"
          title="Find an expert"
        />
        <HomeHeader />
        <HeaderBottom />
        <ConsultSection />
        <MetricsSection />
        <TestimonialsContent
          objects={objects}
          description={"satisfied clients Nationwide"}
          show={false}
        />
        <div className="w-screen hidden lg:flex flex-row justify-center lg:pb-20 pb-5">
          <Sponsors />
        </div>
        <Footer
          aux={false}
          show={true}
          logo="/mentorlogo.png"
          light={false}
          url={url}
        />
      </div>
    </div>
  );
}
