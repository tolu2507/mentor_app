"use client";

import { Flex, Space } from "antd";
import Image from "next/image";
import { useState } from "react";
import { mentors, satisfy } from "@/constant/stickyconstant";

export default function MetricsSection() {
  const [isHovered, setIsHovered] = useState("");

  return (
    <Space
      className="bg-[#f6f6f6] w-screen h-full relative no-scrollbar"
      style={{ backgroundImage: `url('/images/bg/choose-us-bg.jpg')` }}>
      <Space className=" w-screen h-full relative top-0 left-0 bg-opacity-80 flex flex-row justify-center items-center pb-20">
        <div className="lg:w-[1300px] w-screen flex flex-col">
          <div className=" w-[100%] bg-white shadow-sm border-2 h-64 relative lg:-top-32 lg:grid grid-cols-3 divide-x hidden">
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
          </div>
          <div className="lg:w-[100%] pt-8 w-screen flex flex-col space-y-10">
            <Space
              direction="vertical"
              className="lg:w-[100%] w-screen lg:space-y-4 space-y-1 flex flex-col justify-center items-center">
              <p className="uppercase text-blue-700 lg:text-base text-sm font-medium text-center">
                reason to choose us
              </p>
              <p className="text-center lg:text-5xl text-2xl font-medium text-black w-[600px]">
                We provide you the best mentors.
              </p>
            </Space>
            <Flex gap={20} className=" w-[100%] lg:flex-row flex flex-col px-4">
              {mentors.map(({ image, title, desc }) => (
                <div
                  key={title}
                  className="relative h-[474px] lg:w-[417px] w-[100%]"
                  onMouseEnter={() => setIsHovered(title)}
                  onMouseLeave={() => setIsHovered("")}>
                  <div className="absolute left-0 top-0 bg-gradient-to-b from-transparent to-black lg:w-[417px] w-[100%] h-[100%] z-10 rounded-3xl overflow-hidden lg:p-10 p-5">
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
          </div>
        </div>
      </Space>
    </Space>
  );
}
