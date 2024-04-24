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
      className={`flex-1 gap-16 ${
        name === setter
          ? "bg-gradient-to-b from-blue-500 via-purple-700 to-purple-400"
          : " bg-gray-300"
      } px-12 py-16 rounded-3xl relative overflow-hidden cursor-pointer`}>
      <div className="absolute w-96 h-96 rounded-full border-[30px] border-gray-100/20 -top-32 -right-40" />
      <div className="flex flex-col gap-5">
        <Space>
          <p
            className={`${
              name === setter ? "text-white" : "text-black"
            } text-left text-3xl font-medium`}>
            {name}
          </p>
        </Space>
        <Space direction="horizontal" className=" -space-x-1">
          <div className="flex flex-col h-12 justify-end">
            <div
              className={`${
                name === setter ? "text-white" : " text-blue-600"
              } text-base`}>
              $
            </div>
          </div>
          <div
            className={` ${
              name === setter ? "text-white" : " text-blue-600"
            } text-7xl font-semibold`}>
            {price}
          </div>
          <div className="flex flex-col h-12 justify-end">
            <div
              className={`${
                name === setter ? "text-white" : " text-gray-500"
              } text-base`}>
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
            } text-lg`}>
            {item}
          </p>
        ))}
      </Space>
      <Space direction="vertical" className=" w-48">
        <Button
          className="w-[100%] border-none"
          style={{
            height: 60,
            backgroundColor: " #3b82f6",
            fontSize: 20,
            color: "#fff",
            fontWeight: "700",
          }}>
          Try it Now
        </Button>
      </Space>
    </Flex>
  );
}
