"use client";

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
    <Space
      direction="horizontal"
      className="bg-white px-28 py-4 w-screen flex flex-row justify-center items-center fixed top-0 z-20 no-scrollbar shadow-md">
      <Space
        direction="horizontal"
        className="bg-white w-[1350px] flex flex-row justify-between items-center">
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

        <Flex gap={60}>
          {data.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className=" text-lg text-black font-medium">
              {name}
            </Link>
          ))}
        </Flex>
        <Link href={"/expert"}>
          <Space className="w-60 h-12 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 rounded-lg flex-row flex justify-center items-center">
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Find an expert
            </Text>
          </Space>
        </Link>
      </Space>
    </Space>
  );
}
