import Image from "next/image";
import { headerbottomcard } from "@/constant/stickyconstant";
import { Card, Flex, Space } from "antd";
import Link from "next/link";

export default function HeaderBottom() {
  return (
    <div
      style={{ backgroundImage: `url('/images/bg/service-bg3.jpg')` }}
      className=" w-screen lg:h-[500px] relative no-scrollbar">
      <div className="bg-[#003] w-screen lg:h-[500px] lg:absolute py-10 lg:py-0 lg:px-28 px-5 lg:top-0 lg:left-0 bg-opacity-80 flex lg:flex-row flex:col justify-center items-center">
        <div className="lg:w-[1300px] flex lg:flex-row flex-col gap-5">
          {headerbottomcard.map(({ title, icon, description }) => (
            <Card
              key={title}
              className="lg:w-[280px] relative lg:-top-[100px] bg-white "
              style={{
                padding: 12,
              }}>
              <div className="gap-4 flex flex-col ">
                <Image
                  src={icon}
                  width={30}
                  height={30}
                  className="object-contain"
                  alt={""}
                  quality={100}
                />
                <Link href="/service">
                  <h3 className=" text-black font-bold text-2xl hover:text-blue-400">
                    {title}
                  </h3>
                </Link>
                <p className=" leading-8 text-base">{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
