import { itemone, itemtwo } from "@/constant/service";
import { Space, Flex } from "antd";
import ServiceCard from "./servicecard";

export default function ServicesGridList() {
    
    return (
      <Space direction="vertical" className="w-[1300px] space-y-5">
        <Flex gap={30} className="w-[100%]" justify="space-between">
          {itemone.map(({ icon, title, desc }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={desc}
            />
          ))}
        </Flex>
        <Flex gap={30} className="w-[100%]" justify="space-between">
          {itemtwo.map(({ icon, title, desc }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={desc}
            />
          ))}
        </Flex>
      </Space>
    );
}