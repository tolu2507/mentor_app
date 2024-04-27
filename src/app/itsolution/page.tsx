"use client";

import { Button, Flex, Space, Progress } from "antd";
import React, { useState } from "react";
import TestimonialsContent from "@/components/testimonials";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Pricing from "@/components/pricing";
import MakeRequest from "@/components/makerequest";
import FlexBottomView from "@/components/flexbottomview";

export default function CyberPage() {
  const [show, setShow] = useState({ status: false, item: "" });
  const router = useRouter();

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
  ];

  const details = [
    { name: "IT Manangement", price: 80 },
    { name: "Data Security", price: 95 },
  ];
  const over = [
    { path: "/images/feat-1.png", name: "Highly professional experts" },
    { path: "/images/feat-2.png", name: "Infrustructure Technology" },
    { path: "/images/feat-3.png", name: "Quality Control System" },
  ];
  const overs = [
    "Information managemnet sytem",
    "Multifunctional Technology",
    "Information Database Security",
  ];

  return (
    <Space direction="vertical" className="pt-14 bg-white w-screen">
      <Flex
        justify="center"
        align="center"
        className="w-screen h-[1126px] relative">
        <Image
          alt=""
          fill
          src={"/images/hero-bg4.jpg"}
          className="rounded-b-[160px]"
        />
        <div className=" absolute bg-black/20 h-[100%] w-[100%] rounded-b-[160px] flex flex-row justify-between pt-40">
          <div className="relative h-[736px] w-[319px]">
            <Image src="/images/shape/hero4-shape1.png" fill alt="" />
          </div>
          <div className="relative h-[736px] w-[359px]">
            <Image src="/images/shape/hero4-shape2.png" fill alt="" />
          </div>
        </div>
        <div className="pt-40 w-[100%] h-[100%] z-10 flex flex-col gap-5 items-center">
          <p className=" text-xl font-medium text-white">
            WE PROVIDE 100% & TRUSTEBALE
          </p>
          <p className="text-[150px] font-medium text-white">IT Solution</p>
          <p className=" text-xl font-medium text-white text-center w-[670px]">
            We provide the most responsive and functional IT design for
            companies and businesses worldwide.
          </p>
          <Space direction="vertical" className="w-[250px] mt-20">
            <Button
              onClick={() => router.push("/about")}
              className="w-[100%] border-none"
              style={{
                height: 60,
                backgroundColor: " #3b82f6",
                fontSize: 20,
                color: "#fff",
                fontWeight: "700",
                border: 0,
              }}>
              Read More
            </Button>
          </Space>
        </div>
        <FlexBottomView absolute={true}>
          {over.map((item) => (
            <Flex
              key={item.name}
              gap={20}
              className="flex-1 relative rounded-lg p-9"
              align="center">
              <Image
                src="/images/bg/feat-bg.jpg"
                alt=""
                fill
                className="rounded-lg"
              />
              <div className="relative w-[100px] h-[100px] z-10">
                <Image alt="" src={item.path} fill />
              </div>
              <Link
                href={"#"}
                className="text-black text-2xl font-medium w-[200px] z-10">
                {item.name}
              </Link>
            </Flex>
          ))}
        </FlexBottomView>
      </Flex>
      <Flex vertical align="center" className="w-screen bg-white py-28">
        <Flex align="center" justify="center" className="w-screen mb-40">
          <Flex gap={70} align="center">
            <Flex
              align="center"
              justify="center"
              className="relative w-[412px] h-[486px]">
              <Image alt="" src="/images/shape/experince-shape.png" fill />
              <Flex
                align="center"
                justify="center"
                vertical
                className="bg-white z-10 rounded-full w-[360px] h-[360px]">
                <div className=" z-10 text-[#17e] text-center font-medium text-[180px] leading-[150px]">
                  25
                </div>
                <p className="text-black font-normal text-xl text-center">
                  Years of Experience
                </p>
              </Flex>
            </Flex>
            <div className="w-[450px]">
              <p className="text-black font-medium text-5xl">
                Highly Tailored IT Design, Management & Support Services.
              </p>
              <br />
              <br />
              <p className="text-black font-normal text-lg">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
            </div>
          </Flex>
        </Flex>
        <FlexBottomView absolute={false}>
          {overs.map((item) => (
            <Flex
              key={item}
              gap={20}
              className="flex-1 relative rounded-lg p-9 h-[274px]"
              align="center">
              <Image
                src="/images/ser-img1.jpg"
                alt=""
                fill
                className="rounded-lg"
              />
              <div className="bg-white w-[90%] py-5 pe-16 absolute left-0 bottom-0 z-10">
                <div className="border-s-4 border-[#1ef]  ps-5 ">
                  <Link href={"#"} className="text-black text-2xl font-medium ">
                    {item}
                  </Link>
                </div>
              </div>
            </Flex>
          ))}
        </FlexBottomView>
        <div className="text-black text-lg mt-16">
          Learn more about{"  "}
          <Link href={"/service"} className="text-[#17e] font-medium">
            More Services
          </Link>
        </div>
      </Flex>

      <Flex
        className="relative w-screen pt-32 pb-[590px]"
        justify="center"
        align="center">
        <Image src="/images/bg/choose-us-bg2.jpg" alt="" fill />
        <Flex gap={30}>
          <Flex vertical gap={50} className="z-10 w-[550px]">
            <div className="flex flex-col">
              <p className="text-[#17e] text-lg mb-2">REASON TO CHOOSE US</p>
              <p className="text-black text-[50px] font-medium ">
                We provide truly prominent IT solutions.
              </p>
              <br />
              <p className="font-normal text-black text-lg">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col pe-10 border-r">
                <Image
                  src={"/images/sign.png"}
                  alt=""
                  width={155}
                  height={32}
                  className="mb-5"
                />
                <p className="text-black font-medium text-lg">
                  Alen Moreno sin
                </p>
                <p className="text-black font-normal text-sm">CEO, Techmax</p>
              </div>
              <div className="flex flex-col ps-10 flex-1">
                {details.map((item) => (
                  <Space key={item.name} direction="vertical">
                    <p className="text-black text-lg font-medium">
                      {item.name}
                    </p>
                    <Progress
                      percent={item.price}
                      showInfo={false}
                      strokeColor={"#17e"}
                    />
                  </Space>
                ))}
              </div>
            </div>
          </Flex>

          <Flex gap={30} vertical className="z-10 w-[550px]">
            {[
              "How Long It Takes Finished projects ? ",
              "Support & Policy Rules",
              "Can We Get Refund",
            ].map((item) => (
              <div key={item} className="flex-1 ">
                <div
                  onClick={() => setShow({ status: !show.status, item: item })}
                  className="p-7 cursor-pointer font-medium text-2xl text-black bg-white rounded-t-2xl ">
                  {item}
                  {/* <div className=" ml-16 inline-flex bg-gradient-to-b from-[#17e] to-purple-800 rounded-full w-7 h-7" /> */}
                </div>
                <div
                  className={`text-black rounded-b-2xl text-sm font-thin p-7 border-t bg-white ${
                    show.status && show.item === item ? "block" : "hidden"
                  }`}>
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                  for all your software.
                </div>
              </div>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <div className="relative flex flex-col items-center justify-center pt-40">
        <div className="absolute z-10 -top-[450px]">
          <Flex
            justify="center"
            align="center"
            vertical
            gap={50}
            className="relative w-[1291px] h-[597px] rounded-lg">
            <Image
              alt=""
              fill
              src="/images/bg/video-bg.jpg"
              className="rounded-lg"
            />
            <p className="z-10 font-medium text-[60px] w-[550px] text-center">
              We focus on your tech success
            </p>
            <Link
              href={"https://www.youtube.com/watch?v=_X0eYtY8T_U&t=3s"}
              className="w-20 h-20 rounded-full bg-[#17e] z-10"
            />
          </Flex>
        </div>
        <Pricing show={false} />
      </div>
      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
        show={true}
        dark={true}
      />
      <MakeRequest />
    </Space>
  );
}
