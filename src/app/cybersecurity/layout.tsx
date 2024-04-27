import Footer from "@/components/footer";
import StickyHeaderNav from "@/components/headernav";
import { Space } from "antd";

export default function CyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = "/images/bg/footer-bg.jpg";
  return (
    <section>
      <Space direction="vertical" className="relative no-scrollbar">
        <StickyHeaderNav logo="/logo.png" />
        {children}
        <Footer
          aux={true}
          show={true}
          logo="/texcwhiz.png"
          light={false}
          url={url}
        />
      </Space>
    </section>
  );
}
