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
      <Flex
        vertical
        align="center"
        className="relative w-screen lg:h-[1093px] py-2">
        <Image
          alt=""
          fill
          src={"/images/hero2-bg.jpg"}
          className="object-cover"
        />
        <Flex
          vertical
          justify="center"
          className="absolute w-screen h-[100%] bg-black/20 top-0 left-0 lg:px-20 px-5">
          <p className="lg:text-2xl">
            We provide the most advance digital solution
          </p>
          <br />
          <br className="hidden lg:block" />
          <div className="border-l-8 border-l-[#f54] lg:pl-10 pl-2 lg:text-[70px] text-lg lg:w-[600px] w-[100%] lg:leading-[85px] font-bold">
            Leading Software Development Studio & Agency
          </div>
          <br />
          <br className="hidden lg:block" />
          <div className="flex items-center lg:gap-6 gap-2">
            <Link href="">
              <div className="bg-white rounded-full lg:h-[80px] lg:w-[80px] h-[40px] w-[40px]" />
            </Link>
            <p className="lg:text-2xl font-medium">Watch Video</p>
          </div>
        </Flex>
        <Flex className="relative -bottom-[910px] left-0 w-screen h-[349px]">
          <Image alt="" fill src={"shape.svg"} className="object-cover" />
        </Flex>
      </Flex>
      <Flex
        className="w-screen lg:py-32 lg:px-20 px-5 py-5 relative"
        justify="center"
        align="center"
        gap={120}>
        <Flex className="lg:w-[500px] w-[100%] flex-col lg:gap-12 gap-5">
          <Flex vertical className="w-[100%]">
            <p className="text-[#f54]  font-normal lg:text-lg">WHO WE ARE</p>
            <br />
            <p className="text-black  font-medium lg:text-[50px] text-2xl lg:leading-[60px]">
              We run all kinds of software services that vow your success
            </p>
            <br />
            <p className="text-black  font-thin lg:text-lg lg:leading-[30px]">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs.
            </p>
          </Flex>
          <Flex gap={20} vertical className="w-[100%]">
            <Flex
              justify="center"
              align="center"
              className="rounded-lg bg-[#fff6f5] lg:p-6 p-3 flex-1 w-[100%]"
              gap={30}>
              <div className="relative"></div>
              <p className="text-black lg:text-lg  lg:leading-[35px]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote.
              </p>
            </Flex>
            <Flex gap={20} className="w-[100%]">
              <div className="flex flex-1 flex-col gap-3">
                <div className="text-black font-medium lg:text-lg text-base">
                  Expert Team
                </div>
                <p className="text-black font-normal lg:text-base text-sm lg:w-[250px] w-[100%]">
                  Accelerate innovation with world-class tech teams
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-2 ">
                <div className="text-black font-medium lg:text-lg text-base">
                  Custom Code
                </div>
                <p className="text-black font-normal lg:text-base text-sm lg:w-[250px] w-[100%]">
                  Accelerate innovation with world-class tech teams
                </p>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <div className="hidden lg:flex relative w-[515px] h-[636px] z-10 rounded-3xl">
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
        </div>
      </Flex>
      <Flex
        vertical
        className="w-screen lg:py-32 py-10 lg:px-20 px-5 relative lg:gap-[120px] gap-5"
        justify="center"
        align="center">
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
          <Flex
            className="lg:w-[1300px] w-[100%] lg:flex-row flex-col lg:gap-8 gap-3"
            justify="space-between">
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
            className="lg:py-10 lg:px-20 rounded-2xl w-[100%]"
            justify="center"
            align="center">
            <div className="text-center text-black lg:text-lg font-thin">
              Learn more about
              <Link
                className="text-center text-[#f54] lg:text-lg font-medium"
                href={"/service"}>
                {"   More Services "}
              </Link>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        vertical
        className="w-screen lg:py-32 py-10 lg:px-20 px-5 relative"
        justify="center"
        align="center"
        gap={20}>
        <Flex
          justify="space-between"
          className="lg:w-[1300px] flex-col lg:flex-row w-[100%] lg:pb-20 border-b lg:gap-[70px] gap-7">
          <Flex vertical className="flex-1 lg:gap-12 gap-5">
            <Space className="w-full">
              <p className="text-black lg:text-5xl text-3xl font-medium">
                We have an experienced team of production and inspection
              </p>
            </Space>
            <Flex className="w-[100%] lg:gap-12 gap-5">
              <p className="text-black lg:text-[18px] font-light leading-loose w-4/4">
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
          <Flex vertical className="flex-1 gap-3">
            <Flex gap={10} align="flex-end">
              <div className="text-[#f54] font-bold lg:text-[160px] text-7xl lg:leading-[120px]">
                25
              </div>
              <div className="text-[#000] lg:text-xl text-sm w-[130px] lg:leading-[24px]">
                Years of experience on IT Services
              </div>
            </Flex>
            <br />
            <br className="hidden lg:block" />
            {details.map((item) => (
              <Space key={item.name} direction="vertical" className="mb-5">
                <p className="text-black lg:text-lg leading-[10px] font-medium">
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
