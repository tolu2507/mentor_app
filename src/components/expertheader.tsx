import { Flex, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function ExpertHeader({
  path,
  topic,
}: {
  path: string;
  topic: string;
}) {
  return (
    <Space
      direction="vertical"
      className="w-screen h-[590px] relative no-scrollbar object-cover bg-no-repeat">
      <Image
        className="object-cover"
        src={path ? path : "/images/bg/page-banner.jpg"}
        alt={""}
        fill
        quality={100}
      />
      <Space
        direction="vertical"
        className=" absolute top-0 w-[100%] h-[100%] overflow-hidden px-28 no-scrollbar">
        <Flex justify="center" align="center" className="w-[100%] h-[590px]">
          <Space direction="vertical" className="space-y-7 z-50">
            <p className="text-center text-white text-7xl font-medium">
              {topic}
            </p>
            <p className="text-center text-white text-xl font-normal ">
              <Link
                href={"/"}
                className="text-center text-white hover:text-blue-400">
                Home
              </Link>{" "}
              / {topic}
            </p>
          </Space>
        </Flex>
        <Space className=" -top-[390px] -left-36 absolute   ">
          <Image
            src={"/shape1.svg"}
            width={944}
            height={894}
            alt={""}
            className=""
            quality={100}
          />
        </Space>
        <Space className=" -top-[350px] left-32 absolute   ">
          <Image
            src={"/shape2.svg"}
            width={726}
            height={726}
            alt={""}
            className=""
            quality={100}
          />
        </Space>
        <Space className=" -bottom-40 -right-20 absolute   ">
          <Image
            src={"/shape3.svg"}
            width={515}
            height={515}
            alt={""}
            className=""
            quality={100}
          />
        </Space>
        <Space className=" -bottom-32 -right-[490px] absolute   ">
          <Image
            src={"/shape4.svg"}
            width={972}
            height={972}
            alt={""}
            className=""
            quality={100}
          />
        </Space>
      </Space>
    </Space>
  );
}
