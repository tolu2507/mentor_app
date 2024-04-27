"use client";

import { Space, Flex } from "antd";
import TestimonialCard from "./testimonialcard";
import TextWithTitleAndDescription from "./textwithtitleanddescription";
import { useState } from "react";

export default function TestimonialsContent({
  objects,
  description,
  show = true,
  dark = false,
  color,
}: {
  objects: { name: string; text: string }[];
  description: string;
  show?: boolean;
  dark?: boolean;
  color?: string;
}) {
  function getNumberOfCircles(num: number) {
    let data = [];
    let counter = 0;

    while (counter < num) {
      data.push(counter);
      counter += 1;
    }
    return data;
  }

  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(objects.slice(current, current + 1));
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
      className="bg-white  w-screen px-32 py-32 space-y-8 relative no-scrollbar flex flex-col justify-center items-center">
      <TextWithTitleAndDescription
        title={"Testimonial"}
        description={description}
        dark={dark}
        color={color ? color : "text-[#17e]"}
      />
      <Space className="w-[1300px] items-center justify-center flex flex-row mt-10">
        {data.map((item) => (
          <TestimonialCard dark={dark} key={item.name} item={item} />
        ))}
      </Space>
      <Flex align="center" justify="center" className="w-[100%] mt-10">
        <Space>
          {cicleCounter.map((item) => (
            <div
              key={item}
              onClick={() => {
                setCurrent(item);
                setData(objects.slice(item, item + 1));
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
