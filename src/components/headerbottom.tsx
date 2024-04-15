import Image from "next/image";
import { headerbottomcard } from "@/constant/stickyconstant";
import { Card, Flex, Space } from "antd";
import Link from "next/link";

export default function HeaderBottom() {
  return (
    <Space className="bg-[#003] w-screen h-[500px] relative no-scrollbar">
      <Image src={"/headerbottom.png"} fill alt={""} quality={100} />
      <Space className="bg-[#003] w-screen h-[500px] absolute px-28 top-0 left-0 bg-opacity-80 flex flex-row justify-center items-center">
        <Flex className="w-[1300px]">
          {headerbottomcard.map(({ title, icon, description }) => (
            <Card
              key={title}
              style={{
                width: 350,
                position: "relative",
                top: -100,
                padding: 12,
                marginRight: 30,
                backgroundColor: "#fff",
              }}>
              <Flex vertical gap={20}>
                <Image
                  src={icon}
                  width={50}
                  height={50}
                  className="object-contain"
                  alt={""}
                  quality={100}
                />
                <Link href="/service">
                  <h3 className=" text-black font-bold text-2xl hover:text-blue-400">
                    {title}
                  </h3>
                </Link>
                <p className=" leading-8 text-base">{description}</p>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Space>
    </Space>
  );
}
