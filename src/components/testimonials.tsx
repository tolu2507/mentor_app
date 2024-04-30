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
      className="bg-white  w-screen lg:px-32 lg:py-32 px-10 py-10 lg:space-y-8 relative no-scrollbar flex flex-col justify-center items-center">
      <TextWithTitleAndDescription
        title={"Testimonial"}
        description={description}
        dark={dark}
        color={color ? color : "text-[#17e]"}
      />
      <div className="lg:w-[1300px] w-screen items-center justify-center lg:flex hidden flex-row lg:mt-10 px-5">
        {data.map((item) => (
          <TestimonialCard dark={dark} key={item.name} item={item} />
        ))}
      </div>
      <div className="lg:hidden w-screen items-center space-y-2 justify-center flex flex-col lg:mt-10 mt-2 px-5">
        {objects.map((item) => (
          <TestimonialCard dark={dark} key={item.name} item={item} />
        ))}
      </div>
      <div className="w-[100%] mt-10 lg:flex hidden flex-row items-center justify-center">
        <Space>
          {cicleCounter.map((item) => (
            <div
              key={item}
              onClick={() => {
                setCurrent(item);
                setData(objects.slice(item, item + 1));
              }}
              className={`lg:w-6 lg:h-6 ${
                item === current ? "border" : "border-0"
              } border-black rounded-full justify-center items-center divflex-row flex cursor-pointer`}>
              <div
                className={`w-2 h-2 ${
                  current === item ? "bg-blue-700" : " bg-slate-400"
                } rounded-full`}
              />
            </div>
          ))}
        </Space>
      </div>
    </Space>
  );
}
