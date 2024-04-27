import { PhoneTwoTone, MailTwoTone } from "@ant-design/icons";
import { Flex, Input, Space } from "antd";
import Image from "next/image";

export default function MakeRequest({ color }: { color?: boolean }) {
  const onChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  const completed = [
    {
      amount: "Contact Number",
      text: "+00(1) 123 456 7890",
      icon: <PhoneTwoTone className="text-6xl text-black" />,
    },
    {
      amount: "Our Mail",
      text: "infotechmax@ourmail.com",
      icon: <MailTwoTone className="text-6xl" />,
    },
    {
      amount: "Our Location",
      text: "New ipsum dolor amet, eiusmod adipisicing 147 New Yors, NY Adipisicing 123",
      icon: <PhoneTwoTone className="text-6xl" />,
    },
  ];

  return (
    <Flex className="relative py-44 px-20" justify="center" align="center">
      <Image alt="" src="/images/shape/contact-shape.png" fill />
      <Flex className="z-10" gap={30}>
        <Space className="flex w-[450px] flex-col" direction="vertical">
          <div className="text-black text-[50px] leading-[70px] font-medium">
            To make requests for further information, contact us
          </div>
          <Flex vertical gap={30} className="mt-16">
            {completed.map(({ amount, icon, text }) => (
              <Flex key={amount} className="" gap={20} align="center">
                {icon}
                <div className="text-black text-2xl font-bold">
                  {amount}
                  <p className="font-normal text-lg">{text}</p>
                </div>
              </Flex>
            ))}
          </Flex>
        </Space>
        <Space className="w-[500px] bg-white shadow-md rounded-3xl p-10 flex flex-row">
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
                  onChange={onChanges}
                  className="h-12"
                />
                <Input
                  placeholder="Email *"
                  allowClear
                  onChange={onChanges}
                  className="h-12"
                />
              </Flex>
              <Input
                placeholder="Subject *"
                allowClear
                onChange={onChanges}
                required={true}
                className="h-12"
              />
              <Input.TextArea
                placeholder="Write A Message"
                allowClear
                onChange={onChanges}
                aria-multiline
                className="h-40"
              />
            </Space>
            <button
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
  );
}
