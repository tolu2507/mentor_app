import type { MenuProps } from "antd";
import Link from "next/link";

export const HomeDrop: MenuProps["items"] = [
  {
    label: (
      <Link href="/" className="lg:text-lg text-white lg:text-black">
        Home Main
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link href="/aisolution" className="lg:text-lg text-white lg:text-black">
        AI Solutions
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link href="/cybersecurity" className="lg:text-lg text-white lg:text-black">
        Cyber Security
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link href="/itsolution" className="lg:text-lg text-white lg:text-black">
        IT Solutions
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link href="/softwarecompany" className="lg:text-lg text-white lg:text-black">
        Software Company
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link href="/itagency" className="lg:text-lg text-white lg:text-black">
        IT Agency
      </Link>
    ),
    key: "5",
  },
];

export const PagesDrop: MenuProps["items"] = [
  {
    label: <Link href="/expert" className="lg:text-lg text-white lg:text-black">Our Team</Link>,
    key: "0",
  },
  {
    label: <Link href="/service" className="lg:text-lg text-white lg:text-black">Service</Link>,
    key: "1",
  },
  {
    label: <Link href="/whyus" className="lg:text-lg text-white lg:text-black">Why Choose Us</Link>,
    key: "2",
  },
  {
    label: <Link href="/testimonials" className="lg:text-lg text-white lg:text-black">Testimonials</Link>,
    key: "3",
  },
  {
    label: <Link href="/pricing" className="lg:text-lg text-white lg:text-black">Pricing</Link>,
    key: "4",
  },
  {
    label: <Link href="/authenthecation" className="lg:text-lg text-white lg:text-black">Login & Register</Link>,
    key: "5",
  },
];

export const BlogDrop: MenuProps["items"] = [
  {
    label: <Link href="/bloggrid" className="lg:text-lg text-white lg:text-black">Blog Grid</Link>,
    key: "0",
  },
  {
    label: <Link href="/bloglist" className="lg:text-lg text-white lg:text-black">Blog List</Link>,
    key: "1",
  },
  {
    label: <Link href="/blogsingle" className="lg:text-lg text-white lg:text-black">Blog Single</Link>,
    key: "2",
  },
];
