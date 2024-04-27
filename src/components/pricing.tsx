"use client";

import { Space, Flex } from "antd";
import PricingList from "./pricinglist";
import Sponsors from "./sponsors";
import TextWithTitleAndDescription from "./textwithtitleanddescription";
import { useState } from "react";

export default function Pricing({ show = true }: { show?: boolean }) {
  const details = [
    { name: "Free", price: 0 },
    { name: "Starter", price: 10 },
    { name: "Pro", price: 30 },
  ];
  const [setter, setSetter] = useState("Free");
  return (
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
      {show && <Sponsors />}
    </Space>
  );
}
