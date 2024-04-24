import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 border-2 p-10 rounded-xl">
      <Flex vertical gap={24}>
        <Image
          src={icon}
          width={50}
          height={50}
          className="object-contain"
          alt={""}
          quality={100}
        />
        <Link href="#">
          <h3 className=" text-black font-bold text-[24px] hover:text-blue-400">
            {title}
          </h3>
        </Link>
        <p className=" leading-8 text-base text-black">{description}</p>
      </Flex>
    </div>
  );
}
