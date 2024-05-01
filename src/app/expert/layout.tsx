import Footer from "@/components/footer";
import StickyHeaderNav from "@/components/headernav";
import StickyHeader from "@/components/stickyheader";
import { expertStickyConstant } from "@/constant/stickyconstant";
import { Space } from "antd";

export default function ExpertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = "/images/bg/footer-bg.jpg";
  return (
    <section>
      <Space direction="vertical" className="relative no-scrollbar">
        {/* <StickyHeader logo="/mentor.svg" data={expertStickyConstant} /> */}
        <StickyHeaderNav
          logo={"mentor.svg"}
          data={expertStickyConstant}
          show={false}
          link="/expert"
          title="Find an expert"
        />
        {children}
        <Footer
          aux={false}
          show={false}
          logo="/mentorlogo.png"
          light={false}
          url={url}
        />
      </Space>
    </section>
  );
}
