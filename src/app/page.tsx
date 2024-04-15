import HomeHeader from "@/components/header";
import HeaderBottom from "@/components/headerbottom";
import { Space } from "antd";
import ConsultSection from "@/components/secondpard";
import MetricsSection from "@/components/metricssection";
import TestimonialComponent from "@/components/testimonial";
import Footer from "@/components/footer";
import StickyHeader from "@/components/stickyheader";
import { stickConstant } from "@/constant/stickyconstant";

export default function Home() {
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
        <TestimonialComponent />
        <Footer aux={false} show={true} logo="/mentorlogo.png" />
      </Space>
    </Space>
  );
}
