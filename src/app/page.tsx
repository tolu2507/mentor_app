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
  return (
    <Space
      direction="vertical"
      className=" w-screen bg-white relative flex-1 -space-y-10 flex-row justify-center items-center">
      <Space direction="vertical" className="relative no-scrollbar">
        <StickyHeader data={stickConstant} logo={"mentor.svg"} />
        <HomeHeader />
        <HeaderBottom />
        <ConsultSection />
        <MetricsSection />
        <TestimonialsContent
          objects={objects}
          description={"satisfied clients Nationwide"}
          show={false}
        />
        <Space className="w-[100%] flex-row justify-center pb-20">
          <Sponsors />
        </Space>
        <Footer aux={false} show={true} logo="/mentorlogo.png" />
      </Space>
    </Space>
  );
}
