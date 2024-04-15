import { Flex, Space } from "antd";
import Image from "next/image";

export default function ContactFlex() {
  const body = [
    {
      image: "/phones.png",
      title: "Give us a call",
      extra: ["(+234) 7089915606"],
    },
    {
      image: "/info-2.png",
      title: "Drop us a line",
      extra: ["info@mentors.ng", "mail@mentors.ng"],
    },
    {
      image: "/info-3.png",
      title: "Visit our office",
      extra: ["Potiskum street area 2 ", "garki Abuja"],
    },
  ];

  return (
    <Flex gap={20} justify="space-between" className="w-[100%]">
      {body.map((it) => (
        <Space
          key={it.image}
          direction="vertical"
          className="bg-[#f8f8f8] py-16 rounded-2xl shadow-sm no-scrollbar flex flex-col justify-center items-center flex-1">
          <div className="relative w-16 h-16">
            <Image alt="" src={it.image} fill />
          </div>
          <p className="text-black font-medium text-4xl text-center mt-5 mb-5">
            {it.title}
          </p>
          {it.extra.map((ex) => (
            <p
              key={ex}
              className="text-black font-normal text-[18px] leading-tight text-center">
              {ex}
            </p>
          ))}
        </Space>
      ))}
    </Flex>
  );
}
