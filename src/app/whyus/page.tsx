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
        className="bg-white w-screen px-32 pt-32 pb-20 relative no-scrollbar flex flex-row justify-center items-center">
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
        className="bg-white w-screen px-32 py-32  relative no-scrollbar flex flex-row justify-center items-center">
        <Flex gap={30} justify="space-between" className="w-[1300px]">
          <Flex gap={50} vertical className="flex-1">
            <Space className="w-full">
              <p className="text-black text-6xl font-medium">
                Preparing for your success, we provide truly prominent IT
                solutions
              </p>
            </Space>
            <Flex gap={50} className="w-[100%]">
              <div className="px-7 pb-7 pt-5 flex flex-col justify-center space-y-1 bg-gradient-to-tr from-[#74b] to-[#4bf]">
                <p className="text-white font-medium text-[100px] leading-tight">
                  25
                </p>
                <p className="text-white text-base w-24">Years of experience</p>
              </div>
              <div>
                <p className="text-black text-[18px] font-light leading-loose w-4/4">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                  for all your software development needs.
                </p>
                <br />
                <Link href={'/about'}>
                  <p className="text-[#17e] text-lg font-medium cursor-pointer ">
                    learn More About Us{" "}
                  </p>
                </Link>
              </div>
            </Flex>
          </Flex>
          <Flex gap={40} vertical className="flex-1">
            {details.map((item) => (
              <Space key={item.name} direction="vertical">
                <p className="text-black text-lg font-medium">{item.name}</p>
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
      <Space className="bg-white w-screen px-32 pb-32 space-y-20 relative no-scrollbar flex flex-col justify-center">
        <Sponsors />
      </Space>
    </>
  );
}
