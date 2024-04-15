import type { MenuProps } from "antd";
import Link from "next/link";

export const HomeDrop: MenuProps["items"] = [
  {
    label: (
      <Link href="/" className="text-lg">
        Home Main
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link href="/aisolution" className="text-lg">
        AI Solutions
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link href="/cybersecurity" className="text-lg">
        Cyber Security
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link href="/itsolution" className="text-lg">
        IT Solutions
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link href="/softwarecompany" className="text-lg">
        Software Company
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link href="/itagency" className="text-lg">
        IT Agency
      </Link>
    ),
    key: "5",
  },
];

export const PagesDrop: MenuProps["items"] = [
  {
    label: <Link href="/expert" className="text-lg">Our Team</Link>,
    key: "0",
  },
  {
    label: <Link href="/service" className="text-lg">Service</Link>,
    key: "1",
  },
  {
    label: <Link href="/whyus" className="text-lg">Why Choose Us</Link>,
    key: "2",
  },
  {
    label: <Link href="/testimonials" className="text-lg">Testimonials</Link>,
    key: "3",
  },
  {
    label: <Link href="/pricing" className="text-lg">Pricing</Link>,
    key: "4",
  },
  {
    label: <Link href="/authenthecation" className="text-lg">Login & Register</Link>,
    key: "5",
  },
];

export const BlogDrop: MenuProps["items"] = [
  {
    label: <Link href="/bloggrid" className="text-lg">Blog Grid</Link>,
    key: "0",
  },
  {
    label: <Link href="/bloglist" className="text-lg">Blog List</Link>,
    key: "1",
  },
  {
    label: <Link href="/blogsingle" className="text-lg">Blog Single</Link>,
    key: "2",
  },
];
