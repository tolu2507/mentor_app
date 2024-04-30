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

  return (
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
