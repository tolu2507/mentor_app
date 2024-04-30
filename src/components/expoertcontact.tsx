import ContactFlex from "@/components/contactflex";
import Form from "@/components/form";
import { Space } from "antd";

export default function ExpertContact() {
  return (
    <Space className="bg-white lg:p-32 p-5 relative no-scrollbar flex flex-row justify-center items-center w-screen">
      <Space className="lg:w-[1300px] w-screen flex flex-col ">
        <ContactFlex />
        <Form />
      </Space>
    </Space>
  );
}
