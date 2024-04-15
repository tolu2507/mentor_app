"use client";

import { Flex, Input, Space } from "antd";

export default function Form() {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  return (
    <Space className="w-[100%] flex flex-row justify-center items-center ">
      <Space className="w-[920px] bg-white shadow-2xl shadow-slate-400 rounded-3xl py-20 flex flex-row justify-center items-center relative top-48 z-10">
        <Space direction="vertical" className="space-y-10">
          <Space
            direction="vertical"
            className=" w-[100%] space-y-4 flex flex-col justify-center items-center">
            <p className="uppercase text-blue-700 text-base font-medium text-center">
              REQUEST A QUOTE
            </p>
            <p className="text-center text-5xl font-medium text-black">
              How May We Help You!
            </p>
          </Space>
          <Space direction="vertical" className=" w-[100%] space-y-2 px-10">
            <Flex gap={20}>
              <Input
                placeholder="Name *"
                allowClear
                onChange={onChange}
                className="h-12"
              />
              <Input
                placeholder="Email *"
                allowClear
                onChange={onChange}
                className="h-12"
              />
            </Flex>
            <Input
              placeholder="Subject *"
              allowClear
              onChange={onChange}
              required={true}
              className="h-12"
            />
            <Input.TextArea
              placeholder="Write A Message"
              allowClear
              onChange={onChange}
              aria-multiline
              className="h-40"
            />
          </Space>
          <Space className=" w-[920px] flex flex-row justify-center items-center">
            <button
              type="button"
              className=" bg-gradient-to-tr from-blue-300 to-blue-700 py-4 w-[684px] rounded-xl">
              Send message
            </button>
          </Space>
        </Space>
      </Space>
    </Space>
  );
}
