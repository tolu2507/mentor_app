"use client";

import { Flex, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Text } = Typography;

export default function HomeHeader() {
  return (
    <Space
      direction="vertical"
      className="bg-white w-[100%] h-screen relative no-scrollbar">
      <Image
        src={"/background.jpeg"}
        width={300}
        height={300}
        alt={""}
        className=" w-screen h-screen"
        quality={100}
      />
      <Space
        direction="vertical"
        className=" absolute top-0 w-[100%] h-[100%] overflow-hidden px-28 no-scrollbar">
        <Space
          direction="vertical"
          className=" top-1/3 left-0 absolute z-10 flex-1 w-[100%] px-28 flex flex-row justify-center items-center no-scrollbar">
          <Flex gap={100} className="w-[1300px]">
            <Space direction="vertical" className="w-1/2 flex-1">
              <Text
                strong
                style={{ color: "#fff", fontSize: 20, fontWeight: "900" }}>
                TECHNOLOGY RELETED CONSULTANCY
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 64,
                  fontWeight: "700",
                  wordSpacing: 1,
                }}>
                Get Expert Advice, Instantly
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "600",
                }}>
                Access Top Tier experts Get real answers Pay by the minute
              </Text>
              <Link href={"/expert"}>
                <Space className="w-64 h-16 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 rounded-lg flex-row flex justify-center items-center">
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                    Find an expert
                  </Text>
                </Space>
              </Link>
            </Space>
            <Space direction="vertical" className="w-1/2 flex-1">
              <Text strong style={{ color: "transparent", fontSize: 18 }}>
                TECHNOLOGY RELETED CONSULTANCY
              </Text>
            </Space>
          </Flex>
        </Space>
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
