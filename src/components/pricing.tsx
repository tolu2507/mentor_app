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
    <Flex className="bg-white  w-[100%] lg:px-32 lg:py-32 px-5 py-10 gap-5 lg:gap-0 lg:space-y-20 relative no-scrollbar flex flex-col justify-center items-center">
      <TextWithTitleAndDescription
        title={"pricing plans"}
        description={"Affordable pricing for all"}
      />
      <Flex className="lg:w-[1300px] w-[100%] lg:gap-8 gap-5 flex-col lg:flex-row justify-center">
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
    </Flex>
  );
}
