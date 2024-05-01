"use client";

import ExpertHeader from "@/components/expertheader";
import { Button, Flex, Input, Space, Checkbox } from "antd";
import React from "react";
import Link from "next/link";
import type { CheckboxProps } from "antd";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <ExpertHeader path={""} topic={"Login & Register"} />
      <Flex className="bg-white w-screen lg:p-32 p-5 relative no-scrollbar lg:flex lg:flex-row lg:justify-center lg:items-center">
        <Flex className="lg:w-[1300px] w-[100%] flex-col">
          <Flex className="w-[100%] flex-col lg:flex-row gap-6 lg:gap-[50px]">
            <div className="flex-1 border-2 rounded-3xl lg:p-14 p-3 flex flex-row items-center justify-center">
              <Flex vertical className="w-[100%] space-y-5">
                <Space>
                  <h1 className="text-black font-bold lg:text-4xl text-xl">
                    Login
                  </h1>
                </Space>
                <Space direction="vertical" className="space-y-3 w-[100%]">
                  <Input
                    placeholder="Username or Email"
                    variant="filled"
                    className="h-14 rounded-none"
                  />
                  <Input
                    placeholder="Password"
                    variant="filled"
                    className=" h-14 rounded-none"
                  />
                  <Checkbox onChange={onChange} className="text-xl text-black">
                    Remember me
                  </Checkbox>
                </Space>
                <Space direction="vertical" className="space-y-3 w-[100%]">
                  <Button
                    className="w-[100%] border-none"
                    onClick={() => router.push("/")}
                    style={{
                      height: 60,
                      backgroundColor: " #3b82f6",
                      fontSize: 20,
                      color: "#fff",
                      fontWeight: "700",
                    }}>
                    Login
                  </Button>
                  <Link
                    href={"#"}
                    className=" text-base text-black hover:text-blue-400 font-normal">
                    {"Lost your password?"}
                  </Link>
                </Space>
              </Flex>
            </div>
            <div className="flex-1 w-[100%] border-2 rounded-3xl lg:p-14 p-3 flex flex-row items-center justify-center">
              <Space direction="vertical" className="w-[100%] space-y-5">
                <Space>
                  <h1 className="text-black font-bold lg:text-4xl text-xl">
                    Register
                  </h1>
                </Space>
                <Space direction="vertical" className="space-y-3 w-[100%]">
                  <Input
                    placeholder="Email"
                    variant="filled"
                    className="h-14 rounded-none"
                  />
                  <Input
                    placeholder="Username or email"
                    variant="filled"
                    className="h-14 rounded-none"
                  />
                  <Input
                    placeholder="Password"
                    variant="filled"
                    className=" h-14 rounded-none"
                  />
                  <Input
                    placeholder="Confirm Password"
                    variant="filled"
                    className=" h-14 rounded-none"
                  />
                </Space>
                <Space direction="vertical" className="w-[100%]">
                  <Button
                    onClick={() => router.push("/")}
                    className="w-[100%] border-none"
                    style={{
                      height: 60,
                      backgroundColor: " #3b82f6",
                      fontSize: 20,
                      color: "#fff",
                      fontWeight: "700",
                    }}>
                    Register
                  </Button>
                </Space>
              </Space>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
