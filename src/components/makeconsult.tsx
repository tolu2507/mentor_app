import { Flex } from "antd";
import Image from "next/image";

export default function MakeEnquiry({ full }: { full?: boolean }) {
  return (
    <Flex
      gap={30}
      justify="space-between"
      className={`${
        full ? "w-screen" : "w-[1300px] rounded-2xl -bottom-40 z-10"
      } px-40 py-28 object-cover relative`}
      style={{ backgroundImage: `url('/images/bg/cta-bg5.jpg')` }}>
      <Flex className=" flex-1" gap={30}>
        <div className=" bg-gradient-to-b from-blue-400 to-fuchsia-700 w-2 h-[100%]" />
        <p className=" text-white text-[40px] leading-10 font-medium">
          To make requests for further information, contact us
        </p>
      </Flex>
      <Flex vertical align="center" gap={5} className=" flex-1">
        <Image
          src={"/images/cta-icon2.png"}
          width={60}
          height={60}
          alt=""
          className=""
        />
        <p>Call Us For Any Inquiry</p>
        <p className=" text-blue-500 text-[30px] font-semibold">
          +44 920 090 505
        </p>
      </Flex>
    </Flex>
  );
}
