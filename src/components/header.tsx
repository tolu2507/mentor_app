"use client";

import { Flex, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Text } = Typography;

export default function HomeHeader() {
  return (
    <div className="bg-black w-screen lg:h-screen relative no-scrollbar">
      <Image
        src={"/som1.jpg"}
        fill
        alt={""}
        className=" object-cover"
        quality={100}
      />
      <div className="lg:w-[1300px] lg:h-screen  z-10 lg:gap-40 w-[100%] lg:px-28 px-5 pt-32 lg:pb-32 pb-16 no-scrollbar flex flex-row justify-center items-center">
        <div className="lg:w-1/2 flex-1 z-10 ">
          <p className="text-white lg:text-lg text-sm font-bold">
            TECHNOLOGY RELETED CONSULTANCY
          </p>
          <br />
          <p className="text-white text-3xl lg:text-6xl font-bold w-[250px] lg:w-full">
            Get Expert Advice, Instantly
          </p>
          <br />
          <p className="text-white text-base lg:text-xl font-medium">
            Access Top Tier experts Get real answers Pay by the minute
          </p>
          <br />
          <Link href={"/expert"}>
            <div className="lg:w-64 lg:h-16 w-32 h-8 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 rounded-lg flex-row flex justify-center items-center">
              <p className="text-white lg:text-lg text-sm font-bold">
                Find an expert
              </p>
            </div>
          </Link>
          <br />
        </div>
        <div className="lg:w-1/2 flex-1 lg:block hidden ">
          <Text strong style={{ color: "transparent", fontSize: 18 }}>
            TECHNOLOGY RELETED CONSULTANCY
          </Text>
        </div>
      </div>
      <div className=" absolute top-0 w-[100%] h-[100%] overflow-hidden lg:px-28 px-5 no-scrollbar  flex-col hidden lg:flex">
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
      </div>
    </div>
  );
}
