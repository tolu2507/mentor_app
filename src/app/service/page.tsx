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
import Pricing from "@/components/pricing";

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
        className="bg-white w-screen lg:px-32 lg:pt-32 pt-10 px-5 pb-8 relative no-scrollbar flex flex-row justify-center items-center">
        <ServicesGridList />
        <MakeEnquiry />
      </Space>
      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
      />
      <Pricing show={true} />
    </>
  );
}
