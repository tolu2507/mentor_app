import Footer from "@/components/footer";
import StickyHeaderNav from "@/components/headernav";
import { Space } from "antd";

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Space direction="vertical" className="relative no-scrollbar">
        <StickyHeaderNav logo="/logo.png" />
        {children}
        <Footer aux={true} show={true} logo="/texcwhiz.png" />
      </Space>
    </section>
  );
}
