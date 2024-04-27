import ExpertHeader from "@/components/expertheader";
import Pricing from "@/components/pricing";
import React from "react";

export default function PricingPage() {
  return (
    <>
      <ExpertHeader path={""} topic={"Pricing table"} />
      <Pricing />
    </>
  );
}
