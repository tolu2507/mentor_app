"use client";

import ExpertHeader from "@/components/expertheader";
import React, { useState } from "react";
import TextWithTitleAndDescription from "@/components/textwithtitleanddescription";
import PricingList from "@/components/pricinglist";
import Sponsors from "@/components/sponsors";
import { Space, Flex } from "antd";

export default function PricingPage() {
  const details = [
    { name: "Free", price: 0 },
    { name: "Starter", price: 10 },
    { name: "Pro", price: 30 },
  ];
  const [setter, setSetter] = useState("Free");

  return (
    <>
      <ExpertHeader path={""} topic={"Pricing table"} />
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
