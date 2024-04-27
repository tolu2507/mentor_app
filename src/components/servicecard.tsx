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
      className={`flex-1  p-10 rounded-xl ${
        colored
          ? up
            ? "bg-white border-t-[12px] border-t-[#17e] shadow-md relative -top-10 hover:animate-bounce"
            : "bg-white border-t-[12px] border-t-[#17e] shadow-md relative hover:animate-bounce"
          : "border-2 bg-white"
      } `}>
      <Flex vertical gap={24}>
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
          <div className=" bg-[#f54] w-[70px] h-[70px] rounded-full" />
        )}
        <Link href="/service">
          <h3 className=" text-black font-bold text-[24px] hover:text-blue-400">
            {title}
          </h3>
        </Link>
        <p className=" leading-8 text-base text-black">{description}</p>
      </Flex>
    </div>
  );
}
