import { Space } from "antd";

export default function TextWithTitleAndDescription({
  title,
  description,
  width,
}: {
  title: string;
  description: string;
  width?: boolean;
}) {
  return (
    <Space
      direction="vertical"
      className=" w-[100%] -space-y-1 flex flex-col justify-center items-center">
      <p className="uppercase text-blue-700 text-base font-medium text-center">
        {title}
      </p>
      <p
        className={`${
          width ? "w-[600px]" : ""
        } text-center text-5xl font-medium text-black`}>
        {description}
      </p>
    </Space>
  );
}
