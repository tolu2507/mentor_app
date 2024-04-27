"use client";

import { Space, Flex } from "antd";
import TestimonialCard from "./testimonialcard";
import TextWithTitleAndDescription from "./textwithtitleanddescription";
import { useState } from "react";
import Image from "next/image";

export default function SoftwareTestimonials({
  objects,
  description,
  show = true,
  dark = false,
}: {
  objects: string[];
  description: string;
  show?: boolean;
  dark?: boolean;
}) {
  function getNumberOfCircles(num: number) {
    let data = [];
    let counter = 0;

    while (counter < num) {
      data.push(counter);
      counter += 3;
    }
    return data;
  }

  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(objects.slice(current, current + 3));
  let cicleCounter = getNumberOfCircles(objects.length);
  return (
    <Space
      style={{
        backgroundImage: show
          ? !dark
            ? `url('/images/bg/testi-bg4.jpg')`
            : `url('/images/bg/testi-bg3.jpg')`
          : "",
      }}
      className="bg-white  w-screen space-y-8 relative no-scrollbar flex flex-col justify-center items-center">
      <TextWithTitleAndDescription
        title={"case studies"}
        description={description}
        dark={dark}
      />
      <Space className="w-[1300px] items-center justify-center flex flex-row mt-10">
        {data.map((item) => (
          <Flex key={item} className="relative w-[411px] h-[292px] rounded-lg">
            <Image alt="" fill src="/images/case-2.jpg" />
            <Flex
              vertical
              justify="space-between"
              className="p-10 z-10 bg-gradient-to-b from-slate-400/10 to-slate-700/30 w-[100%] h-[100%] rounded-lg">
              <div className="bg-white  w-[90px] rounded-lg p-4">
                <div className="relative  w-[51px] h-[21px]">
                  <Image alt="" fill src={item} />
                </div>
              </div>
              <div className="text-white text-2xl font-bold hover:text-[#17e]">
                Blockchain technology
                <p className="text-sm text-[#17e] font-normal">Discover Inc</p>
              </div>
            </Flex>
          </Flex>
        ))}
      </Space>
      <Flex align="center" justify="center" className="w-[100%] mt-10">
        <Space>
          {cicleCounter.map((item) => (
            <div
              key={item}
              onClick={() => {
                setCurrent(item);
                setData(objects.slice(item, item + 3));
              }}
              className={`w-6 h-6 ${
                item === current ? "border" : "border-0"
              } border-black rounded-full justify-center items-center flex-row flex cursor-pointer`}>
              <div
                className={`w-2 h-2 ${
                  current === item ? "bg-blue-700" : " bg-slate-400"
                } rounded-full`}
              />
            </div>
          ))}
        </Space>
      </Flex>
    </Space>
  );
}
