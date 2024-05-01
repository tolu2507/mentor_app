import { Flex, Space, Button } from "antd";

export default function PricingList({
  details,
  setter,
  action,
}: {
  details: { name: string; price: number };
  setter: string;
  action: () => void;
}) {
  const { name, price } = details;
  let texts = [
    "Community Support",
    "Dedicated Tech Experts",
    "Unlimited Storage",
    "Custom Domains",
  ];
  return (
    <Flex
      onClick={action}
      vertical
      className={` w-[100%] gap-5 lg:gap-16 ${
        name === setter
          ? "bg-gradient-to-b from-blue-500 via-purple-700 to-purple-400"
          : " bg-gray-300"
      } lg:px-12 px-5 py-10 lg:py-16 rounded-3xl relative overflow-hidden cursor-pointer`}>
      <div className="absolute w-96 h-96 rounded-full border-[30px] border-gray-100/20 -top-32 -right-40" />
      <div className="flex flex-col gap-5">
        <Space>
          <p
            className={`${
              name === setter ? "text-white" : "text-black"
            } text-left lg:text-3xl text-lg font-medium`}>
            {name}
          </p>
        </Space>
        <Space direction="horizontal" className=" -space-x-1">
          <div className="flex flex-col h-12 justify-end">
            <div
              className={`${
                name === setter ? "text-white" : " text-blue-600"
              } lg:text-base text-sm`}>
              $
            </div>
          </div>
          <div
            className={` ${
              name === setter ? "text-white" : " text-blue-600"
            } lg:text-7xl text-5xl font-semibold`}>
            {price}
          </div>
          <div className="flex flex-col h-12 justify-end">
            <div
              className={`${
                name === setter ? "text-white" : " text-gray-500"
              } lg:text-base text-sm`}>
              / Month
            </div>
          </div>
        </Space>
      </div>
      <Space direction="vertical">
        {texts.map((item) => (
          <p
            key={item}
            className={`${
              name === setter ? "text-white" : "text-black"
            } lg:text-lg text-sm`}>
            {item}
          </p>
        ))}
      </Space>
      <Space direction="vertical" className=" w-48">
        <Button
          className="w-[100%] border-none"
          style={{
            height: 40,
            backgroundColor: " #3b82f6",
            fontSize: 16,
            color: "#fff",
            fontWeight: "700",
            border: 0,
          }}>
          Try it Now
        </Button>
      </Space>
    </Flex>
  );
}
