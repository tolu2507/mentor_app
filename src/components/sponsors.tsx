import { Space } from "antd";
import Image from "next/image";

export default function Sponsors() {
  const images = [
    "/images/brand/brand-1.png",
    "/images/brand/brand-2.png",
    "/images/brand/brand-3.png",
    "/images/brand/brand-4.png",
    "/images/brand/brand-5.png",
    "/images/brand/brand-1.png",
    "/images/brand/brand-2.png",
    "/images/brand/brand-3.png",
    "/images/brand/brand-4.png",
    "/images/brand/brand-5.png",
    "/images/brand/brand-1.png",
    "/images/brand/brand-2.png",
    "/images/brand/brand-3.png",
    "/images/brand/brand-4.png",
    "/images/brand/brand-5.png",
    "/images/brand/brand-1.png",
    "/images/brand/brand-2.png",
    "/images/brand/brand-3.png",
    "/images/brand/brand-4.png",
    "/images/brand/brand-5.png",
  ];
  return (
    <Space className="w-[1300px] space-x-5 overflow-scroll no-scrollbar">
      {images.map((image) => (
        <div key={image} className="relative w-[120px] h-10">
          <Image alt="" fill src={image} />
        </div>
      ))}
    </Space>
  );
}
