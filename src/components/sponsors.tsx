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
    <div className="lg:w-[1300px] hidden lg:flex flex-row w-screen space-x-5 overflow-scroll no-scrollbar">
      {images.map((image) => (
        <div key={image} className="relative lg:w-[120px] lg:h-10 w-16 h-5">
          <Image alt="" fill src={image} />
        </div>
      ))}
    </div>
  );
}
