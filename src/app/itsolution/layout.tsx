import Footer from "@/components/footer";
import StickyHeaderNav from "@/components/headernav";
import { Space } from "antd";

export default function CyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let url = "/images/bg/footer-bg3.jpg";
  return (
    <section>
      <Space direction="vertical" className="relative no-scrollbar">
        <StickyHeaderNav logo="/logo.png" />
        {children}
        <Footer
          aux={true}
          show={false}
          logo="/images/logo.png"
          light={true}
          url={url}
        />
      </Space>
    </section>
  );
}