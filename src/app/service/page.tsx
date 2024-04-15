"use client";

import ExpertHeader from "@/components/expertheader";
import { Button, Flex, Input, Space, Checkbox } from "antd";
import React from "react";
import Link from "next/link";
import type { CheckboxProps } from "antd";

export default function AuthPage() {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <ExpertHeader path={""} topic={"Our Services"} />
      <Space className="bg-white w-[100%] p-32 relative no-scrollbar flex flex-row justify-center items-center">
        <Space direction="vertical" className="w-[1300px]">
       
        </Space>
      </Space>
    </>
  );
}
