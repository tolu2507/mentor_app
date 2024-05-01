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

export default function ServicePage() {
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
    { name: "Technology Consultant", price: 90 },
  ];

  return (
    <>
      <ExpertHeader path={""} topic={"Why Choose Us"} />
      <Space
        direction="vertical"
        className="bg-white w-screen lg:px-32 px-5 lg:pt-32 lg:pb-20 py-10 lg:py-0 relative no-scrollbar flex flex-row justify-center items-center">
        <TextWithTitleAndDescription
          title={"reason to choose us"}
          description={"We provide truly prominent IT solutions."}
          width={true}
        />
        <br />
        <ServicesGridList />
      </Space>
      <Space
        style={{
          backgroundImage: `url('/images/bg/skill-bg.jpg')`,
        }}
        className="bg-white w-screen lg:px-32 px-5 lg:py-32 py-10  relative no-scrollbar flex flex-row justify-center items-center">
        <Flex
          gap={30}
          justify="space-between"
          className="lg:w-[1300px] w-[100%] flex-col lg:flex-row">
          <Flex className="flex-1 lg:gap-12 gap-5 flex-col">
            <Space className="w-full">
              <p className="text-black lg:text-6xl text-3xl font-medium">
                Preparing for your success, we provide truly prominent IT
                solutions
              </p>
            </Space>
            <Flex className="w-[100%] lg:gap-12 gap-5">
              <div className="lg:px-7 px-4 lg:pb-7 pb-4 lg:pt-5 pt-2 flex flex-col justify-center space-y-1 bg-gradient-to-tr from-[#74b] to-[#4bf]">
                <p className="text-white font-medium lg:text-[100px] text-5xl leading-tight">
                  25
                </p>
                <p className="text-white lg:text-base text-sm w-24">Years of experience</p>
              </div>
              <div>
                <p className="text-black lg:text-[18px] text-sm font-light lg:leading-loose w-4/4">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                  for all your software development needs.
                </p>
                <br />
                <Link href={"/about"}>
                  <p className="text-[#17e] lg:text-lg text-sm font-medium cursor-pointer ">
                    learn More About Us{" "}
                  </p>
                </Link>
              </div>
            </Flex>
          </Flex>
          <Flex className="flex-1 lg:gap-10 gap-3 flex-col">
            {details.map((item) => (
              <Space key={item.name} direction="vertical" className="-space-y-2">
                <p className="text-black lg:text-lg font-medium">{item.name}</p>
                <Progress
                  percent={item.price}
                  showInfo={false}
                  strokeColor={"#17e"}
                />
              </Space>
            ))}
          </Flex>
        </Flex>
      </Space>
      <MakeEnquiry full={true} />
      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
        show={false}
      />
      <Space className="bg-white hidden w-screen lg:px-32 lg:pb-32 relative no-scrollbar lg:flex flex-row justify-center">
        <Sponsors />
      </Space>
    </>
  );
}
