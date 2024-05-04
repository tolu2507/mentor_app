"use client";

import ExpertHeader from "@/components/expertheader";
import { Button, Flex, Input, Space, Checkbox, notification } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import type { CheckboxProps } from "antd";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";
import { BASEURL } from "@/constant/baseurl";

export default function AuthComponent() {
  const router = useRouter();
  const url = `${BASEURL}/api/auth`;
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [newpassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Confirmation mail sent",
      description:
        "A confirmation mail has been sent to you, please open your gmail and activate your mail before continuining.",
      duration: 0,
    });
  };

  async function handleInsertSignup() {
    setLoading(true);
    try {
      if (details.password === newpassword) {
        let response = await fetch(`${url}/signup`, {
          method: "POST",
          body: JSON.stringify(details),
        });
        if (response.ok) {
          let data = await response.json();
          console.log("this is the data returned ", data);
          if (data.status === 201) {
            setDetails({ name: "", password: "", email: "" });
            openNotification();
            setConfirm(true);
            router.push(`#`);
          }
        }
      }
    } catch (error) {
      console.log("this is the error that is making the code to faul ", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleInsertSignin() {
    console.log("starting the login");
    setLoading(true);
    try {
      if (confirm) {
        return openNotification();
      } else {
        if (details.password) {
          let response = await fetch(`${url}/login`, {
            method: "POST",
            body: JSON.stringify(details),
          });
          console.log(response.json());
          if (response.ok) {
            setDetails({ name: "", password: "", email: "" });
            router.push(`/`);
          }
        }
      }
    } catch (error) {
      console.log("this is the error that is making the code to faul ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {contextHolder}
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
                    value={details.email}
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Password"
                    variant="filled"
                    className=" h-14 rounded-none"
                    value={details.password}
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                  />
                  <Checkbox onChange={onChange} className="text-xl text-black">
                    Remember me
                  </Checkbox>
                </Space>
                <Space direction="vertical" className="space-y-3 w-[100%]">
                  <Button
                    className="w-[100%] border-none hover:bg-black"
                    onClick={handleInsertSignin}
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
                    value={details.email}
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Username or email"
                    variant="filled"
                    className="h-14 rounded-none"
                    value={details.email}
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Password"
                    variant="filled"
                    className=" h-14 rounded-none"
                    value={details.password}
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Confirm Password"
                    variant="filled"
                    className=" h-14 rounded-none"
                    value={newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Space>
                <Space direction="vertical" className="w-[100%]">
                  <Button
                    onClick={handleInsertSignup}
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
      {loading && <Loading />}
    </>
  );
}
