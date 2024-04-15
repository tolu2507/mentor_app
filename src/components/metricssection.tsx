"use client";

import { Flex, Space } from "antd";
import Image from "next/image";
import { useState } from "react";
import { mentors, satisfy } from "@/constant/stickyconstant";

export default function MetricsSection() {
  const [isHovered, setIsHovered] = useState("");

  return (
    <Space className="bg-[#f6f6f6] w-screen h-full relative no-scrollbar">
      <Image
        src={"/linebackground.png"}
        width={400}
        height={400}
        alt={""}
        quality={100}
        className=" absolute top-0 -left-10 "
      />
      <Image
        src={"/linebackground.png"}
        width={400}
        height={400}
        alt={""}
        quality={100}
        className=" absolute bottom-0 -right-10 "
      />
      <Space className=" w-screen h-full relative top-0 left-0 bg-opacity-80 flex flex-row justify-center items-center pb-20">
        <Space direction="vertical" className="w-[1300px]">
          <Flex className=" w-[100%] bg-white shadow-sm border-2 h-64 relative -top-32 grid grid-cols-3 divide-x">
            {satisfy.map(({ path, num, text }) => (
              <div
                key={text}
                className="w-1/4 flex flex-row justify-center items-center">
                <Flex gap={20} align="center">
                  <div className=" rounded-md bg-white shadow-xl w-24 h-28 flex flex-row justify-center items-center">
                    <Image
                      src={path}
                      alt=""
                      width={50}
                      height={50}
                      className=" object-cover"
                    />
                  </div>
                  <Space direction="vertical">
                    <p className=" text-4xl text-blue-600 font-extrabold">
                      {num}
                    </p>
                    <p className=" text-base text-black font-medium uppercase">
                      {text}
                    </p>
                  </Space>
                </Flex>
              </div>
            ))}
            <div className=" w-2/4">g</div>
          </Flex>
          <Space direction="vertical" className="w-[100%] space-y-10">
            <Space
              direction="vertical"
              className=" w-[100%] space-y-4 flex flex-col justify-center items-center">
              <p className="uppercase text-blue-700 text-base font-medium text-center">
                reason to choose us
              </p>
              <p className="text-center text-5xl font-medium text-black w-[600px]">
                We provide you the best mentors.
              </p>
            </Space>
            <Flex gap={20} className=" w-[100%] h-[474px]">
              {mentors.map(({ image, title, desc }) => (
                <div
                  key={title}
                  className="relative h-[100%] w-[417px]"
                  onMouseEnter={() => setIsHovered(title)}
                  onMouseLeave={() => setIsHovered("")}>
                  <div className="absolute left-0 top-0 bg-gradient-to-b from-transparent to-black w-[417px] h-[100%] z-10 rounded-3xl overflow-hidden p-10">
                    <div
                      className={`space-y-10 absolute p-10 bottom-0 left-0 bg-black bg-opacity-0 text-white transition-transform duration-500 ${
                        isHovered === title
                          ? "transform translate-y-0"
                          : "transform translate-y-1/3"
                      }`}>
                      <Space className="pb-0 space-x-3">
                        <div className="w-1 h-14 bg-gradient-to-b from-blue-800 to-purple-800" />
                        <p className="text-white font-medium text-2xl">
                          {title}
                        </p>
                      </Space>
                      {isHovered === title ? (
                        <p className="text-white font-normal text-sm">{desc}</p>
                      ) : (
                        <p className="text-transparent font-normal text-sm">
                          {desc}
                        </p>
                      )}
                    </div>
                  </div>
                  <Image
                    src={image}
                    fill
                    alt={""}
                    quality={100}
                    className=" object-cover rounded-3xl"
                  />
                </div>
              ))}
            </Flex>
          </Space>
        </Space>
      </Space>
    </Space>
  );
}
