import { Flex, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function AIComprehenshion() {
    
    return (
      <Flex
        className="bg-white w-screen px-20 pt-72 pb-32 relative"
        justify="center"
        align="center">
        <Space className="space-x-16">
          <div className="w-[547px] h-[597px] relative flex flex-row justify-center items-center">
            <Image
              src={"/images/shape/about-shape1.png"}
              alt=""
              fill
              className=" animate-spin-slow"
            />
            <div className="p-10 rounded-full w-[389px] h-[389px] z-10 relative">
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
          <Space direction="vertical" className="w-[450px] ">
            <div className="flex flex-col gap-10">
              <p className="text-lg text-[#1ef] font-medium">WHO WE ARE</p>
              <p className="text-6xl font-medium text-black">
                Comprehensive Protection for Devices
              </p>
              <p className="text-[18px] leading-[28px] text-black w-[90%]">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
            </div>
            <div className="mt-20">
              <div className="border-b py-5">
                <Link href="#" className="text-black font-medium text-xl">
                  Home Protection
                </Link>
              </div>
              <div className="border-b py-5">
                <Link href="#" className="text-black font-medium text-xl">
                  Corporate Security for Office
                </Link>
              </div>
              <div className="border-b py-5">
                <Link href="#" className="text-black font-medium text-xl">
                  Solution For Devices
                </Link>
              </div>
            </div>
          </Space>
        </Space>
      </Flex>
    );
}