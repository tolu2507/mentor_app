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
import { itemone, itemthree } from "@/constant/service";

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

  return (
    <Space direction="vertical" className=" bg-white w-screen">
      <Flex
        gap={30}
        className="relative w-screen py-32 px-20"
        justify="center"
        align="center">
        <Image src="/images/bg/hero-bg1.png" alt="" fill />
        <Flex vertical gap={50} className="z-10 w-[500px]">
          <Flex
            align="center"
            gap={10}
            className="p-3 bg-white rounded-3xl w-[100%]">
            <div className="py-2 px-3 bg-[#17e] rounded-3xl flex flex-row justify-center items-center font-medium">
              HOT !
            </div>
            <div className="text-black font-medium text-lg text-left">
              {" "}
              We can managed all digital services
            </div>
          </Flex>
          <Flex vertical>
            <p className="text-black text-[65px] leading-[65px] font-bold">
              Your partner for digital solutions
            </p>
            <br />
            <br />
            <p className="text-black text-[24px] leading-[30px] font-normal">
              We provide the most responsive and functional IT design for
              companies and businesses worldwide.
            </p>
          </Flex>
          <Button
            className="w-[200px] border-none"
            style={{
              height: 60,
              backgroundColor: " #3b82f6",
              fontSize: 20,
              color: "#fff",
              fontWeight: "700",
            }}>
            Read more
          </Button>
        </Flex>

        <Flex className=" relative z-10 w-[638px] h-[907px]">
          <Image
            src={"/images/hero-img1.png"}
            alt=""
            fill
            className="object-cover"
          />
        </Flex>
      </Flex>
      <Flex
        vertical
        className="w-screen py-32 px-20"
        justify="center"
        align="center"
        gap={120}>
        <TextWithTitleAndDescription
          title="what we provide"
          description="We provide truly prominent digital solutions."
          dark={false}
        />
        <Flex vertical gap={50} justify="center" align="center">
          <Flex gap={30} className="w-[1300px]" justify="space-between">
            {itemthree.map(({ icon, title, desc, up }) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                description={desc}
                colored={true}
                up={up}
              />
            ))}
          </Flex>
          <Flex
            className="bg-[#e6f0fb] py-10 px-10 rounded-2xl w-[70%]"
            justify="center"
            align="center">
            <div className="text-center text-black text-lg font-medium">
              Stop wasting time and money on digital solution.{" "}
              <Link href={"#"}>Let’s talk with us</Link>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap={50}
        className="w-screen pb-32 pt-60 px-20 relative"
        justify="center"
        align="center">
        <Image src="/images/bg/about-bg.png" alt="" fill />
        <div className="w-[585px] h-[426px] relative z-10 rounded-lg">
          <Image
            src={"/images/about-1.jpg"}
            alt=""
            fill
            className=" rounded-lg"
          />
          <div className="absolute right-0 -top-32">
            <div className="w-[321px] h-[236px] relative">
              <Image
                src={"/images/about-2.jpg"}
                alt=""
                fill
                className=" rounded-lg"
              />
            </div>
          </div>
        </div>
        <Flex vertical className="w-[585px] relative z-10">
          <p className="text-white text-xl font-medium">WHO WE ARE </p>
          <br />
          <p className="text-white text-[45px] leading-[50px] font-medium">
            Highly Tailored IT Design, Management & Support Services.
          </p>
          <br />
          <p className="text-white text-lg font-normal w-[80%]">
            Accelerate innovation with world-class tech teams We’ll match you to
            an entire remote team of incredible freelance talent for all your
            software development needs.
          </p>
          <br />
          <Flex align="center" gap={20}>
            <Link
              href={"/"}
              className="relative w-24 h-24 rounded-full flex flex-row justify-center items-center bg-[#17e] text-white">
              next
            </Link>
            <p className="text-white text-xl font-medium">How we work</p>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="w-screen py-32 px-20" justify="center" align="center">
        <Flex
          gap={50}
          vertical
          justify="center"
          align="center"
          className="w-[600px] pe-16">
          <p className="text-black font-medium text-5xl leading-[70px] text-center">
            You know you did right when all your effort started to pay off in an
            unexpected and impressive way.
          </p>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/images/sign.png"}
              alt=""
              width={155}
              height={32}
              className="mb-5"
            />
            <p className="text-black font-medium text-lg text-center">
              Alen Moreno sin
            </p>
            <p className="text-black font-normal text-sm text-center">
              CEO, Techmax
            </p>
          </div>
        </Flex>
        <Flex
          vertical
          justify="center"
          align="center"
          className="w-[550px] ps-24 border-l">
          <p className="text-black font-normal text-2xl leading-[40px] text-center">
            Accelerate innovation with world-class tech teams We’ll match you to
            an entire remote team of incredible freelance talent for all your
            software development needs.
          </p>
          <br />
          <br />
          <div className="flex flex-col gap-4">
            <p className="text-black font-medium text-base text-start">
              We always focus on technical excellence
            </p>
            <p className="text-black font-medium text-base text-start">
              Wherever you’re going, we bring ideas and excitement
            </p>
            <p className="text-black font-medium text-base text-start">
              We’re consultants, guides, and partners for brands
            </p>
          </div>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        className="w-screen relative py-16 px-20 bg-[#e4eef9]">
        <Flex gap={10} className="w-[1300px] z-10 ]">
          {completed.map(({ text, amount, images }) => (
            <Flex key={amount} gap={10} className="flex-1 ">
              <div className="bg-white p-7 rounded-lg flex flex-row justify-center items-center">
                <Image
                  alt=""
                  width={40}
                  height={40}
                  quality={100}
                  className="object-cover"
                  src={images}
                />
              </div>
              <div className="flex-col justify-center items-center space-y-2">
                <p className="text-[#17e] font-semibold text-start text-5xl">
                  {amount}
                </p>
                <p className="text-black uppercase font-normal text-start text-lg">
                  {text}
                </p>
              </div>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        vertical
        gap={120}
        className="w-screen py-32 px-20"
        justify="center"
        align="center">
        <SoftwareTestimonials
          show={false}
          dark={false}
          objects={[
            "/images/case-meta3.png",
            "/images/case-meta1.png",
            "/images/case-meta2.png",
          ]}
          description={"Our projects make us proud"}
        />
        <Flex gap={30} justify="center" align="center" className="w-screen">
          <Flex
            justify="center"
            align="center"
            gap={70}
            className="w-[1300px] bg-[#f0f0f0] p-12 rounded-md">
            <Flex vertical className="h-[484px] w-[419px] relative">
              <Image src="/images/testi-img.png" fill alt="" />
            </Flex>
            <Flex className="" justify="center" align="center">
              <Space
                direction="vertical"
                className={`bg-white relative space-y-2 py-10 px-10 w-[620px]`}>
                <Image src="/message.png" width={50} height={50} alt="" />
                <p className={`text-black  text-2xl leading-loose`}>
                  Accelerate innovation with world-class tech teams Beyond more
                  stoic this along goodness hey this this wow manatee
                </p>
                <span
                  className={`text-black text-base leading-loose font-medium`}>
                  Mike Holder
                  <span
                    className={`text-black text-xs font-light leading-loose`}>
                    / Creative Writer
                  </span>
                </span>
              </Space>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical gap={30}>
          <div className="text-black text-3xl font-medium text-center">
            Step forward to become one of 49,494 successful clients of Mitech
          </div>
          <Sponsors />
        </Flex>
      </Flex>
    </Space>
  );
}
