import { Flex, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function AIComprehenshion() {
  return (
    <Flex
      className="bg-white w-screen lg:px-20 px-5 lg:pt-72 lg:pb-32 pt-10 pb-10 relative"
      justify="center"
      align="center">
      <Flex className="lg:gap-16 gap-5 w-screen bg-white flex-col lg:flex-row lg:justify-center items-center">
        <div className="lg:w-[547px] w-[350px] lg:h-[597px] h-[420px] relative flex flex-row justify-center items-center">
          <Image
            src={"/images/shape/about-shape1.png"}
            alt=""
            fill
            className=" animate-spin-slow object-cover"
          />
          <div className="p-10 rounded-full lg:w-[389px] lg:h-[389px] w-[250px] h-[250px] z-10 relative">
            <Image
              src={"/images/about-img3.jpg"}
              alt=""
              fill
              className="rounded-full"
            />
            <Link
              className="px-6 py-7 border-8 flex flex-row bg-[#1ef] absolute rounded-full right-[50px] -top-10"
              href={
                "https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U"
              }>
              next
            </Link>
          </div>
        </div>
        <Space direction="vertical" className="lg:w-[450px] ">
          <div className="flex flex-col lg:gap-10">
            <p className="lg:text-lg text-sm text-[#1ef] font-medium">WHO WE ARE</p>
            <p className="lg:text-6xl text-2xl font-medium text-black">
              Comprehensive Protection for Devices
            </p>
            <p className="lg:text-[18px] lg:leading-[28px] text-black lg:w-[90%]">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs.
            </p>
          </div>
          <div className="lg:mt-20">
            <div className="border-b lg:py-5 py-2">
              <Link
                href="#"
                className="text-black font-medium lg:text-xl text-sm">
                Home Protection
              </Link>
            </div>
            <div className="border-b lg:py-5 py-2">
              <Link
                href="#"
                className="text-black font-medium lg:text-xl text-sm">
                Corporate Security for Office
              </Link>
            </div>
            <div className="border-b lg:py-5 py-2">
              <Link
                href="#"
                className="text-black font-medium lg:text-xl text-sm">
                Solution For Devices
              </Link>
            </div>
          </div>
        </Space>
      </Flex>
    </Flex>
  );
}
