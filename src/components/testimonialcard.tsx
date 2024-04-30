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
    <div
      className={`${
        !dark ? "bg-white border" : "bg-white/10"
      } relative lg:space-y-2 space-y-1 lg:ps-24 lg:px-0 px-4 py-3 lg:pe-10 rounded-xl shadow-lg lg:w-[620px]`}>
      <div
        className=" lg:absolute lg:block hidden bottom-20 -left-20 z-10 w-[135px] h-[134px] bg-blue-700 rounded-2xl shadow-xl shadow-blue-800"
        style={{ backgroundImage: `url('/images/testi-3.jpg')` }}
      />
      <Image src="/message.png" width={30} height={30} alt="" />
      <p
        className={`${
          !dark ? "text-black" : "text-white"
        } lg:text-xl text-sm leading-loose`}>
        {item.text}
      </p>
      <span
        className={`${
          !dark ? "text-black" : "text-white"
        }  lg:text-base text-sm leading-loose font-medium`}>
        {item.name}
        <span
          className={`${
            !dark ? "text-black" : "text-white"
          }  text-xs font-light leading-loose`}>
          / Creative Writer
        </span>
      </span>
    </div>
  );
}
