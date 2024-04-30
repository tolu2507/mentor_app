"use client";

import { Flex, Input, Space } from "antd";

export default function Form() {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  return (
    <Space className="lg:w-[100%] w-screen flex flex-row justify-center items-center lg:mt-0 mt-10">
      <Space className="lg:w-[920px] w-screen bg-white shadow-2xl shadow-slate-400 rounded-3xl lg:py-20 py-6 flex flex-row justify-center items-center relative lg:top-48 z-10">
        <Space direction="vertical" className="lg:space-y-10">
          <Space
            direction="vertical"
            className=" w-[100%] lg:space-y-4 flex flex-col justify-center items-center mb-2">
            <p className="uppercase text-blue-700 lg:text-base text-sm font-medium text-center">
              REQUEST A QUOTE
            </p>
            <p className="text-center lg:text-5xl text-3xl font-medium text-black">
              How May We Help You!
            </p>
          </Space>
          <Space direction="vertical" className=" w-[100%] space-y-2 lg:px-10 px-5">
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
          <Space className=" lg:w-[920px] w-screen flex flex-row justify-center items-center mt-1-2">
            <button
              type="button"
              className=" bg-gradient-to-tr from-blue-300 to-blue-700 py-4 lg:w-[684px] w-[300px] rounded-xl">
              Send message
            </button>
          </Space>
        </Space>
      </Space>
    </Space>
  );
}
