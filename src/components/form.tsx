"use client";

import { BASEURL } from "@/constant/baseurl";
import { Flex, Input, Space, notification } from "antd";
import { useState } from "react";
import Loading from "./loading";
import { MessagesTypes } from "@/app/api/types";

export default function Form() {
  const url = `${BASEURL}/api/messages`;
  const [details, setDetails] = useState<MessagesTypes>({
    name: "",
    description: "",
    email: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Message sent successfully",
      description: "Message sent successfully, we would get back to you soon",
      duration: 10,
    });
  };

  async function handleInsertMessages() {
    console.log(url);
    setLoading(true);
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(details),
      });
      if (response.ok) {
        let data = await response.json();
        console.log("this is the data returned ", data);
        if (data.status === 201) {
          setDetails({
            name: "",
            description: "",
            email: "",
            subject: "",
          });
          openNotification();
        }
      }
    } catch (error) {
      console.log("this is the error that is making the code to faul ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {contextHolder}
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
            <Space
              direction="vertical"
              className=" w-[100%] space-y-2 lg:px-10 px-5">
              <Flex gap={20}>
                <Input
                  placeholder="Name *"
                  allowClear
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => setDetails({ ...details, name: e.target.value })}
                  className="h-12"
                  value={details.name}
                />
                <Input
                  placeholder="Email *"
                  allowClear
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => setDetails({ ...details, email: e.target.value })}
                  className="h-12"
                  value={details.email}
                />
              </Flex>
              <Input
                placeholder="Subject *"
                allowClear
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setDetails({ ...details, subject: e.target.value })}
                required={true}
                className="h-12"
                value={details.subject}
              />
              <Input.TextArea
                placeholder="Write A Message"
                allowClear
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setDetails({ ...details, description: e.target.value })}
                aria-multiline
                className="h-40"
                value={details.description}
              />
            </Space>
            <Space className=" lg:w-[920px] w-screen flex flex-row justify-center items-center mt-1-2">
              <button
                onClick={handleInsertMessages}
                type="button"
                className=" bg-gradient-to-tr from-blue-300 to-blue-700 py-4 lg:w-[684px] w-[300px] rounded-xl">
                Send message
              </button>
            </Space>
          </Space>
        </Space>
      </Space>
      {loading && <Loading />}
    </>
  );
}
