"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Flex, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Text } = Typography;

export interface StickyHead {
  name: string;
  path: string;
}

export default function StickyHeader({
  logo,
  data,
}: {
  logo: string;
  data: StickyHead[];
}) {
  return (
    <div className="bg-white lg:px-28 px-5 py-6 w-screen flex flex-row justify-center items-center fixed top-0 z-20 no-scrollbar shadow-md">
      <Flex
        // direction="horizontal"
        className="bg-white lg:w-[1350px] w-[100%] flex-1 flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            width={150}
            height={60}
            alt={""}
            className=""
            quality={100}
          />
        </Link>

        <div className="hidden lg:flex flex-row justify-center items-center space-x-14">
          {data.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className=" text-lg text-black font-medium">
              {name}
            </Link>
          ))}
        </div>
        <Link href={"/expert"} className="hidden lg:block">
          <Space className="w-60 h-12 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 rounded-lg flex-row flex justify-center items-center">
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Find an expert
            </Text>
          </Space>
        </Link>
        <div
          className=" bg-[#17e] lg:hidden p-3 flex flex-row justify-center items-center rounded-lg cursor-pointer"
          onClick={() => console.log("")}>
          <MenuOutlined className="text-xl" />
        </div>
      </Flex>
    </div>
  );
}
