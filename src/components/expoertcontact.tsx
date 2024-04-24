import ContactFlex from "@/components/contactflex";
import Form from "@/components/form";
import { Space } from "antd";

export default function ExpertContact() {
  return (
    <Space className="bg-white p-32 relative no-scrollbar flex flex-row justify-center items-center w-screen">
      <Space direction="vertical" className="w-[1300px] ">
        <ContactFlex />
        <Form />
      </Space>
    </Space>
  );
}
