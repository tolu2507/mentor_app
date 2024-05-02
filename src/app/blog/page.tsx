import ExpertHeader from "@/components/expertheader";
import ExpertContact from "@/components/expoertcontact";
import { Space } from "antd";

export default function ExpertPage() {
  return (
    <>
      <ExpertHeader path={""} topic={"Blog"} />
      <ExpertContact />
    </>
  );
}
