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
        className="relative w-screen lg:py-32 py-20 px-5 flex-col lg:flex-row lg:px-20 lg:gap-8 gap-5"
        justify="center"
        align="center">
        <Image src="/images/bg/hero-bg1.png" alt="" fill />
        <Flex vertical className="z-10 lg:w-[500px] w-[100%] lg:gap-12 gap-3">
          <Flex
            align="center"
            gap={10}
            className="lg:p-3 p-1 bg-white lg:rounded-3xl rounded-xl w-[100%]">
            <div className="lg:py-2 lg:px-3 py-1 px-2 bg-[#17e] rounded-3xl flex flex-row justify-center items-center font-medium">
              HOT !
            </div>
            <div className="text-black font-medium lg:text-lg text-sm text-left">
              {" "}
              We can managed all digital services
            </div>
          </Flex>
          <Flex vertical>
            <p className="text-black lg:text-[65px] text-3xl lg:leading-[65px] font-bold">
              Your partner for digital solutions
            </p>
            <br />
            <br className="hidden lg:block" />
            <p className="text-black lg:text-[24px] text-lg lg:leading-[30px] font-normal">
              We provide the most responsive and functional IT design for
              companies and businesses worldwide.
            </p>
          </Flex>
          <Button
            className="lg:w-[200px] border-none"
            style={{
              height: 50,
              backgroundColor: " #3b82f6",
              fontSize: 16,
              color: "#fff",
              fontWeight: "700",
            }}>
            Read more
          </Button>
        </Flex>

        <Flex className=" relative z-10 lg:w-[638px] w-[100%] lg:h-[907px] h-[450px]">
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
        className="w-screen lg:py-32 py-10 px-5 lg:px-20 lg:gap-[120px] gap-10"
        justify="center"
        align="center">
        <TextWithTitleAndDescription
          title="what we provide"
          description="We provide truly prominent digital solutions."
          dark={false}
        />
        <Flex
          vertical
          justify="center"
          align="center"
          className="w-[100%] gap-5 lg:gap-8">
          <Flex
            className="lg:w-[1300px] gap-5 lg:gap-8 flex-col lg:flex-row w-[100%]"
            justify="space-between">
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
            className="bg-[#e6f0fb] py-10 px-10 rounded-2xl lg:w-[70%] w-[100%]"
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
        className="w-screen lg:pb-32 lg:pt-60 lg:px-20 px-5 py-7 lg:py-0 relative lg:gap-[50px] gap-5 lg:flex-row flex-col"
        justify="center"
        align="center">
        <Image
          src="/images/bg/about-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="lg:w-[585px] w-[100%] h-[426px] relative z-10 rounded-lg">
          <Image
            src={"/images/about-1.jpg"}
            alt=""
            fill
            className=" rounded-lg"
          />
          <div className="hidden lg:flex absolute right-0 -top-32">
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
        <Flex vertical className="lg:w-[585px] w-[100%] relative z-10">
          <p className="text-white lg:text-xl text-base font-medium">
            WHO WE ARE{" "}
          </p>
          <br />
          <p className="text-white lg:text-[45px] text-2xl lg:leading-[50px] font-medium">
            Highly Tailored IT Design, Management & Support Services.
          </p>
          <br />
          <p className="text-white lg:text-lg font-normal lg:w-[80%] w-[100%]">
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
      <Flex
        className="w-screen lg:py-32 py-10 lg:px-20 px-5 flex-col lg:flex-row gap-5"
        justify="center"
        align="center">
        <Flex
          vertical
          justify="center"
          align="center"
          className="lg:w-[600px] w-[100%] lg:gap-8 gap-5 lg:pe-16">
          <p className="text-black text-xl font-medium lg:text-5xl lg:leading-[70px] text-center">
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
          className="lg:w-[550px] lg:ps-24 lg:border-l">
          <p className="text-black font-normal lg:text-2xl lg:leading-[40px] leading-[26px] text-center">
            Accelerate innovation with world-class tech teams We’ll match you to
            an entire remote team of incredible freelance talent for all your
            software development needs.
          </p>
          <br />
          <br className="hidden lg:block" />
          <div className="flex flex-col gap-4">
            <p className="text-black lg:font-medium lg:text-base text-sm text-start">
              We always focus on technical excellence
            </p>
            <p className="text-black lg:font-medium lg:text-base text-sm text-start">
              Wherever you’re going, we bring ideas and excitement
            </p>
            <p className="text-black lg:font-medium lg:text-base text-sm text-start">
              We’re consultants, guides, and partners for brands
            </p>
          </div>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        className="w-screen relative lg:py-16 lg:px-20 py-8 px-5 bg-[#e4eef9]">
        <Flex className="lg:w-[1300px] w-[100%] z-10 ] gap-3 flex-col lg:flex-row">
          {completed.map(({ text, amount, images }) => (
            <Flex align="center" key={amount} gap={10} className="flex-1 ">
              <div className="bg-white lg:p-7 p-3 rounded-lg flex flex-row justify-center items-center">
                <Image
                  alt=""
                  width={40}
                  height={40}
                  quality={100}
                  className="object-cover"
                  src={images}
                />
              </div>
              <div className="flex-col justify-center items-center gap-2">
                <p className="text-[#17e] font-semibold text-start lg:text-5xl text-xl">
                  {amount}
                </p>
                <p className="text-black uppercase font-normal text-start lg:text-lg text-sm">
                  {text}
                </p>
              </div>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        vertical
        className="w-screen lg:py-32 py-7 lg:px-20 px-5 gap-5 lg:gap-[120px]"
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
        <Flex justify="center" align="center" className="w-screen lg:gap-8">
          <Flex
            justify="center"
            align="center"
            className="lg:w-[1300px] w-[100%] bg-[#f0f0f0] lg:p-12 p-4 rounded-md lg:gap-[70px] gap-7 flex-col lg:flex-row">
            <Flex vertical className="h-[484px] lg:w-[419px] w-[100%] relative">
              <Image src="/images/testi-img.png" fill alt="" />
            </Flex>
            <Flex className="" justify="center" align="center">
              <Space
                direction="vertical"
                className={`bg-white relative space-y-2 lg:py-10 lg:px-10 py-5 px-5 w-[100%] lg:w-[620px]`}>
                <Image src="/message.png" width={50} height={50} alt="" />
                <p className={`text-black  lg:text-2xl text-lg leading-loose`}>
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
          <div className="text-black lg:text-3xl font-medium text-center">
            Step forward to become one of 49,494 successful clients of Mitech
          </div>
          <Sponsors />
        </Flex>
      </Flex>
    </Space>
  );
}
