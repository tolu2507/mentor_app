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
    <Space direction="vertical" className="lg:pt-14 bg-white w-screen">
      <Flex
        justify="center"
        align="center"
        className="w-screen lg:h-[1126px] flex-col lg:flex-row gap-5 py-10 px-5 relative">
        <Image
          alt=""
          fill
          src={"/images/hero-bg4.jpg"}
          className="lg:rounded-b-[160px] rounded-b-[60px]"
        />
        <div className=" hidden absolute bg-black/20 h-[100%] w-[100%] lg:rounded-b-[160px] lg:flex flex-row justify-between lg:pt-40">
          <div className="relative lg:h-[736px] lg:w-[319px]">
            <Image src="/images/shape/hero4-shape1.png" fill alt="" />
          </div>
          <div className="relative lg:h-[736px] lg:w-[359px]">
            <Image src="/images/shape/hero4-shape2.png" fill alt="" />
          </div>
        </div>
        <div className="lg:pt-40 pt-[70px]  w-[100%] h-[100%] z-10 flex flex-col gap-5 lg:gap-20 items-center">
          <p className=" lg:text-xl font-medium text-white">
            WE PROVIDE 100% & TRUSTEBALE
          </p>
          <p className="lg:text-[150px] text-2xl font-medium text-white">
            IT Solution
          </p>
          <p className=" lg:text-xl font-medium text-white text-center lg:w-[670px]">
            We provide the most responsive and functional IT design for
            companies and businesses worldwide.
          </p>
          <Space direction="vertical" className="w-[250px] lg:mt-20">
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
              className="flex-1 relative rounded-lg lg:p-9 p-3"
              align="center">
              <Image
                src="/images/bg/feat-bg.jpg"
                alt=""
                fill
                className="rounded-lg"
              />
              <div className="relative lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] z-10">
                <Image alt="" src={item.path} fill />
              </div>
              <Link
                href={"#"}
                className="text-black lg:text-2xl font-medium lg:w-[200px] z-10">
                {item.name}
              </Link>
            </Flex>
          ))}
        </FlexBottomView>
      </Flex>

      <Flex
        vertical
        align="center"
        className="w-screen bg-white lg:py-28 gap-5 px-5 py-5">
        <Flex
          align="center"
          justify="center"
          className="w-screen px-5 lg:mb-40">
          <Flex
            align="center"
            justify="center"
            className="w-[100%] gap-5 lg:gap-[70px] flex-col lg:flex-row">
            <Flex
              align="center"
              justify="center"
              className="relative lg:w-[412px] lg:h-[486px] w-[320px] h-[320px]">
              <Image alt="" src="/images/shape/experince-shape.png" fill />
              <Flex
                align="center"
                justify="center"
                vertical
                className="bg-white z-10 rounded-full lg:w-[360px] lg:h-[360px] w-[250px] h-[250px]">
                <div className=" z-10 text-[#17e] text-center font-medium lg:text-[180px] lg:leading-[150px] text-[90px]">
                  25
                </div>
                <p className="text-black font-normal lg:text-xl text-center">
                  Years of Experience
                </p>
              </Flex>
            </Flex>
            <div className="lg:w-[450px] w-[100%]">
              <p className="text-black font-medium lg:text-5xl text-2xl text-center lg:text-left">
                Highly Tailored IT Design, Management & Support Services.
              </p>
              <br />
              <br className="hidden lg:block" />
              <p className="text-black font-normal lg:text-lg text-sm">
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
              className="w-[100%] relative rounded-lg lg:p-9 lg:h-[274px] h-[170px]"
              align="center">
              <Image
                src="/images/ser-img1.jpg"
                alt=""
                fill
                className="rounded-lg object-cover"
              />
              <div className="bg-white lg:w-[90%] lg:py-5 pe-16 absolute left-0 bottom-0 z-10">
                <div className="border-s-4 border-[#1ef] w-[70%] lg:w-[100%]  ps-5 ">
                  <Link
                    href={"#"}
                    className="text-black lg:text-2xl text-lg font-medium ">
                    {item}
                  </Link>
                </div>
              </div>
            </Flex>
          ))}
        </FlexBottomView>
        <div className="text-black lg:text-lg text-sm lg:mt-16">
          Learn more about{"  "}
          <Link href={"/service"} className="text-[#17e] font-medium">
            More Services
          </Link>
        </div>
      </Flex>

      <Flex
        className="relative w-screen lg:pt-32 lg:pb-[590px] py-10 lg:py-0 px-5"
        justify="center"
        align="center">
        <Image src="/images/bg/choose-us-bg2.jpg" alt="" fill />
        <Flex className="lg:gap-8 gap-5 flex-col lg:flex-row">
          <Flex vertical className="z-10 lg:w-[550px] w-[100%] lg:gap-12 gap-5">
            <div className="flex flex-col">
              <p className="text-[#17e] text-lg mb-2">REASON TO CHOOSE US</p>
              <p className="text-black lg:text-[50px] text-[36px] font-medium ">
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

          <Flex vertical className="z-10 lg:w-[550px] w-[100%] gap-5 lg:gap-8">
            {[
              "How Long It Takes Finished projects ? ",
              "Support & Policy Rules",
              "Can We Get Refund",
            ].map((item) => (
              <div key={item} className="flex-1 ">
                <div
                  onClick={() => setShow({ status: !show.status, item: item })}
                  className="lg:p-7 p-4 cursor-pointer font-medium lg:text-2xl text-black bg-white rounded-t-2xl ">
                  {item}
                  {/* <div className=" ml-16 inline-flex bg-gradient-to-b from-[#17e] to-purple-800 rounded-full w-7 h-7" /> */}
                </div>
                <div
                  className={`text-black rounded-b-2xl text-sm font-thin lg:p-7 p-4 border-t bg-white ${
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

      <div className="relative flex flex-col items-center justify-center lg:pt-40 py-10 lg:py-0 w-screen">
        <div className="lg:absolute z-10 lg:-top-[450px] px-5">
          <Flex
            justify="center"
            align="center"
            vertical
            className="relative lg:w-[1291px] w-[100%] h-[597px] rounded-lg lg:gap-12">
            <Image
              alt=""
              fill
              src="/images/bg/video-bg.jpg"
              className="rounded-lg object-cover"
            />
            <p className="z-10 font-medium lg:text-[60px] text-3xl lg:w-[550px] w-[100%] text-center">
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
