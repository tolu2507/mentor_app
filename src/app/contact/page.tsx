import ExpertHeader from "@/components/expertheader";
import ExpertContact from "@/components/expoertcontact";
import { Space } from "antd";

export default function ExpertPage() {
  return (
    <>
      <ExpertHeader path={""} topic={"Contact Us"} />
      <ExpertContact />
      <Space className="bg-white w-screen">
        <iframe
          title="frame"
          name="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3232052097624!2d7.476602274793921!3d9.034252591027315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b78534cd5d3%3A0x6d1760215a640221!2sPotiskum%20St%2C%20Garki%20900103%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1690117339434!5m2!1sen!2sng"
          style={{ width: "100vw", height: "450px", border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"/>
      </Space>
    </>
  );
}
