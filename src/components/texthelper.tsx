import Link from "next/link";

export default function TextHelper({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <Link
      href={path}
      className=" text-lg text-black hover:text-blue-400 font-medium">
      {title}
    </Link>
  );
}
