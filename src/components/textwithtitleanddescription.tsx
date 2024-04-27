import { Space } from "antd";

export default function TextWithTitleAndDescription({
  title,
  description,
  width,
  dark = false,
  color,
}: {
  title: string;
  description: string;
  width?: boolean;
  dark?: boolean;
  color?: string;
}) {
  return (
    <Space
      direction="vertical"
      className=" w-[100%] -space-y-1 flex flex-col justify-center items-center z-20">
      <p
        className={`uppercase ${
          color ? color : "text-[#17e]"
        } text-base font-medium text-center`}>
        {title}
      </p>
      <p
        className={`${
          width ? "w-[600px]" : ""
        } text-center text-5xl font-medium ${
          !dark ? "text-black" : "text-white"
        }`}>
        {description}
      </p>
    </Space>
  );
}
