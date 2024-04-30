"use client";

import ExpertHeader from "@/components/expertheader";
import { Button, Flex, Input, Space, Checkbox, Progress } from "antd";
import React, { useState } from "react";
import type { CheckboxProps } from "antd";
import MakeEnquiry from "@/components/makeconsult";
import ServicesGridList from "@/components/gridlistview";
import TestimonialsContent from "@/components/testimonials";
import TextWithTitleAndDescription from "@/components/textwithtitleanddescription";
import PricingList from "@/components/pricinglist";
import Image from "next/image";
import Sponsors from "@/components/sponsors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuDivider from "antd/es/menu/MenuDivider";

export default function AisolutionPage() {
  const router = useRouter();
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const objects = [
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Amina S.",
    },
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Amina K.",
    },
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Tolu S.",
    },
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Sunday M.",
    },
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Jude C.",
    },
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Amina T.",
    },
  ];

  const details = [
    {
      name: "/images/about-icon1.png",
      title: "Augumented Reality",
    },
    {
      name: "/images/about-icon2.png",
      title: "Datat Resolving",
    },
  ];

  const detail = [
    {
      name: "/images/ser-icon13.png",
      title: "AI base business solution",
    },
    {
      name: "/images/ser-icon14.png",
      title: "Chatbot with Real meeting",
    },
    {
      name: "/images/ser-icon15.png",
      title: "Automate data saving",
    },
    {
      name: "/images/ser-icon16.png",
      title: "Robotic Automation",
    },
  ];
  const completed = [
    { amount: "354+", text: "Completed projects" },
    { amount: "119+", text: "Robotics Automation" },
    { amount: "99%", text: "Web Site Ananlysis" },
    { amount: "321+", text: "Client Support Done" },
  ];

  return (
    <Space direction="vertical" className="pt-20 bg-white w-screen">
      <Flex className="bg-white w-screen lg:px-20 lg:pb-20 pb-5">
        <Flex className=" bg-black flex-1 lg:rounded-[70px] relative lg:py-40 py-5 px-5 lg:px-0">
          <Image
            fill
            src="/images/bg/hero-bg5.jpg"
            alt=""
            className="lg:rounded-[70px] object-cover"
          />
          <div className="flex-1 z-10 h-[100%] flex flex-col lg:flex-row gap-5">
            <Flex vertical className="flex-1 lg:ps-5 lg:gap-12 gap-5">
              <p className="text-white lg:text-lg text-sm font-medium">
                YOUR NETWORK BECOMES EASIER TO OPERATE BY AI
              </p>
              <div className="font-medium text-3xl lg:text-[70px] text-white lg:leading-[80px] lg:w-[100%] w-[80%]">
                Take the next steps for an{" "}
                <span className="text-[#17e]">AI-driven</span> enterprise.
              </div>
              <p className="text-white text-base lg:text-xl">
                We provide the most responsive and functional IT
              </p>
              <Space direction="vertical" className="w-[50%] lg:w-[30%]">
                <Link
                  href={"/about"}
                  className="px-10 py-3 rounded-xl flex flex-row justify-center items-center text-white border-none bg-[#17e]">
                  Read More
                </Link>
              </Space>
            </Flex>
            <div className="flex-1 ">
              <div className="lg:animate-bounce-slow relative h-[630px] lg:w-[630px] w-[100%] bg-black">
                <Image fill src="/images/hero-img.png" alt="" className="" />
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
      <Space
        direction="vertical"
        className="w-screen bg-white justify-center flex-row flex items-center lg:pb-60 pb-5">
        <Flex className="lg:w-[1300px] w-screen flex-col gap-5 lg:gap-16 px-5 lg:px-0">
          <TextWithTitleAndDescription
            title={"who are we"}
            description={
              "An artificial intelligence company that excels in visual recognition, solving real-world problems for businesses."
            }
          />
          <Flex className="w-[100%] lg:gap-12 gap-5 flex-col lg:flex-row">
            <Flex className="flex-1">
              <div className="relative lg:w-[411px] w-[100%] lg:h-[508px] h-[350px]">
                <Image
                  src={"/images/about-big3.jpg"}
                  alt=""
                  fill
                  className="lg:rounded-3xl rounded-lg"
                />
                <div className="relative hidden lg:block -left-20 top-24 w-[301px] h-[323px] rounded-3xl">
                  <Image
                    src={"/images/about-sm3.jpg"}
                    alt=""
                    fill
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </Flex>
            <Flex vertical className="flex-1">
              <Flex className="lg:gap-10 gap-5 lg:w-4/5 flex-col">
                <p className="text-black lg:text-2xl text-lg font-medium">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                </p>
                <p className="text-black lg:text-lg text-sm lg:font-light">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                </p>
                <div className="lg:gap-10 flex flex-col gap-5">
                  {details.map((item) => (
                    <Flex key={item.title} gap={30} align="center">
                      <div className="relative lg:w-16 lg:h-16 w-8 h-8">
                        <Image alt="" fill src={item.name} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-medium lg:text-[20px] text-[16px] lg:leading-[30px] leading-[20px] text-black">
                          {item.title}
                        </p>
                        <p className=" lg:font-thin lg:text-[16px] text-sm text-black lg:leading-[20px] leading-[16px]">
                          Accelerate innovation with world-class tech teams
                        </p>
                      </div>
                      <div></div>
                    </Flex>
                  ))}
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Space>
      <Space
        direction="vertical"
        style={{ backgroundImage: `url('/images/bg/choose-us-bg.jpg')` }}
        className="lg:px-20 py-5 px-5 flex flex-row items-center justify-center w-screen">
        <Flex className="bg-white rounded-xl border lg:w-[1300px] lg:p-24 p-5 relative lg:-top-40 flex-col lg:gap-[70px] gap-5">
          <TextWithTitleAndDescription
            title={"WHATS INCLUDED IN SERVICE"}
            description={"Building everything you need for your business"}
            width={true}
          />
          <div className="lg:grid grid-cols-4 grid-rows-1 w-[100%]">
            {detail.map(({ name, title }) => (
              <Flex
                key={name}
                className="flex-1 lg:p-7 lg:border-b-0 border-b p-4 flex-col lg:gap-5 gap-2">
                <div className="relative lg:w-40 lg:h-32 w-20 h-16">
                  <Image src={name} alt="" fill />
                </div>
                <p className="text-black font-medium lg:text-2xl">{title} </p>
                <p className="text-black font-normal text-sm ">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team .
                </p>
              </Flex>
            ))}
          </div>
        </Flex>
      </Space>
      <Flex
        align="center"
        justify="center"
        className="w-screen relative lg:py-28 px-5 py-5 lg:flex-row flex-col">
        <Image src={"/images/bg/counter-bg.jpg"} alt="" fill />
        <div className="absolute bg-[#014]/90 w-[100%] h-[100%]"></div>
        {completed.map(({ text, amount }) => (
          <Flex key={amount} gap={10} className="lg:w-[1300px] w-[100%] z-10 ">
            <div className="flex-1 flex-col justify-center items-center gap-2 py-3 lg:py-0">
              <p className="text-[#17e] font-semibold text-center lg:text-5xl text-2xl">
                {amount}
              </p>
              <p className="text-white font-normal text-center lg:text-lg text-sm">
                {text}
              </p>
            </div>
          </Flex>
        ))}
      </Flex>
      <Space
        direction="vertical"
        className="lg:px-20 px-5 flex flex-row items-center justify-center w-screen">
        <Flex className="bg-white lg:w-[1300px] w-[100%] p-5 lg:p-24 flex-col gap-12">
          <TextWithTitleAndDescription
            title={"WE DELIVER EXCELLENCE"}
            description={"Solutions To Common AI Problems"}
          />
          <Flex className="w-[100%] justify-between lg:gap-8 gap-4 flex-col lg:flex-row">
            <Flex className="flex-1 lg:h-[474px] h-[350px] relative rounded-2xl">
              <Image
                alt=""
                src="/images/solution-1.jpg"
                fill
                className="rounded-2xl"
              />
              <Flex className="z-10 bg-gradient-to-b from-slate-400/20 to-black/60 rounded-2xl flex-1 lg:px-16 lg:pt-52 pt-16 pb-4 px-5">
                <Flex vertical className="flex-1">
                  <Link
                    href="#"
                    className="text-white hover:text-[#17e] font-medium">
                    Machine
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#17e] font-medium lg:text-xl">
                    Categorizing Airbnb Listing Photos Using Tensorflow
                  </Link>
                </Flex>
                <Flex className="flex-1" align="center" justify="flex-end">
                  <Link
                    href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                    className="bg-white lg:w-28 lg:h-28 w-16 h-16 rounded-full flex flex-row justify-center items-center">
                    <p>text</p>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
            <Flex className="flex-1 lg:gap-8 gap-4 flex-col">
              <Flex className="flex-1 lg:h-[237px] h-[130x] relative rounded-2xl">
                <Image
                  alt=""
                  src="/images/solution-1.jpg"
                  fill
                  className="rounded-2xl"
                />
                <Flex className="z-10 bg-gradient-to-b from-slate-400/20 to-black/60 rounded-2xl flex-1 lg:px-16 lg:pt-52 pt-16 pb-4 px-5">
                  <Flex vertical className="flex-1">
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium">
                      Data Mining
                    </Link>
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium lg:text-xl">
                      Generative Adversarial Networks With Ml
                    </Link>
                  </Flex>
                  <Flex className="flex-1" align="center" justify="flex-end">
                    <Link
                      href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                      className="bg-white lg:w-28 lg:h-28 w-16 h-16 rounded-full flex flex-row justify-center items-center">
                      <p>text</p>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="flex-1 lg:h-[237px] h-[130x] relative rounded-2xl">
                <Image
                  alt=""
                  src="/images/solution-1.jpg"
                  fill
                  className="rounded-2xl"
                />
                <Flex className="z-10 bg-gradient-to-b from-slate-400/20 to-black/60 rounded-2xl flex-1 lg:px-16 lg:pt-52 pt-16 pb-4 px-5">
                  <Flex vertical className="flex-1">
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium">
                      Data Mining
                    </Link>
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium lg:text-xl">
                      Generative Adversarial Networks With Ml
                    </Link>
                  </Flex>
                  <Flex className="flex-1" align="center" justify="flex-end">
                    <Link
                      href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                      className="bg-white lg:w-28 lg:h-28 w-16 h-16 rounded-full flex flex-row justify-center items-center">
                      <p>text</p>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Space>
      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
        show={true}
      />
      <div className="hidden bg-white w-screen px-32 pb-32 relative no-scrollbar lg:flex flex-row justify-center">
        <Sponsors />
      </div>
    </Space>
  );
}
