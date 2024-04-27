import Footer from "@/components/footer";
import StickyHeaderNav from "@/components/headernav";
import { Space } from "antd";

export default function ItAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let url = "/images/bg/footer-bg2.jpg";
  return (
    <section>
      <Space direction="vertical" className="relative no-scrollbar">
        <StickyHeaderNav logo="/logo.png" color={true} />
        {children}
        <Footer
          aux={true}
          show={true}
          logo="/images/logo-2.png"
          light={false}
          url={url}
          orange={true}
        />
      </Space>
    </section>
  );
}
