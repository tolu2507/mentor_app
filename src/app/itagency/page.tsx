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
import SoftwareTestimonials from "@/components/softwaretestimony";
import Sponsors from "@/components/sponsors";
import TextWithTitleAndDescription from "@/components/textwithtitleanddescription";
import ServiceCard from "@/components/servicecard";
import { itemfour, itemone, itemthree } from "@/constant/service";

export default function SoftwarePage() {
  const [show, setShow] = useState({ status: false, item: "" });
  const router = useRouter();
  const completed = [
    { amount: "1790", text: "Happy Client", images: "/images/counter-1.png" },
    {
      amount: "491",
      text: "Finished project",
      images: "/images/counter-2.png",
    },
    { amount: "245", text: "Skilled Expert", images: "/images/counter-3.png" },
    { amount: "1090", text: "Media Post", images: "/images/counter-1.png" },
  ];
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
    { name: "Software Development", price: 80 },
    { name: "Creative Thinking", price: 95 },
    { name: "Information Technology", price: 80 },
  ];

  return (
    <Space direction="vertical" className=" bg-white w-screen">
      <Flex vertical align="center" className="relative w-screen h-[1093px]">
        <Image
          alt=""
          fill
          src={"/images/hero2-bg.jpg"}
          className="object-cover"
        />
        <Flex
          vertical
          justify="center"
          className="absolute w-screen h-[100%] bg-black/20 top-0 left-0 px-20 py-2">
          <p className="text-2xl">
            We provide the most advance digital solution
          </p>
          <br />
          <br />
          <div className="border-l-8 border-l-[#f54] pl-10 text-[70px] w-[600px] leading-[85px] font-bold">
            Leading Software Development Studio & Agency
          </div>
          <br />
          <br />
          <div className="flex items-center gap-6">
            <Link href="">
              <div className="bg-white rounded-full h-[80px] w-[80px]" />
            </Link>
            <p className="text-2xl font-medium">Watch Video</p>
          </div>
        </Flex>
        <Flex className="relative -bottom-[910px] left-0 w-screen h-[349px]">
          <Image alt="" fill src={"shape.svg"} className="object-cover" />
        </Flex>
      </Flex>
      <Flex
        className="w-screen py-32 px-20 relative"
        justify="center"
        align="center"
        gap={120}>
        <Flex gap={50} vertical className="w-[500px]">
          <Flex vertical className="w-[100%]">
            <p className="text-[#f54]  font-normal text-lg">WHO WE ARE</p>
            <br />
            <p className="text-black  font-medium text-[50px] leading-[60px]">
              We run all kinds of software services that vow your success
            </p>
            <br />
            <p className="text-black  font-thin text-lg leading-[30px]">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs.
            </p>
          </Flex>
          <Flex gap={20} vertical className="w-[100%]">
            <Flex
              justify="center"
              align="center"
              className="rounded-lg bg-[#fff6f5] p-6"
              gap={30}>
              <div className="relative"></div>
              <p className="text-black text-lg  leading-[35px]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote.
              </p>
            </Flex>
            <Flex gap={20}>
              <div className="flex flex-col gap-3">
                <div className="text-black font-medium text-lg">
                  Expert Team
                </div>
                <p className="text-black font-normal text-base w-[250px]">
                  Accelerate innovation with world-class tech teams
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="text-black font-medium text-lg">
                  Custom Code
                </div>
                <p className="text-black font-normal text-base w-[250px]">
                  Accelerate innovation with world-class tech teams
                </p>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="relative w-[515px] h-[636px] z-10 rounded-3xl">
          <div className="absolute w-[100%] h-[100%] top-0 left-0">
            <Flex className="relative w-[515px] h-[636px] z-10 rounded-3xl">
              <Image
                alt=""
                fill
                src={"/images/about-big.jpg"}
                className="rounded-3xl object-cover"
              />
            </Flex>
          </div>
          <div className="absolute -bottom-10 z-10  -left-20">
            <Flex className="relative w-[440px] h-[307px] rounded-3xl">
              <Image
                alt=""
                fill
                src={"/images/about-sm.jpg"}
                className="rounded-3xl object-cover"
              />
            </Flex>
          </div>
          <div className="absolute -bottom-[12px] z-[5px] -right-10 w-[515px] h-[500px] bg-[#f54]" />
        </Flex>
      </Flex>
      <Flex
        vertical
        className="w-screen py-32 px-20 relative"
        justify="center"
        align="center"
        gap={120}>
        <Image
          alt=""
          fill
          src={"/images/bg/service-bg.jpg"}
          className=" object-cover"
        />
        <TextWithTitleAndDescription
          title="what we provide"
          description="We provide truly prominent digital solutions."
          dark={false}
          color="text-[#f54]"
        />
        <Flex
          vertical
          gap={50}
          justify="center"
          align="center"
          className="z-10">
          <Flex gap={30} className="w-[1300px]" justify="space-between">
            {itemfour.map(({ icon, title, desc, up }) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                description={desc}
                up={up}
              />
            ))}
          </Flex>
          <Flex
            className="py-10 px-20 rounded-2xl w-[100%]"
            justify="center"
            align="center">
            <div className="text-center text-black text-lg font-thin">
              Learn more about
              <Link
                className="text-center text-[#f54] text-lg font-medium"
                href={"/service"}>
                {"   More Services "}
              </Link>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        vertical
        className="w-screen py-32 px-20 relative"
        justify="center"
        align="center"
        gap={20}>
        <Flex
          gap={70}
          justify="space-between"
          className="w-[1300px] pb-20 border-b">
          <Flex gap={50} vertical className="flex-1">
            <Space className="w-full">
              <p className="text-black text-5xl font-medium">
                We have an experienced team of production and inspection
              </p>
            </Space>
            <Flex gap={50} className="w-[100%]">
              <p className="text-black text-[18px] font-light leading-loose w-4/4">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
            </Flex>
            <div className="flex flex-col">
              <Image
                src={"/images/sign-2.png"}
                alt=""
                width={155}
                height={32}
                className="mb-5"
              />
              <p className="text-black font-medium text-lg">Alen Moreno sin</p>
              <p className="text-black font-normal text-sm">CEO, Techmax</p>
            </div>
          </Flex>
          <Flex gap={10} vertical className="flex-1">
            <Flex gap={10} align="flex-end">
              <div className="text-[#f54] font-bold text-[160px] leading-[120px]">
                25
              </div>
              <div className="text-[#000] text-xl w-[130px] leading-[24px]">
                Years of experience on IT Services
              </div>
            </Flex>
            <br />
            <br />
            {details.map((item) => (
              <Space key={item.name} direction="vertical" className="mb-5">
                <p className="text-black text-lg leading-[10px] font-medium">
                  {item.name}
                </p>
                <Progress
                  percent={item.price}
                  showInfo={false}
                  strokeColor={"#f54"}
                />
              </Space>
            ))}
          </Flex>
        </Flex>
        <Sponsors />
      </Flex>
      <TestimonialsContent
        objects={objects}
        description={"20k+ satisfied clients worldwide"}
        dark={false}
        color="text-[#f54]"
      />
      <MakeRequest color={true} />
    </Space>
  );
}
