import { Flex, Space } from "antd";

export default function ConsultSection() {
  return (
    <Space
      direction="horizontal"
      className="flex flex-row justify-center items-center w-screen lg:px-28 px-5 lg:pt-40 pt-10 pb-32 no-scrollbar">
      <Space className=" lg:w-[1300px] w-screen">
        <div className="lg:w-[1300px] w-screen pb-10 lg:flex-row flex-col flex lg:gap-24 gap-12 px-5">
          <div className="lg:w-1/2 flex-1 lg:space-y-7 space-y-2">
            <p className="lg:text-base text-sm text-blue-800 font-normal uppercase">
              why consult ?
            </p>
            <p className=" text-black font-medium lg:text-5xl text-2xl w-3/4">
              Connect one-on-one with the right expert to get the answers you
              need.
            </p>
            <p className="lg:text-base text-sm text-black font-light">
              We make world class advice easily accessible to everyone.
            </p>
            <Space className=" border-t-2 border-r-slate-200 w-full lg:py-8">
              <Space className="w-full h-full lg:py-5 py-2">
                <Space
                  direction="vertical"
                  className=" lg:pt-20 pt-6 pe-8 border-r-2 border-r-slate-200">
                  <p className="text-black lg:text-base text-sm font-medium">
                    Eze Samuel Chukuwdi
                  </p>
                  <p className="text-black font-light text-xs">
                    CEO, Criset Technology
                  </p>
                </Space>
                <Space className="lg:ms-16 ms-2">
                  <Space direction="vertical">
                    <p className="text-black lg:text-base text-sm font-normal">
                      Call to ask any question
                    </p>
                    <p className=" text-blue-600 font-medium lg:text-3xl text-xl">
                      07089915606
                    </p>
                  </Space>
                </Space>
              </Space>
            </Space>
          </div>
          <div className="lg:w-1/2 flex-1">
            <video
              // width="320"
              // height="240"
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
          </div>
        </div>
      </Space>
    </Space>
  );
}
