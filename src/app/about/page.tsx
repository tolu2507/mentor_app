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

export default function AboutPage() {
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
    { name: "IT Manangement", price: 80 },
    { name: "Data Security", price: 95 },
    { name: "Information Technology", price: 80 },
  ];

  const completed = [
    { amount: "354+", text: "Completed projects" },
    { amount: "119+", text: "Robotics Automation" },
    { amount: "99%", text: "Web Site Ananlysis" },
    { amount: "321+", text: "Client Support Done" },
  ];

  return (
    <>
      <ExpertHeader path={""} topic={"About Us"} />
      <Flex
        justify="center"
        align="center"
        className="lg:pt-32 w-screen pt-10 pb:10 lg:pb-44 lg:px-20 px-5 bg-white relative lg:gap-[120px] gap-5 flex-col lg:flex-row">
        <Flex className="lg:w-[453px] w-[100%] h-[599px] relative">
          <Image
            src={"/images/shape/about-shape2.png"}
            fill
            alt=""
            className="object-cover"
          />
          <div className="absolute w-[100%] top-10 lg:-left-[82px]">
            <div className="lg:w-[300px] w-[100%] h-[462px] relative rounded-lg">
              <Image
                src={"/images/about-3.jpg"}
                fill
                alt=""
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="hidden lg:flex absolute w-[100%] top-28 lg:-right-20">
            <div className="lg:w-[300px] w-[50%] h-[462px] relative rounded-lg">
              <Image
                src={"/images/about-3.jpg"}
                fill
                alt=""
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Flex>
        <Flex vertical className="lg:w-[500px] w-[100%]">
          <Flex vertical className="w-[100%] bg-white border-b pb-4 lg:pb-16">
            <p className="text-[#17e]  font-normal text-lg">WHO WE ARE</p>
            <br />
            <p className="text-black  font-medium text-[25px] lg:text-[50px] lg:leading-[60px]">
              Highly Tailored IT Design, Management & Support Services.
            </p>
            <br />
            <p className="text-black  font-thin text-lg leading-[30px]">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs.
            </p>
          </Flex>
          <Flex
            justify="space-between"
            className="w-[100%] bg-white lg:pt-16 pt-4">
            <div className="flex flex-col gap-3 lg:w-[180px]">
              <div className="text-black font-medium text-lg">Our Mission</div>
              <p className="text-black lg:font-thin text-sm lg:text-base">
                Accelerate innovation with world-class tech teams. We help
                businesses elevate their value.
              </p>
            </div>
            <div className="flex flex-col gap-3  lg:w-[180px]">
              <div className="text-black font-medium text-lg">Custom Code</div>
              <p className="text-black lg:font-thin text-sm lg:text-base">
                Accelerate innovation with world-class tech teams. We help
                businesses elevate their value.
              </p>
            </div>
          </Flex>
        </Flex>
        <div className="lg:absolute lg:w-screen w-[100%]  -bottom-20 z-10 left-0 lg:px-20">
          <Flex
            align="center"
            justify="center"
            className="relative w-[100%] lg:py-12 py-5 rounded-xl flex-col lg:flex-row gap-3">
            <Image
              src={"/images/bg/counter-bg2.jpg"}
              alt=""
              fill
              className="rounded-xl"
            />
            <div className="lg:absolute w-[100%] h-[100%]"></div>
            {completed.map(({ text, amount }) => (
              <Flex key={amount} className="lg:w-[1300px] z-10 lg:gap-5 gap-3">
                <div className="flex-1 flex-col justify-center items-center lg:space-y-2">
                  <p className="text-white font-semibold text-center lg:text-5xl text-2xl">
                    {amount}
                  </p>
                  <p className="text-white font-normal text-center text-lg">
                    {text}
                  </p>
                </div>
              </Flex>
            ))}
          </Flex>
        </div>
      </Flex>
      <Space
        style={{ backgroundImage: `url("/images/bg/choose-us-bg3.jpg")` }}
        direction="vertical"
        className="bg-white w-screen lg:px-32 lg:pt-32 lg:pb-20 py-10 lg:py-0 relative no-scrollbar flex flex-col justify-center items-center">
        <TextWithTitleAndDescription
          title={"reason to choose us"}
          description={"We provide truly prominent IT solutions."}
          width={true}
        />
        <br />
        <ServicesGridList />
      </Space>
      <Flex className="bg-white w-screen lg:px-32 lg:py-32 px-5 py-10 relative no-scrollbar flex flex-row justify-center items-center">
        <Flex
          justify="space-between"
          className="lg:w-[1300px] w-[100%] flex-col lg:flex-row">
          <Flex vertical className="flex-1 lg:gap-12 gap-5">
            <Space direction="vertical" className="lg:w-[80%]">
              <p className="text-black lg:text-5xl lg:leading-[60px] text-2xl font-medium">
                Preparing for your success, we provide truly prominent IT
                solutions
              </p>
              <br className="hidden lg:block" />
              <p className="text-black lg:text-lg lg:leading-[35px] font-normal">
                We always focus on technical excellence
              </p>
              <p className="text-black lg:text-lg lg:leading-[35px] font-normal">
                Wherever you’re going, we bring ideas and excitement
              </p>
              <p className="text-black lg:text-lg lg:leading-[35px] font-normal">
                We’re consultants, guides, and partners for brands
              </p>
            </Space>
            <Space className=" border-t-2 border-r-slate-200 w-full py-1">
              <Space className="w-full h-full py-5">
                <Space
                  direction="vertical"
                  className=" lg:pe-16 pe-4 border-r-2 border-r-slate-200">
                  <Image
                    src={"/images/sign.png"}
                    alt=""
                    width={155}
                    height={32}
                    className="lg:mb-5"
                  />
                  <p className="text-black font-medium lg:text-lg">
                    Alen Moreno sin
                  </p>
                  <p className="text-black font-normal text-sm">CEO, Techmax</p>
                </Space>
                <Space className="lg:ms-16 ms-4">
                  <Space direction="vertical">
                    <p className="text-black text-base font-normal">
                      Call to ask any question
                    </p>
                    <p className=" text-blue-600 font-medium lg:text-3xl">
                      0123-456-7890
                    </p>
                  </Space>
                </Space>
              </Space>
            </Space>
          </Flex>
          <Flex gap={10} vertical className="flex-1">
            <p className="text-black lg:w-[75%] lg:text-lg lg:leading-[35px] font-normal">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs. building cloud, infrastructure,
              network, etc. We put a strong focus on the needs of your business
              to figure out solutions that best fits your demand and nail it
            </p>
            <br />
            <br className="hidden lg:block" />
            {details.map((item) => (
              <Space
                key={item.name}
                direction="vertical"
                className="lg:mb-5 lg:w-[80%]">
                <p className="text-black lg:text-lg leading-[10px] font-medium">
                  {item.name}
                </p>
                <Progress
                  percent={item.price}
                  showInfo={false}
                  strokeColor={"#17e"}
                />
              </Space>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        vertical
        className="w-screen lg:py-32 lg:px-20 py-10 px-5 relative"
        justify="center"
        align="center">
        <Image
          src="/images/bg/team-bg1.jpg"
          fill
          alt=""
          className="object-cover"
        />
        <p className="text-[#17e] z-10">OUR EXPERT TEAM</p>
        <p className="text-white font-medium lg:text-[50px] text-2xl z-10 ">
          We have world expert team
        </p>
        <br />
        <br className="hidden lg:block" />
        <Flex className="lg:w-[1300px] w-[100%] flex-col lg:flex-row z-10 lg:justify-center lg:items-center">
          {[1, 2, 3, 4].map((item) => (
            <Link href={"/expert/Max"} key={item}>
              <Flex className="lg:w-[327px] w-[100%] h-[423px] relative">
                <Image
                  src="/images/team/team-3.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <Flex
                  justify="flex-end"
                  className="z-10 p-10 bg-gradient-to-b from-transparent to-[#222] absolute top-0 left-0 h-[100%] w-[100%]"
                  vertical>
                  <div className="font-medium text-2xl text-white w-[180px] border-l-[30px] pl-2 border-l-[#17e]">
                    Andrew Max Fetcher{" "}
                    <p className="font-normal text-sm">CEO, techwix</p>
                  </div>
                </Flex>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>

      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
        show={false}
      />
      <Space className="bg-white w-screen px-32 pb-32 space-y-20 relative no-scrollbar flex flex-col justify-center">
        <Sponsors />
      </Space>
    </>
  );
}
