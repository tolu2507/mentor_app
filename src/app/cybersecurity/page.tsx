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
import AIComprehenshion from "@/components/comprehensiveai";

export default function CyberPage() {
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
      name: "/images/ser-icon17.png",
      title: "Network Security & Protection",
    },
    {
      name: "/images/ser-icon18.png",
      title: "Browser Safety & Farewell",
    },
    {
      name: "/images/ser-icon19.png",
      title: "Network Security & Protection",
    },
    {
      name: "/images/ser-icon20.png",
      title: "Browser Safety & Farewell",
    },
  ];
  const completed = [
    { amount: "354+", text: "Completed projects" },
    { amount: "119+", text: "Robotics Automation" },
    { amount: "99%", text: "Web Site Ananlysis" },
    { amount: "321+", text: "Client Support Done" },
  ];

  return (
    <Space direction="vertical" className="pt-14 bg-white w-screen">
      <Flex className="bg-white w-screen p-20 relative">
        <Image fill src="/images/bg/hero-bg6.jpg" alt="" className="" />
        <Flex gap={10} className="flex-1 z-10">
          <Flex className="flex-1 ">
            <div className="relative h-[828px] w-[631px] bg-black">
              <Image fill src="/images/hero-img2.png" alt="" className="" />
              <div className="absolute -right-5 top-10 -z-10">
                <div className="relative h-[555px] w-[555px] animate-spin-slow">
                  <Image
                    fill
                    src="/images/shape/hero-shape1.png"
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </Flex>
          <Flex gap={50} vertical className="flex-1 ps-5">
            <p className="text-white text-lg font-medium">
              YOUR NETWORK BECOMES EASIER TO OPERATE BY AI
            </p>
            <div className="font-medium text-[72px] text-white leading-[100px] w-[100%]">
              Leading
              <span className="text-[#1ef]"> cyber security</span> & complete IT
              Solutions
            </div>
            <p className="text-white text-2xl">
              We provide the most responsive and functional IT
            </p>
            <Space direction="vertical" className="w-[40%]">
              <Button
                onClick={() => router.push("/about")}
                className="w-[100%] border-none"
                style={{
                  height: 60,
                  backgroundColor: " #1ef",
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "700",
                  border: 0,
                }}>
                Read More
              </Button>
            </Space>
          </Flex>
        </Flex>
        <Flex
          gap={20}
          className="w-screen z-10 absolute px-20 -bottom-44 left-0">
          <Flex
            gap={20}
            className="flex-1 bg-gradient-to-r from-[#74b] via-[#47c] to-[#1ef] rounded-xl p-16">
            <div className="relative h-[179px] w-[141px]">
              <Image
                fill
                src="/images/feat-4.png"
                alt=""
                className=""
                quality={100}
              />
            </div>
            <div className="space-y-5 flex flex-col justify-start">
              <p className="text-white text-3xl leading-2 font-bold">
                Cyber Security Solutions
              </p>
              <p className="text-white text-base leading-2 font-normal w-[320px]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible
              </p>
              <Link href="#" className="font-medium text-[#1ef] text-lg">
                Learn More
              </Link>
            </div>
          </Flex>
          <Flex
            gap={20}
            className="flex-1 bg-gradient-to-r from-[#74b] via-[#47c] to-[#1ef] rounded-xl p-16">
            <div className="relative h-[179px] w-[141px]">
              <Image
                fill
                src="/images/feat-5.png"
                alt=""
                className=""
                quality={100}
              />
            </div>
            <div className="space-y-5 flex flex-col justify-start">
              <p className="text-white text-3xl leading-2 font-bold">
                Cloud Computing
              </p>
              <p className="text-white text-base leading-2 font-normal w-[320px]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible
              </p>
              <Link href="#" className="font-medium text-[#1ef] text-lg">
                Learn More
              </Link>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <AIComprehenshion />
      <Space
        direction="vertical"
        style={{ backgroundImage: `url('/images/bg/service-bg6.jpg')` }}
        className="px-20 py-28 flex flex-row items-center justify-center w-screen">
        <Flex vertical gap={70} className="rounded-xl w-[1300px] p-24">
          <TextWithTitleAndDescription
            title={"WHATS INCLUDED IN SERVICE"}
            description={
              "Ensure complete protection of transactions on any devices"
            }
            width={true}
          />
          <div className="grid grid-cols-4 grid-rows-1 w-[100%] gap-5">
            {detail.map(({ name, title }) => (
              <Flex
                key={name}
                gap={20}
                vertical
                className="flex-1 p-7 bg-white rounded-xl">
                <div className="relative w-20 h-28">
                  <Image src={name} alt="" fill quality={100} />
                </div>
                <Link href="#" className="text-black font-medium text-2xl">
                  {title}{" "}
                </Link>
                <p className="text-black font-normal text-sm ">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team .
                </p>
              </Flex>
            ))}
          </div>
        </Flex>
      </Space>
      <Space
        direction="vertical"
        className="px-20 py-28 flex flex-col items-center justify-center w-screen">
        <TextWithTitleAndDescription
          title={"OPTIMAL SECURITY SOLUTIONS"}
          description={
            "Highly Tailored IT Design, Management & Support Services."
          }
          width={true}
        />
        <Flex
          className="bg-white px-20 relative"
          justify="center"
          align="center">
          <Space className="space-x-16">
            <div className="w-[547px] h-[597px] relative flex flex-row justify-center items-center">
              <Image
                src={"/images/shape/experince-shape2.png"}
                alt=""
                fill
                className=" animate-spin-slow"
              />
              <div className="p-10 rounded-full w-[389px] h-[389px] z-10 relative flex flex-col justify-center items-center overflow-hidden">
                <Image src={"/images/shape/exp-bg2.jpg"} alt="" fill />
                <p className="text-white z-10 text-[180px] leading-none font-medium">
                  25
                </p>
                <p className="text-white z-10 text-lg">
                  YEARS EXPERIENCE WORKING
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[18px] leading-[28px] text-black w-[90%]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-[18px] leading-[28px] text-black w-[90%]">
                  We always focus on technical excellence
                </p>
                <p className="text-[18px] leading-[28px] text-black w-[90%]">
                  Wherever you’re going, we bring ideas and excitement
                </p>
                <p className="text-[18px] leading-[28px] text-black w-[90%]">
                  We’re consultants, guides, and partners for brands
                </p>
              </div>
            </div>
          </Space>
        </Flex>
      </Space>
      <MakeEnquiry full={true} image="/images/bg/cta-bg3.jpg" />
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
