"use client";

import { Flex, Input, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import FotterText from "@/components/footertext";
import { useful, services, information } from "@/constant/stickyconstant";

const { Text } = Typography;

export default function Footer({
  show,
  logo,
  aux,
  light,
  url,
  orange = false,
}: {
  show: boolean;
  logo: string;
  aux: boolean;
  light: boolean;
  url: string;
  orange?: boolean;
}) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="w-screen h-full flex flex-row justify-center items-center relative no-scrollbar bg-[#001]">
      <div className=" w-[100%] h-full relative bg-opacity-80 flex flex-col justify-center items-center">
        <div
          className={`lg:w-[1300px] w-screen lg:mb-20 ${
            !show ? "py-5 lg:py-0" : "pt-0"
          }`}>
          {show && orange ? (
            <div className="hidden lg:flex w-[100%] py-10  px-20 relative -top-20 bg-no-repeat bg-cover rounded-xl bg-[#f54] flex-row items-center">
              <Space className="absolute bg-black z-10 w-[115px] h-[115px] p-10 rounded-full -top-14 left-20">
                <Image
                  alt=""
                  width={195}
                  height={195}
                  src="/images/subscribe-icon.png"
                />
              </Space>
              <p className="text-5xl font-medium w-[350px]">
                Subscribe to our newsletter
              </p>
              <Flex className="flex-1">
                <Input className="h-16 rounded-none" />
                <Link
                  href={"/authenthecation"}
                  className="w-[200px] h-16 bg-black flex-row flex justify-center items-center">
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Subscribe
                  </Text>
                </Link>
              </Flex>
            </div>
          ) : (
            <div
              className="lg:block hidden relative -top-20 bg-no-repeat bg-cover rounded-xl p-10"
              style={{ backgroundImage: `url('/images/bg/cta-bg.jpg')` }}>
              <Space className="absolute bg-black z-10 w-[115px] h-[115px] p-10 rounded-full -top-16 left-20">
                <Image
                  alt=""
                  width={195}
                  height={195}
                  src="/images/cta-icon2.png"
                />
              </Space>
              <div className="w-[100%] flex flex-row justify-between items-center">
                <div className="text-white text-4xl font-medium capitalize">
                  We’re Delivering the best customer Experience
                </div>
                <Link
                  href={"#"}
                  className="w-60 h-[64px] bg-gradient-to-tr from-white to-white rounded-lg flex-row flex justify-center items-center text-[24px] font-medium text-black">
                  07089915606
                </Link>
              </div>
            </div>
          )}
          <Flex
            justify="space-between"
            className="lg:w-[100%] lg:gap-8 gap-5 w-screen flex flex-col px-5 lg:flex-row overflow-hidden">
            <Flex vertical gap={20} className="flex-1">
              <Link href={"/"} className="relative hidden lg:block">
                <Image
                  src={logo}
                  width={200}
                  height={200}
                  className="object-cover"
                  alt=""
                />
              </Link>
              <Link href={"/"} className="relative lg:hidden">
                <Image
                  src={logo}
                  width={150}
                  height={100}
                  className="object-cover"
                  alt=""
                />
              </Link>
              {aux ? (
                <p
                  className={`${
                    light ? "text-black" : "text-white"
                  } lg:text-base text-sm font-normal leading-loose`}>
                  Accelerate innovation with world- <br /> class tech teams
                  We’ll match you
                  <br /> to an entire remote team of
                  <br /> incredible freelance talent.
                </p>
              ) : (
                <p
                  className={`${
                    light ? "text-black" : "text-white"
                  } text-base font-normal leading-loose`}>
                  Consult with the best mentors in
                  <br /> Africa
                </p>
              )}
              <div className="relative -left-3">
                <Link href={"#"}>
                  <Image
                    src={"/socialgroup.jpeg"}
                    width={150}
                    height={150}
                    className="object-cover"
                    alt=""
                  />
                </Link>
              </div>
            </Flex>
            <Flex vertical className="flex-1 lg:gap-8 gap-3">
              <h2
                className={`${
                  light ? "text-black" : "text-white"
                } lg:text-2xl text-lg font-medium`}>
                Useful Links
              </h2>
              <Flex vertical className=" lg:leading-[50px] leading-[20px]">
                {useful.map((item) => (
                  <FotterText
                    key={item}
                    image={false}
                    text={item}
                    light={light}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex vertical className="flex-1 lg:gap-8 gap-3">
              <h2
                className={`${
                  light ? "text-black" : "text-white"
                } lg:text-2xl text-lg font-medium`}>
                Our Services
              </h2>
              <Flex vertical className="lg:leading-[50px] leading-[20px]">
                {services.map((item) => (
                  <FotterText
                    key={item}
                    image={false}
                    text={item}
                    light={light}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex vertical className="flex-1 lg:gap-8 gap-3">
              <h2
                className={`${
                  light ? "text-black" : "text-white"
                } lg:text-2xl text-lg font-medium`}>
                Contact Information
              </h2>
              <Flex vertical className="lg:leading-[50px] leading-[20px]">
                {information.map((item) => (
                  <FotterText
                    key={item}
                    image={false}
                    text={item}
                    light={light}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </div>
        <Flex
          justify="center"
          align="center"
          className={` w-screen lg:p-10 p-5 border-t`}>
          <p
            className={`text-center lg:text-base text-sm font-normal ${
              light ? "text-black" : "text-white"
            }`}>
            © Copyrights 2022 techwix All rights reserved.
          </p>
        </Flex>
      </div>
    </div>
  );
}
