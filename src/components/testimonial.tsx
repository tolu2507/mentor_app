"use client";

import { Flex, Space } from "antd";
import Image from "next/image";

export default function TestimonialComponent() {
  return (
    <Space
      direction="horizontal"
      className="flex flex-row justify-center items-center w-screen px-28 pt-40 pb-60 bg-white">
      <Space
        direction="vertical"
        className=" w-[1300px] overflow-scroll space-y-5 no-scrollbar">
        <Space
          direction="vertical"
          className=" w-[100%] -space-y-1 flex flex-col justify-center items-center mt-20">
          <p className="uppercase text-blue-700 text-base font-medium text-center">
            testimonial
          </p>
          <p className="text-center text-5xl font-medium text-black">
            satisfied clients Nationwide
          </p>
        </Space>
        <Space
          direction="vertical"
          className="space-y-4 flex flex-col justify-center items-center">
          <Flex gap={100} className="w-[100%]">
            <Space
              direction="vertical"
              className="w-[700px] flex-1  bg-white relative space-y-5 ps-40 py-10 pe-10 rounded-xl shadow-lg">
              <div className=" absolute bottom-20 -left-10 z-10 w-40 h-40 bg-blue-700 rounded-2xl" />
              <Image src="/message.png" width={50} height={50} alt="" />
              <p className="text-black text-xl leading-loose">
                Mentors.ng has been my guiding light as I embarked on my writing
                journey. The mentor I connected with provided constructive
                feedback on my work, shared writing techniques, and encouraged
                me to explore new genres. Their mentorship gave me the
                confidence to pursue my passion for writing.
              </p>
              <span className="text-black text-base leading-loose font-medium">
                Amina S.{" "}
                <span className="text-black text-xs font-light leading-loose">
                  {" "}
                  / Creative Writer
                </span>
              </span>
            </Space>
            <Space
              direction="vertical"
              className="w-[700px] flex-1  bg-white relative space-y-5 ps-40 py-10 pe-10 rounded-xl shadow-lg">
              <div className=" absolute bottom-20 -left-10 z-10 w-40 h-40 bg-blue-700 rounded-2xl" />
              <Image src="/message.png" width={50} height={50} alt="" />
              <p className="text-black text-xl leading-loose">
                Mentors.ng has been my guiding light as I embarked on my writing
                journey. The mentor I connected with provided constructive
                feedback on my work, shared writing techniques, and encouraged
                me to explore new genres. Their mentorship gave me the
                confidence to pursue my passion for writing.
              </p>
              <span className="text-black text-base leading-loose font-medium">
                Amina S.{" "}
                <span className="text-black text-xs font-light leading-loose">
                  {" "}
                  / Creative Writer
                </span>
              </span>
            </Space>
            <Space
              direction="vertical"
              className="w-[700px] flex-1  bg-white relative space-y-5 ps-40 py-10 pe-10 rounded-xl shadow-lg">
              <div className=" absolute bottom-20 -left-10 z-10 w-40 h-40 bg-blue-700 rounded-2xl" />
              <Image src="/message.png" width={50} height={50} alt="" />
              <p className="text-black text-xl leading-loose">
                Mentors.ng has been my guiding light as I embarked on my writing
                journey. The mentor I connected with provided constructive
                feedback on my work, shared writing techniques, and encouraged
                me to explore new genres. Their mentorship gave me the
                confidence to pursue my passion for writing.
              </p>
              <span className="text-black text-base leading-loose font-medium">
                Amina S.{" "}
                <span className="text-black text-xs font-light leading-loose">
                  {" "}
                  / Creative Writer
                </span>
              </span>
            </Space>
          </Flex>
        </Space>
      </Space>
    </Space>
  );
}
