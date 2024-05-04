import React from "react";
import { Alert, Flex, Spin } from "antd";

const contentStyle: React.CSSProperties = {
  padding: 60,
  background: "#000",
  borderRadius: 40,
};

const content = <div style={contentStyle} />;

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="absolute bg-black/70 -top-10 left-0 z-30 w-screen h-[100%] flex flex-row justify-center items-center">
      <Flex gap="small">
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      </Flex>
    </div>
  );
}
