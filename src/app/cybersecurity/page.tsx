"use client";

import { Button, Flex, Space } from "antd";
import React from "react";
import MakeEnquiry from "@/components/makeconsult";
import TestimonialsContent from "@/components/testimonials";
import TextWithTitleAndDescription from "@/components/textwithtitleanddescription";
import Image from "next/image";
import Sponsors from "@/components/sponsors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AIComprehenshion from "@/components/comprehensiveai";
import AiProtection from "@/components/aiprotection";

export default function CyberPage() {
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
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Sunday M.",
    },
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Jude C.",
    },
    {
      text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee .",
      name: "Amina T.",
    },
  ];

  const detail = [
    {
      name: "/images/ser-icon17.png",
      title: "Network Security & Protection",
    },
    {
      name: "/images/ser-icon18.png",
      title: "Browser Safety & Farewell",
    },
    {
      name: "/images/ser-icon19.png",
      title: "Network Security & Protection",
    },
    {
      name: "/images/ser-icon20.png",
      title: "Browser Safety & Farewell",
    },
  ];
  const completed = [
    { amount: "354+", text: "Completed projects" },
    { amount: "119+", text: "Robotics Automation" },
    { amount: "99%", text: "Web Site Ananlysis" },
    { amount: "321+", text: "Client Support Done" },
  ];

  return (
    <Flex className="pt-14 bg-white w-screen flex-col">
      <Flex className="bg-white w-screen lg:p-20 p-5 relative flex-col gap-5 lg:gap-0">
        <Image fill src="/images/bg/hero-bg6.jpg" alt="" className="" />
        <Flex className="flex-1 z-10 gap-5 flex-col lg:flex-row">
          <Flex className="flex-1 lg:order-1 order-2">
            <div className="relative lg:h-[828px] h-[420px] lg:w-[631px] w-[100%] bg-black">
              <Image
                fill
                src="/images/hero-img2.png"
                alt=""
                className="object-cover"
              />
              <div className="absolute -right-5 top-10 -z-10">
                <div className="relative lg:h-[555px] lg:w-[555px] w-[350px] h-[350px] animate-spin-slow">
                  <Image
                    fill
                    src="/images/shape/hero-shape1.png"
                    alt=""
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Flex>
          <Flex
            vertical
            className="flex-1 lg:ps-5 lg:gap-12 gap-5 lg:order-2 order-1">
            <p className="text-white lg:text-lg text-sm font-medium">
              YOUR NETWORK BECOMES EASIER TO OPERATE BY AI
            </p>
            <div className="font-medium lg:text-[72px] text-3xl text-white lg:leading-[100px] w-[100%]">
              Leading
              <span className="text-[#1ef]"> cyber security</span> & complete IT
              Solutions
            </div>
            <p className="text-white lg:text-2xl text-lg">
              We provide the most responsive and functional IT
            </p>
            <Space direction="vertical" className="lg:w-[40%] w-[60%]">
              <Button
                onClick={() => router.push("/about")}
                className="w-[100%] border-none"
                style={{
                  height: 60,
                  backgroundColor: " #1ef",
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "700",
                  border: 0,
                }}>
                Read More
              </Button>
            </Space>
          </Flex>
        </Flex>
        <Flex
          gap={20}
          className="lg:w-screen z-10 lg:absolute lg:px-20 lg:-bottom-44 lg:left-0 flex-col lg:flex-row">
          <Flex
            gap={20}
            align="center"
            className="flex-1 bg-gradient-to-r from-[#74b] via-[#47c] to-[#1ef] rounded-xl lg:p-16 p-4">
            <div className="relative hidden lg:block  h-[179px] w-[141px]">
              <Image
                fill
                src="/images/feat-4.png"
                alt=""
                className=""
                quality={100}
              />
            </div>

            <div className="relative lg:hidden block">
              <Image
                width={220}
                height={100}
                src="/images/feat-4.png"
                alt=""
                className="object-cover"
                quality={100}
              />
            </div>

            <div className="lg:gap-5 gap-2 flex flex-col justify-start">
              <p className="text-white lg:text-3xl text-lg leading-2 font-bold">
                Cyber Security Solutions
              </p>
              <p className="text-white lg:text-base text-sm leading-2 font-normal lg:w-[320px]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible
              </p>
              <Link href="#" className="font-medium text-[#1ef] lg:text-lg">
                Learn More
              </Link>
            </div>
          </Flex>
          <Flex
            gap={20}
            align="center"
            className="flex-1 bg-gradient-to-r from-[#74b] via-[#47c] to-[#1ef] rounded-xl lg:p-16 p-4">
            <div className="relative hidden lg:block  h-[179px] w-[141px]">
              <Image
                fill
                src="/images/feat-4.png"
                alt=""
                className=""
                quality={100}
              />
            </div>

            <div className="relative lg:hidden block">
              <Image
                width={220}
                height={100}
                src="/images/feat-4.png"
                alt=""
                className="object-cover"
                quality={100}
              />
            </div>

            <div className="lg:gap-5 gap-2 flex flex-col justify-start">
              <p className="text-white lg:text-3xl text-lg leading-2 font-bold">
                Cloud Computing
              </p>
              <p className="text-white lg:text-base text-sm leading-2 font-normal lg:w-[320px]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible
              </p>
              <Link href="#" className="font-medium text-[#1ef] lg:text-lg">
                Learn More
              </Link>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <AIComprehenshion />
      <AiProtection detail={detail} />
      <Flex className="lg:px-20 lg:py-28 py-8 px-5 lg:gap-10 gap-4 flex flex-col items-center justify-center w-screen">
        <TextWithTitleAndDescription
          title={"OPTIMAL SECURITY SOLUTIONS"}
          description={
            "Highly Tailored IT Design, Management & Support Services."
          }
          width={true}
        />
        <Flex
          className="bg-white lg:w-[1300px] w-[100%] relative"
          justify="center"
          align="center">
          <Space className="lg:space-x-16 flex space-y-5 lg:space-y-0 w-[100%] flex-col lg:flex-row">
            <div className="lg:w-[547px] w-[350px] h-[370px] lg:h-[597px] relative flex flex-row justify-center items-center">
              <Image
                src={"/images/shape/experince-shape2.png"}
                alt=""
                fill
                className=" animate-spin-slow"
              />
              <div className="lg:p-10 rounded-full lg:w-[389px] w-[250px] h-[250px] lg:h-[389px] z-10 relative flex flex-col justify-center items-center overflow-hidden">
                <Image src={"/images/shape/exp-bg2.jpg"} alt="" fill />
                <p className="text-white z-10 lg:text-[180px] text-[100px] leading-none font-medium">
                  25
                </p>
                <p className="text-white z-10 lg:text-lg">
                  YEARS EXPERIENCE WORKING
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <p className="lg:text-[18px] lg:leading-[28px] text-black lg:w-[90%]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
              <div className="flex flex-col gap-3">
                <p className="lg:text-[18px] lg:leading-[28px] text-black w-[90%]">
                  We always focus on technical excellence
                </p>
                <p className="lg:text-[18px] lg:leading-[28px] text-black w-[90%]">
                  Wherever you’re going, we bring ideas and excitement
                </p>
                <p className="lg:text-[18px] lg:leading-[28px] text-black w-[90%]">
                  We’re consultants, guides, and partners for brands
                </p>
              </div>
            </div>
          </Space>
        </Flex>
      </Flex>
      <MakeEnquiry full={true} image="/images/bg/cta-bg3.jpg" />
      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
        show={true}
      />
      <div className="hidden bg-white w-screen px-32 pb-32 relative no-scrollbar lg:flex flex-row justify-center">
        <Sponsors />
      </div>
    </Flex>
  );
}
