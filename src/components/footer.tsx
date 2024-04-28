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
    <Space
      style={{ backgroundImage: `url(${url})` }}
      className="w-screen h-full relative no-scrollbar bg-[#001]">
      <Space
        direction="vertical"
        className=" w-screen h-full relative top-0 left-0 bg-opacity-80 flex flex-row justify-center items-center">
        <Space
          direction="vertical"
          className={`w-[1300px] mb-20 ${!show ? "pt-20" : "pt-0"}`}>
          {show && orange ? (
            <Space className=" w-[100%] py-10  px-20 relative -top-20 bg-no-repeat bg-cover rounded-xl bg-[#f54]">
              <Space className="absolute bg-black z-10 w-[115px] h-[115px] p-10 rounded-full -top-14 left-20">
                <Image
                  alt=""
                  width={195}
                  height={195}
                  src="/images/subscribe-icon.png"
                />
              </Space>
              <Flex
                justify="space-between"
                align="center"
                gap={20}
                className="w-[900px]">
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
              </Flex>
            </Space>
          ) : (
            <Space
              className=" w-[100%] h-56 relative -top-20 bg-no-repeat bg-cover rounded-xl"
              style={{ backgroundImage: `url('/images/bg/cta-bg.jpg')` }}>
              <Space className="relative bg-black z-10 w-[115px] h-[115px] p-10 rounded-full -top-28 left-20">
                <Image
                  alt=""
                  width={195}
                  height={195}
                  src="/images/cta-icon2.png"
                />
              </Space>
              <div>
                <p className="text-white text-4xl font-medium">
                  We’re Delivering the best customer Experience
                </p>
                <Link href={"#"}>
                  <Space className="w-60 h-[64px] bg-gradient-to-tr from-white to-white rounded-lg flex-row flex justify-center items-center absolute right-[100px] top-[110px]">
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: 24,
                      }}>
                      07089915606
                    </Text>
                  </Space>
                </Link>
              </div>
            </Space>
          )}
          <Flex
            justify="space-between"
            gap={30}
            className="w-[100%] overflow-hidden">
            <Flex vertical gap={20} className="flex-1">
              <Link href={"/"}>
                <Image
                  src={logo}
                  width={200}
                  height={200}
                  className="object-cover"
                  alt=""
                />
              </Link>
              {aux ? (
                <p
                  className={`${
                    light ? "text-black" : "text-white"
                  } text-base font-normal leading-loose`}>
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
            <Flex vertical gap={30} className="flex-1">
              <h2
                className={`${
                  light ? "text-black" : "text-white"
                } text-2xl font-medium`}>
                Useful Links
              </h2>
              <Flex vertical className="leading-[40px]">
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
            <Flex vertical gap={30} className="flex-1">
              <h2
                className={`${
                  light ? "text-black" : "text-white"
                } text-2xl font-medium`}>
                Our Services
              </h2>
              <Flex vertical className="leading-[40px]">
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
            <Flex vertical gap={30} className="flex-1">
              <h2
                className={`${
                  light ? "text-black" : "text-white"
                } text-2xl font-medium`}>
                Contact Information
              </h2>
              <Flex vertical className="leading-[40px]">
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
        </Space>
        <Space
          direction="vertical"
          className={` w-screen flex flex-row justify-center items-center p-10 border-t`}>
          <p
            className={`text-center text-base font-normal ${
              light ? "text-black" : "text-white"
            }`}>
            © Copyrights 2022 techwix All rights reserved.
          </p>
        </Space>
      </Space>
    </Space>
  );
}
