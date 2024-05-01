"use client";

import {
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button, Divider, Flex, Menu, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import DropdownComponent from "./dropdown";
import { BlogDrop, HomeDrop, PagesDrop } from "@/constant/headersdropdown";
import TextHelper from "./texthelper";
import { useState } from "react";
import type { GetProp, MenuProps } from "antd";
type MenuItem = GetProp<MenuProps, "items">[number];
const { Text } = Typography;

export interface StickyHead {
  name: string;
  path: string;
}

export default function StickyHeaderNav({
  logo,
  color,
  show = true,
  link,
  title,
  data,
}: {
  logo: string;
  color?: boolean;
  show?: boolean;
  link?: string;
  title?: string;
  data?: StickyHead[];
}) {
  const [shows, setShows] = useState(false);

  function createMenuArray(data: StickyHead[]): MenuItem[] {
    let emptyArray: MenuItem[] = [];
    emptyArray = data.map((item) => ({
      key: item.name,
      label: (
        <Link
          href={item.path}
          className="text-white text-lg font-medium hover:text-[#17e]">
          {item.name}
        </Link>
      ),
    }));
    return emptyArray;
  }

  const items: MenuItem[] = [
    {
      key: "sub1",
      label: (
        <Link
          href={""}
          className="text-white text-lg font-medium hover:text-[#17e]">
          Home
        </Link>
      ),
      children: HomeDrop,
    },
    {
      key: "sub2",
      label: (
        <Link
          href={"/about"}
          className="text-white text-lg font-medium hover:text-[#17e]">
          About
        </Link>
      ),
    },
    {
      key: "sub3",
      label: (
        <Link
          href={""}
          className="text-white text-lg font-medium hover:text-[#17e]">
          Pages
        </Link>
      ),
      children: PagesDrop,
    },
    // {
    //   key: "sub4",
    //   label: (
    //     <Link
    //       href={""}
    //       className="text-white text-lg font-medium hover:text-[#17e]">
    //       Blog
    //     </Link>
    //   ),
    //   children: BlogDrop,
    // },
    {
      key: "sub5",
      label: (
        <Link
          href={"/contact"}
          className="text-white text-lg font-medium hover:text-[#17e]">
          Contact
        </Link>
      ),
    },
  ];

  const usedDetails: MenuItem[] = data ? createMenuArray(data) : items;

  return (
    <div className="relative">
      <div className="bg-white lg:px-28 px-4 py-4 w-screen flex flex-row justify-center items-center fixed top-0 z-20 no-scrollbar shadow-md">
        <Flex className="bg-white lg:w-[1350px] w-[100%] flex-1 flex flex-row justify-between items-center">
          <Link href="/" className="hidden lg:block">
            <Image
              src={logo}
              width={150}
              height={60}
              alt={""}
              className=""
              quality={100}
            />
          </Link>
          <Link href="/" className="lg:hidden ">
            <Image
              src={logo}
              width={120}
              height={60}
              alt={""}
              className=""
              quality={100}
            />
          </Link>

          {!data ? (
            <div className="hidden space-x-14 lg:flex flex-row justify-center items-center">
              <DropdownComponent title={"Home"} items={HomeDrop} />
              <TextHelper path={"/about"} title={"About Us"} />
              {/* <DropdownComponent title={"Pages"} items={PagesDrop} /> */}
              <DropdownComponent title={"Blog"} items={BlogDrop} />
              <TextHelper path={"/contact"} title={"Contact"} />
            </div>
          ) : (
            <div className="hidden space-x-14 lg:flex flex-row justify-center items-center">
              {data?.map((item) => (
                <TextHelper
                  key={item.name}
                  path={item.path}
                  title={item.name}
                />
              ))}
            </div>
          )}

          {/* button part */}
          <Space className="space-x-2">
            {show && (
              <div className="space-x-2 hidden lg:block">
                <Badge
                  className=" hidden"
                  color={color ? "orange" : "blue"}
                  count={0}
                  showZero>
                  <ShoppingCartOutlined className="text-2xl" />
                </Badge>
                <SearchOutlined
                  onClick={() => console.log("hello world")}
                  className="text-2xl"
                  style={{ color: "#000" }}
                />
              </div>
            )}
            <Link
              href={link ? link : "/authenthecation"}
              className="hidden lg:block">
              <Space
                className={
                  color
                    ? "w-48 h-12 bg-[#f54] rounded-lg flex-row flex justify-center items-center"
                    : "w-48 h-12 bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 rounded-lg flex-row flex justify-center items-center"
                }>
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                  {title ? title : "Get Started"}
                </Text>
              </Space>
            </Link>
            <div
              className=" bg-[#17e] lg:hidden p-2 flex flex-row justify-center items-center rounded-lg cursor-pointer"
              onClick={() => setShows(!shows)}>
              <MenuOutlined className="text-base" />
            </div>
          </Space>
        </Flex>
      </div>
      {shows && (
        <div className="absolute h-screen w-screen bg-black/30 lg:hidden left-0 -top-5 z-20">
          <div className="bg-[#001529] h-[100%] w-[70%] py-10 flex-col flex z-20 gap-16">
            <Flex justify="space-between" align="center" className="px-4">
              <Link href="/">
                <Image
                  src={logo}
                  width={120}
                  height={60}
                  alt={""}
                  className=""
                  quality={100}
                />
              </Link>
              <CloseOutlined
                onClick={() => setShows(!shows)}
                className="text-2xl"
              />
            </Flex>
            <Flex vertical className="w-[100%]">
              <Menu
                style={{ width: "100%", color: "white" }}
                mode={"inline"}
                theme={"dark"}
                items={usedDetails}
              />
            </Flex>
          </div>
        </div>
      )}
    </div>
  );
}
