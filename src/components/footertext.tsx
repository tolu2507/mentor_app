import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function FotterText({
  image,
  text,
  texts,
  light,
}: {
  image: boolean;
  text?: string;
  texts?: { text: string; image: string };
  light: boolean;
}) {
  const response = image ? (
    <Link href={"#"}>
      <Flex align="center" gap={10}>
        <Image src={texts!.image} width={40} height={40} alt="" />
        <p
          className={`${
            light ? "text-black" : "text-[#f8f8f8]"
          } text-lg font-medium hover:text-blue-400`}>
          {texts!.text}
        </p>
      </Flex>
    </Link>
  ) : (
    <Link
      href={"#"}
      className={`${
        light ? "text-black" : " text-[#f8f8f8]"
      } font-thin text-[16px]`}>
      {text}
    </Link>
  );

  return response;
}
