"use client";

import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Divider, Flex, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import DropdownComponent from "./dropdown";
import { BlogDrop, HomeDrop, PagesDrop } from "@/constant/headersdropdown";
import TextHelper from "./texthelper";
const { Text } = Typography;

export interface StickyHead {
  name: string;
  path: string;
}

export default function StickyHeaderNav({ logo }: { logo: string }) {
  return (
    <Space
      direction="horizontal"
      className="bg-white px-28 py-6 w-screen flex flex-row justify-center items-center fixed top-0 z-20 no-scrollbar shadow-md">
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
          <DropdownComponent title={"Home"} items={HomeDrop} />
          <TextHelper path={"/about"} title={"About Us"} />
          <DropdownComponent title={"Pages"} items={PagesDrop} />
          <DropdownComponent title={"Blog"} items={BlogDrop} />
          <TextHelper path={"/contact"} title={"Contact"} />
        </Flex>

        {/* button part */}
        <Space className="space-x-2">
          <Space className="space-x-2">
            <Badge className="" color="blue" count={0} showZero>
              <ShoppingCartOutlined className="text-2xl" />
            </Badge>
            <SearchOutlined
              onClick={() => console.log("hello world")}
              className="text-2xl"
              style={{ color: "#000" }}
            />
          </Space>
          <Link href={"/authenthecation"}>
            <Space className="w-48 h-12 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 rounded-lg flex-row flex justify-center items-center">
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                Get Started
              </Text>
            </Space>
          </Link>
        </Space>
      </Space>
    </Space>
  );
}
