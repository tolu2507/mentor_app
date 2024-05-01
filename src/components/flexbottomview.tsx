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
        absolute ? "lg:absolute w-[100%] lg:-bottom-16 lg:left-0" : "w-[100%]"
      } z-20`}
      align="center"
      justify="center">
      <Flex
        justify="space-between"
        className="lg:w-[1300px] w-[100%] lg:gap-8 gap-5 flex-col lg:flex-row">
        {children}
      </Flex>
    </Flex>
  );
}
