import { Flex } from "antd";
import Link from "next/link";
import { ReactNode } from "react";

export default function FlexBottomView({
  absolute,
  children,
}: {
  absolute: boolean;
  children: ReactNode;
}) {
  return (
    <Flex
      className={`${
        absolute ? "absolute w-[100%] -bottom-16 left-0" : "w-screen"
      } z-20`}
      align="center"
      justify="center">
      <Flex
        justify="space-between"
        align="center"
        className="w-[1300px]"
        gap={30}>
        {children}
      </Flex>
    </Flex>
  );
}
