import { Flex } from "antd";
import Image from "next/image";

export default function MakeEnquiry({
  full,
  image,
}: {
  full?: boolean;
  image?: string;
}) {
  return (
    <Flex
      className={`${
        full ? "w-screen" : "lg:w-[1300px] w-[100%] rounded-2xl lg:-bottom-40 z-10"
      } lg:px-40 px-5 py-5 lg:py-28 object-cover relative gap-7 lg:justify-between justify-center items-center flex-col lg:flex-row`}
      style={{
        backgroundImage: `url(${image ? image : "/images/bg/cta-bg5.jpg"})`,
      }}>
      <Flex className=" flex-1" gap={30}>
        <div className=" bg-gradient-to-b from-blue-400 to-fuchsia-700 w-2 h-[100px] hidden lg:block" />
        <p className=" text-white lg:text-[40px] lg:leading-10 text-xl font-medium text-center lg:text-left">
          To make requests for further information, contact us
        </p>
      </Flex>
      <Flex
        vertical
        align="center"
        justify="center"
        gap={5}
        className=" flex-1">
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
