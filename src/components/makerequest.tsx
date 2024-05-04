"use client";

import { MessagesTypes } from "@/app/api/types";
import { PhoneTwoTone, MailTwoTone } from "@ant-design/icons";
import { Flex, Input, Space, notification } from "antd";
import Image from "next/image";
import { useState } from "react";
import Loading from "./loading";
import { BASEURL } from "@/constant/baseurl";

export default function MakeRequest({ color }: { color?: boolean }) {
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

  const completed = [
    {
      amount: "Contact Number",
      text: "+00(1) 123 456 7890",
      icon: <PhoneTwoTone className="lg:text-6xl text-3xl text-black" />,
    },
    {
      amount: "Our Mail",
      text: "infotechmax@ourmail.com",
      icon: <MailTwoTone className="lg:text-6xl text-3xl" />,
    },
    {
      amount: "Our Location",
      text: "New ipsum dolor amet, eiusmod adipisicing 147 New Yors, NY Adipisicing 123",
      icon: <PhoneTwoTone className="lg:text-6xl text-3xl" />,
    },
  ];

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
      <Flex
        className="relative lg:py-44 py-10 lg:px-20 px-5 w-screen"
        justify="center"
        align="center">
        <Image alt="" src="/images/shape/contact-shape.png" fill />
        <Flex
          className="z-10 w-[100%] justify-center items-center flex-col lg:flex-row"
          gap={30}>
          <Space
            className="flex lg:w-[450px] w-[100%] flex-col"
            direction="vertical">
            <div className="text-black lg:text-[50px] text-3xl lg:text-left text-center lg:leading-[70px] font-medium">
              To make requests for further information, contact us
            </div>
            <Flex vertical className="lg:mt-16 mt-4 lg:gap-7 gap-3">
              {completed.map(({ amount, icon, text }) => (
                <Flex key={amount} className="" gap={20} align="center">
                  {icon}
                  <div className="text-black lg:text-2xl font-bold">
                    {amount}
                    <p className="font-normal lg:text-lg">{text}</p>
                  </div>
                </Flex>
              ))}
            </Flex>
          </Space>
          <Space className="lg:w-[500px] w-[100%] bg-white lg:shadow-md lg:rounded-3xl lg:p-10 flex flex-row">
            <Space direction="vertical" className="space-y-10 w-[100%]">
              <Space
                direction="vertical"
                className=" w-[100%] space-y-4 flex flex-col justify-center items-center">
                <p
                  className={
                    color
                      ? "uppercase text-[#f54] text-base font-medium text-center"
                      : "uppercase text-blue-700 text-base font-medium text-center"
                  }>
                  LEAVE US MESSAGE
                </p>
                <p className="text-center text-4xl font-medium text-black">
                  How May We Help You!
                </p>
              </Space>
              <Space direction="vertical" className=" w-[100%] space-y-2">
                <Flex gap={20}>
                  <Input
                    placeholder="Name *"
                    allowClear
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
                    ) => setDetails({ ...details, name: e.target.value })}
                    className="h-12"
                    value={details.name}
                  />
                  <Input
                    placeholder="Email *"
                    allowClear
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
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
              <button
                onClick={handleInsertMessages}
                type="button"
                className={
                  color
                    ? " bg-[#f54] py-4 w-[100%] rounded-xl"
                    : " bg-gradient-to-tr from-blue-300 to-blue-700 py-4 w-[100%] rounded-xl"
                }>
                Send message
              </button>
            </Space>
          </Space>
        </Flex>
      </Flex>
      {loading && <Loading />}
    </>
  );
}
