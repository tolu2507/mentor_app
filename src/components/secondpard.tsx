import { Flex, Space } from "antd";

export default function ConsultSection() {
  return (
    <Space
      direction="horizontal"
      className="flex flex-row justify-center items-center w-screen px-28 pt-40 pb-32 no-scrollbar">
      <Space className=" w-[1300px]">
        <Flex gap={100} className="w-[1300px] pb-10">
          <Space direction="vertical" className="w-1/2 flex-1 space-y-7">
            <p className="text-base text-blue-800 font-normal uppercase">
              why consult ?
            </p>
            <p className=" text-black font-medium text-5xl w-3/4">
              Connect one-on-one with the right expert to get the answers you
              need.
            </p>
            <p className="text-base text-black font-light">
              We make world class advice easily accessible to everyone.
            </p>
            <Space className=" border-t-2 border-r-slate-200 w-full py-8">
              <Space className="w-full h-full py-5">
                <Space
                  direction="vertical"
                  className=" pt-20 pe-8 border-r-2 border-r-slate-200">
                  <p className="text-black text-base font-medium">
                    Eze Samuel Chukuwdi
                  </p>
                  <p className="text-black font-light text-xs">
                    CEO, Criset Technology
                  </p>
                </Space>
                <Space className="ms-16">
                  <Space direction="vertical">
                    <p className="text-black text-base font-normal">
                      Call to ask any question
                    </p>
                    <p className=" text-blue-600 font-medium text-3xl">
                      07089915606
                    </p>
                  </Space>
                </Space>
              </Space>
            </Space>
          </Space>
          <Space direction="vertical" className="w-1/2 flex-1">
            <video
              width="320"
              height="240"
              controls
              preload="true"
              className=" w-full h-full">
              <source src="/mentorvideo.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </Space>
        </Flex>
      </Space>
    </Space>
  );
}
