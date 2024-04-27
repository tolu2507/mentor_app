import { Space } from "antd";
import Image from "next/image";

export default function TestimonialCard({
  item,
  dark = false,
}: {
  item: { text: string; name: string };
  dark?: boolean;
}) {
  return (
    <Space
      direction="vertical"
      className={`${
        !dark ? "bg-white border" : "bg-white/10"
      } relative space-y-2 ps-24 py-3 pe-10 rounded-xl shadow-lg w-[620px]`}>
      <div
        className=" absolute bottom-16 -left-20 z-10 w-[135px] h-[134px] bg-blue-700 rounded-2xl shadow-xl shadow-blue-800"
        style={{ backgroundImage: `url('/images/testi-3.jpg')` }}
      />
      <Image src="/message.png" width={50} height={50} alt="" />
      <p
        className={`${
          !dark ? "text-black" : "text-white"
        } text-xl leading-loose`}>
        {item.text}
      </p>
      <span
        className={`${
          !dark ? "text-black" : "text-white"
        }  text-base leading-loose font-medium`}>
        {item.name}
        <span
          className={`${
            !dark ? "text-black" : "text-white"
          }  text-xs font-light leading-loose`}>
          / Creative Writer
        </span>
      </span>
    </Space>
  );
}
