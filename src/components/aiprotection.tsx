import { Flex } from "antd";
import Link from "next/link";
import TextWithTitleAndDescription from "./textwithtitleanddescription";
import Image from "next/image";

export default function AiProtection({
  detail,
}: {
  detail: { name: string; title: string }[];
}) {
  return (
    <Flex
      style={{ backgroundImage: `url('/images/bg/service-bg6.jpg')` }}
      className="lg:px-20 px-5 py-8 lg:py-28 flex flex-row items-center justify-center w-screen">
      <Flex className="rounded-xl lg:w-[1300px] lg:p-24 w-[100%] flex-col lg:gap-16 gap-5">
        <TextWithTitleAndDescription
          title={"WHATS INCLUDED IN SERVICE"}
          description={
            "Ensure complete protection of transactions on any devices"
          }
          width={true}
        />
        <div className="lg:grid grid-cols-4 grid-rows-1 w-[100%] gap-5">
          {detail.map(({ name, title }) => (
            <Flex
              key={name}
              vertical
              className="flex-1 lg:p-7 p-4 bg-white rounded-xl lg:gap-5 gap-3 mb-3 lg:mb-0">
              <div className="relative lg:w-20 w-14 lg:h-28 h-14">
                <Image src={name} alt="" fill quality={100} />
              </div>
              <Link
                href="#"
                className="text-black font-medium lg:text-2xl text-lg">
                {title}{" "}
              </Link>
              <p className="text-black font-normal text-sm ">
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team .
              </p>
            </Flex>
          ))}
        </div>
      </Flex>
    </Flex>
  );
}
