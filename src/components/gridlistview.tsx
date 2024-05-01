import { itemone, itemtwo } from "@/constant/service";
import { Space, Flex } from "antd";
import ServiceCard from "./servicecard";

export default function ServicesGridList() {
  return (
    <Flex
      vertical
      className="lg:w-[1300px] px-5 w-screen gap-5 z-20 justify-center items-center">
      {[itemone, itemtwo].map((item, index) => (
        <Flex
          key={index}
          className="w-[100%] flex-col lg:flex-row gap-5 lg:gap-8"
          justify="space-between">
          {item.map(({ icon, title, desc }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={desc}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
