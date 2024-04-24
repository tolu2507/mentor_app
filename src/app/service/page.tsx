"use client";

import ExpertHeader from "@/components/expertheader";
import { Button, Flex, Input, Space, Checkbox } from "antd";
import React, { useState } from "react";
import type { CheckboxProps } from "antd";
import MakeEnquiry from "@/components/makeconsult";
import ServicesGridList from "@/components/gridlistview";
import TestimonialsContent from "@/components/testimonials";
import TextWithTitleAndDescription from "@/components/textwithtitleanddescription";
import PricingList from "@/components/pricinglist";
import Image from "next/image";
import Sponsors from "@/components/sponsors";

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
    { name: "Free", price: 0 },
    { name: "Starter", price: 10 },
    { name: "Pro", price: 30 },
  ];
  const [setter, setSetter] = useState("Free");

  return (
    <>
      <ExpertHeader path={""} topic={"Our Services"} />
      <Space
        direction="vertical"
        className="bg-white w-screen px-32 pt-32 pb-8 relative no-scrollbar flex flex-row justify-center items-center">
        <ServicesGridList />
        <MakeEnquiry />
      </Space>
      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
      />
      <Space className="bg-white w-screen px-32 py-32 space-y-20 relative no-scrollbar flex flex-col justify-center">
        <TextWithTitleAndDescription
          title={"pricing plans"}
          description={"Affordable pricing for all"}
        />
        <Flex gap={30} className="w-[1300px]">
          {details.map((item) => (
            <PricingList
              key={item.name}
              details={item}
              setter={setter}
              action={() => setSetter(item.name)}
            />
          ))}
        </Flex>
        <Sponsors />
      </Space>
    </>
  );
}
