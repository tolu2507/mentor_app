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
      <ExpertHeader path={""} topic={"Login & Register"} />
      <Space className="bg-white w-[100%] p-32 relative no-scrollbar flex flex-row justify-center items-center">
        <Space direction="vertical" className="w-[1300px]">
          <Flex gap={50} className="w-[100%]">
            <div className="flex-1 border-2 rounded-3xl p-14 flex flex-row items-center justify-center">
              <Space direction="vertical" className="w-[100%] space-y-5">
                <Space>
                  <h1 className="text-black font-bold text-4xl">Login</h1>
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
              </Space>
            </div>
            <div className="flex-1 border-2 rounded-3xl p-14 flex flex-row items-center justify-center">
              <Space direction="vertical" className="w-[100%] space-y-5">
                <Space>
                  <h1 className="text-black font-bold text-4xl">Register</h1>
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
                    className="w-[100%] border-none"
                    style={{
                      height: 60,
                      backgroundColor: " #3b82f6",
                      fontSize: 20,
                      color: "#fff",
                      fontWeight: "700",
                    }}>
                    Login
                  </Button>
                </Space>
              </Space>
            </div>
          </Flex>
        </Space>
      </Space>
    </>
  );
}
