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
    <Flex gap={20} justify="space-between" className="lg:w-[100%] flex lg:flex-row flex-col w-screen lg:px-0 px-5">
      {body.map((it) => (
        <div
          key={it.image}
          className="bg-[#f8f8f8] lg:py-16 px-16 py-8 rounded-2xl w-[100%] shadow-sm no-scrollbar flex flex-col justify-center items-center flex-1">
          <div className="relative lg:w-16 lg:h-16 w-8 h-8">
            <Image alt="" src={it.image} fill />
          </div>
          <p className="text-black font-medium lg:text-4xl text-xl text-center lg:mt-5 lg:mb-5 my-2">
            {it.title}
          </p>
          {it.extra.map((ex) => (
            <p
              key={ex}
              className="text-black font-normal lg:text-[18px] text-sm leading-tight text-center">
              {ex}
            </p>
          ))}
        </div>
      ))}
    </Flex>
  );
}
