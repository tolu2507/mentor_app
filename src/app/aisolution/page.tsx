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
    <Space direction="vertical" className="pt-20 bg-white">
      <Flex className="bg-white w-screen px-20 pb-20">
        <Flex className=" bg-black flex-1 rounded-[70px] relative py-40">
          <Image
            fill
            src="/images/bg/hero-bg5.jpg"
            alt=""
            className="rounded-[70px]"
          />
          <Flex gap={10} className="flex-1 z-10 h-[100%]">
            <Flex gap={50} vertical className="flex-1 ps-5">
              <p className="text-white text-lg font-medium">
                YOUR NETWORK BECOMES EASIER TO OPERATE BY AI
              </p>
              <div className="font-medium text-[70px] text-white leading-[80px] w-[100%]">
                Take the next steps for an{" "}
                <span className="text-[#17e]">AI-driven</span> enterprise.
              </div>
              <p className="text-white text-xl">
                We provide the most responsive and functional IT
              </p>
              <Space direction="vertical" className="w-[40%]">
                <Button
                  onClick={() => router.push("/about")}
                  className="w-[100%] border-none"
                  style={{
                    height: 60,
                    backgroundColor: " #3b82f6",
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "700",
                    border: 0,
                  }}>
                  Read More
                </Button>
              </Space>
            </Flex>
            <Flex className="flex-1 ">
              <div className=" animate-bounce-slow relative h-[630px] w-[630px] bg-black">
                <Image fill src="/images/hero-img.png" alt="" className="" />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Space
        direction="vertical"
        className="w-screen bg-white justify-center flex-row flex items-center pb-60">
        <Flex vertical gap={70} className="w-[1300px]">
          <TextWithTitleAndDescription
            title={"who are we"}
            description={
              "An artificial intelligence company that excels in visual recognition, solving real-world problems for businesses."
            }
          />
          <Flex gap={50} className="w-[100%]">
            <Flex className="flex-1">
              <div className="relative w-[411px] h-[508px]">
                <Image
                  src={"/images/about-big3.jpg"}
                  alt=""
                  fill
                  className="rounded-3xl"
                />
                <div className="relative -left-20 top-24 w-[301px] h-[323px] rounded-3xl">
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
              <Space direction="vertical" className="space-y-10 w-4/5">
                <p className="text-black text-2xl font-medium">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                </p>
                <p className="text-black text-lg font-light">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                </p>
                <div className="space-y-10">
                  {details.map((item) => (
                    <Flex key={item.title} gap={30} align="center">
                      <div className="relative w-16 h-16">
                        <Image alt="" fill src={item.name} />
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-[20px] leading-[30px] text-black">
                          {item.title}
                        </p>
                        <p className=" font-thin text-[16px] text-black leading-[20px]">
                          Accelerate innovation with world-class tech teams
                        </p>
                      </div>
                      <div></div>
                    </Flex>
                  ))}
                </div>
              </Space>
            </Flex>
          </Flex>
        </Flex>
      </Space>
      <Space
        direction="vertical"
        style={{ backgroundImage: `url('/images/bg/choose-us-bg.jpg')` }}
        className="px-20 flex flex-row items-center justify-center w-screen">
        <Flex
          vertical
          gap={70}
          className="bg-white rounded-xl border w-[1300px] p-24 relative -top-40">
          <TextWithTitleAndDescription
            title={"WHATS INCLUDED IN SERVICE"}
            description={"Building everything you need for your business"}
            width={true}
          />
          <div className="grid grid-cols-4 grid-rows-1 w-[100%]">
            {detail.map(({ name, title }) => (
              <Flex key={name} gap={20} vertical className="flex-1 p-7">
                <div className="relative w-40 h-32">
                  <Image src={name} alt="" fill />
                </div>
                <p className="text-black font-medium text-2xl">{title} </p>
                <p className="text-black font-normal text-sm ">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team .
                </p>
              </Flex>
            ))}
          </div>
        </Flex>
      </Space>
      <Flex align="center" justify="center" className="w-screen relative py-28">
        <Image src={"/images/bg/counter-bg.jpg"} alt="" fill />
        <div className="absolute bg-[#014]/90 w-[100%] h-[100%]"></div>
        {completed.map(({ text, amount }) => (
          <Flex key={amount} gap={10} className="w-[1300px] z-10 ]">
            <div className="flex-1 flex-col justify-center items-center space-y-2">
              <p className="text-[#17e] font-semibold text-center text-5xl">
                {amount}
              </p>
              <p className="text-white font-normal text-center text-lg">
                {text}
              </p>
            </div>
          </Flex>
        ))}
      </Flex>
      <Space
        direction="vertical"
        className="px-20 flex flex-row items-center justify-center w-screen">
        <Flex vertical gap={50} className="bg-white w-[1300px] p-24">
          <TextWithTitleAndDescription
            title={"WE DELIVER EXCELLENCE"}
            description={"Solutions To Common AI Problems"}
          />
          <Flex justify="space-between" gap={30} className="w-[100%]">
            <Flex className="flex-1 h-[474px] relative rounded-2xl">
              <Image
                alt=""
                src="/images/solution-1.jpg"
                fill
                className="rounded-2xl"
              />
              <Flex className="z-10 bg-gradient-to-b from-slate-400/20 to-black/60 rounded-2xl flex-1 px-16 pt-52">
                <Flex vertical className="flex-1">
                  <Link
                    href="#"
                    className="text-white hover:text-[#17e] font-medium">
                    Machine
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#17e] font-medium text-xl">
                    Categorizing Airbnb Listing Photos Using Tensorflow
                  </Link>
                </Flex>
                <Flex className="flex-1" justify="flex-end">
                  <Link
                    href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                    className="bg-white w-28 h-28 rounded-full flex flex-row justify-center items-center">
                    <p>text</p>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
            <Flex vertical gap={30} className="flex-1">
              <Flex className="flex-1 h-[237px] relative rounded-2xl">
                <Image
                  alt=""
                  src="/images/solution-1.jpg"
                  fill
                  className="rounded-2xl"
                />
                <Flex className="z-10 bg-gradient-to-b from-slate-400/20 to-black/60 rounded-2xl flex-1 px-16 pt-20">
                  <Flex vertical className="flex-1">
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium">
                      Data Mining
                    </Link>
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium text-xl">
                      Generative Adversarial Networks With Ml
                    </Link>
                  </Flex>
                  <Flex className="flex-1" justify="flex-end">
                    <Link
                      href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                      className="bg-white w-28 h-28 rounded-full flex flex-row justify-center items-center">
                      <p>text</p>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="flex-1 h-[237px] relative rounded-2xl">
                <Image
                  alt=""
                  src="/images/solution-1.jpg"
                  fill
                  className="rounded-2xl"
                />
                <Flex className="z-10 bg-gradient-to-b from-slate-400/20 to-black/60 rounded-2xl flex-1 px-16 pt-20">
                  <Flex vertical className="flex-1">
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium">
                      Data Mining
                    </Link>
                    <Link
                      href="#"
                      className="text-white hover:text-[#17e] font-medium text-xl">
                      Generative Adversarial Networks With Ml
                    </Link>
                  </Flex>
                  <Flex className="flex-1" justify="flex-end">
                    <Link
                      href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"
                      className="bg-white w-28 h-28 rounded-full flex flex-row justify-center items-center">
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
      <Space className="bg-white w-screen px-32 pb-32 space-y-20 relative no-scrollbar flex flex-col justify-center">
        <Sponsors />
      </Space>
    </Space>
  );
}
