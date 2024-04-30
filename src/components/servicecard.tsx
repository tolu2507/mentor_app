import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  icon,
  title,
  description,
  colored = false,
  up = false,
}: {
  icon: string;
  title: string;
  description: string;
  colored?: boolean;
  up?: boolean;
}) {
  return (
    <div
      className={`flex-1  lg:p-10 p-4 rounded-xl ${
        colored
          ? up
            ? "bg-white border-t-[12px] border-t-[#17e] shadow-md relative -top-10 hover:animate-bounce"
            : "bg-white border-t-[12px] border-t-[#17e] shadow-md relative hover:animate-bounce"
          : "border-2 bg-white"
      } `}>
      <Flex className="lg:gap-6 flex-col gap-2">
        {icon !== "" ? (
          <Image
            src={icon}
            width={50}
            height={50}
            className="object-contain"
            alt={""}
            quality={100}
          />
        ) : (
          <div className=" bg-[#f54] lg:w-[70px] lg:h-[70px] w-12 h-12 rounded-full" />
        )}
        <Link href="/service">
          <h3 className=" text-black font-bold lg:text-[24px] hover:text-blue-400">
            {title}
          </h3>
        </Link>
        <p className=" lg:leading-8 lg:text-base text-sm text-black">{description}</p>
      </Flex>
    </div>
  );
}
