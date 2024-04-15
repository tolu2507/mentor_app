import Footer from "@/components/footer";
import StickyHeader from "@/components/stickyheader";
import { expertStickyConstant } from "@/constant/stickyconstant";
import { Space } from "antd";

export default function ExpertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Space direction="vertical" className="relative no-scrollbar">
        <StickyHeader logo="mentor.svg" data={expertStickyConstant} />
        {children}
        <Footer aux={false} show={false} logo="/mentorlogo.png" />
      </Space>
    </section>
  );
}
