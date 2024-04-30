"use client";

import ExpertHeader from "@/components/expertheader";
import { team } from "@/constant/stickyconstant";
import { Flex, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ExpertPage() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState("");
  return (
    <>
      <ExpertHeader path={"/men.png"} topic={"Our Mentors"} />
      <Space className="bg-white lg:w-[100%] w-screen lg:p-32 relative no-scrollbar flex flex-row justify-center items-center">
        <Flex
          gap={20}
          className=" lg:w-[1300px] lg:h-[474px] w-screen flex lg:flex-row flex-col p-5">
          {team.map(({ image, title, desc, socials, descs }) => (
            <div
              onClick={() => router.push(`/expert/${title.surname}`)}
              key={title.name}
              className="relative lg:h-[100%] h-[470px] lg:w-[417px] w-[100%]"
              onMouseEnter={() => setIsHovered(title.name)}
              onMouseLeave={() => setIsHovered("")}>
              <div className="absolute left-0 top-0 bg-gradient-to-b from-transparent to-black lg:w-[417px] w-[100%] h-[100%] z-10 rounded-3xl overflow-hidden p-10">
                <div
                  className={`space-y-5 absolute p-10 bottom-0 left-0 bg-black bg-opacity-0 text-white transition-transform duration-500 ${
                    isHovered === title.name
                      ? "transform translate-y-0"
                      : "transform translate-y-1/3"
                  }`}>
                  <Space className="pb-0 space-x-3">
                    <div
                      className={`${
                        isHovered === title.name
                          ? "w-20 h-32 absolute bottom-24 -z-10"
                          : "w-1 h-14"
                      } bg-gradient-to-b from-blue-800 to-purple-800`}
                    />
                    <p className="text-white font-medium text-2xl">
                      {title.name} <br /> {title.surname}
                      <br />{" "}
                      <p className="text-white font-normal text-sm">{desc}</p>
                    </p>
                  </Space>
                  <Flex gap={10} className="ps-5">
                    {isHovered === title.name ? (
                      socials.map((item) => (
                        <Link href={"#"} key={item}>
                          <Image
                            alt=""
                            src={"/message.png"}
                            width={20}
                            height={20}
                          />
                        </Link>
                      ))
                    ) : (
                      <p className="text-transparent font-normal text-sm">
                        {descs}
                      </p>
                    )}
                  </Flex>
                </div>
              </div>
              <Image
                src={image}
                fill
                alt={""}
                quality={100}
                className=" object-cover rounded-3xl"
              />
            </div>
          ))}
        </Flex>
      </Space>
    </>
  );
}
