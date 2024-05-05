/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ConsultationTypes } from "@/app/api/types";
/* eslint-disable react/no-unescaped-entities */
import ExpertHeader from "@/components/expertheader";
import {
  Button,
  DatePicker,
  DatePickerProps,
  Flex,
  Input,
  InputNumber,
  Popover,
  Space,
} from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import Loading from "../../../components/loading";
import { BASEURL } from "@/constant/baseurl";

export default function Persons({ params }: { params: { persons: string } }) {
  const url = `${BASEURL}/api/consultation`;
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [dropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consultation, setConsultation] = useState<ConsultationTypes>({
    name: "",
    email: "",
    consultation_type: "Text Consultation",
    consultation_date: "",
    minutes: "0",
    price: 0,
    additional_information: "",
    mentor_name: params.persons.toString(),
  });
  const [calender, setCalender] = useState<any>("");
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date);
    console.log(dateString, consultation.minutes);
    setCalender(dateString);
  };

  async function handleInsertConsultation() {
    console.log(params.persons);
    console.log(url);
    setLoading(true);
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(consultation),
      });
      if (response.ok) {
        let data = await response.json();
        console.log("this is the data returned ", data);
        if (data.status === 201) {
          setConsultation({
            name: "",
            email: "",
            consultation_type: "",
            consultation_date: "",
            minutes: "",
            price: 0,
            additional_information: "",
            mentor_name: params.persons.toString(),
          });
          // router.push(`/expert/${params.persons}`);
        }
      }
    } catch (error) {
      console.log("this is the error that is making the code to faul ", error);
    } finally {
      setLoading(false);
    }
  }
  const consult = [
    "Text Consultation",
    "Video Consultation",
    "Live Consultation",
  ];
  function getPrice(prices: number) {
    const price =
      +consultation.minutes <= 90
        ? prices
        : +consultation.minutes > 90 && +consultation.minutes <= 180
        ? prices + prices
        : prices + prices + prices;

    return price;
  }

  useEffect(() => {
    if (consultation.consultation_type === "Text Consultation") {
      const price = getPrice(22500);
      setConsultation({ ...consultation, price: price });
    } else if (consultation.consultation_type === "Video Consultation") {
      const price = getPrice(27000);
      setConsultation({ ...consultation, price: price });
    } else {
      const price = getPrice(30150);
      setConsultation({ ...consultation, price: price });
    }
  }, [consultation.consultation_type, consultation.minutes]);

  return (
    <div className="flex flex-col bg-white w-screen relative">
      <ExpertHeader path={"/sammy.jpeg"} topic={"Our Mentors"} />
      <Flex
        justify="center"
        align="center"
        className="w-screen bg-white py-5 lg:px-20 px-5 lg:pb-24">
        <Flex vertical gap={30} className="w-[820px]">
          <div>
            <div>
              <h2 className="text-4xl font-medium text-black">About Me</h2>
              <p className="text-base text-black mt-4">
                With over five years of dedicated project management experience
                in blockchains and SaaS development, I possess a wealth of
                hands-on knowledge, consulting with clients testing the waters
                with new products and projects within the complexities of this
                dynamic industry.
              </p>
              <br />
              <p className="text-base text-black">
                My expertise extends beyond project management; I am also a
                savvy crypto trader, utilizing my market insights to make
                informed decisions. In the past, I also doubled down as a
                technical writer and copywriter, helping blockchain, SaaS, and
                crypto brands with their technical documentation and producing
                great sales copy that resonates with both technical and
                non-technical product users.
              </p>
              <br />
            </div>
            <div>
              <h2 className="text-xl font-medium text-black">
                WHAT I AM ONTO NOW
              </h2>
              <p className="text-base text-black mt-2">
                Currently, I am the CFO and co-founder of Luxury Prime
                Properties. Our offerings at Luxury Prime cut across offplan
                construction, service apartment management, and land sales.
              </p>
              <br />
            </div>
            <div>
              <h2 className="text-xl font-medium text-black">
                WHAT I AM ONTO NOW
              </h2>
              <p className="text-base text-black mt-2">
                Whether you're a blockchain founder seeking strategic guidance,
                an individual entering the crypto space, or an investor looking
                for opportunities, my multifaceted background positions me as a
                valuable resource to propel your success in the blockchain and
                cryptocurrency realm and even beyond.{" "}
                <p> IN DOUBT, LET'S START WITH A TRIAL CALL!</p>
              </p>
              <br />
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-4xl font-medium text-black">
                Book a Consultation
              </h2>
              <Space direction="vertical" className="space-y-3 w-[100%] mt-5">
                <Input
                  placeholder="Name"
                  className="h-14 rounded-none"
                  value={consultation.name}
                  onChange={(e) =>
                    setConsultation({ ...consultation, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Email"
                  className="h-14 rounded-none"
                  value={consultation.email}
                  onChange={(e) =>
                    setConsultation({ ...consultation, email: e.target.value })
                  }
                />

                <div className="relative">
                  <p className="text-gray-300 mb-1">Consultation Type</p>

                  <Flex
                    onClick={() => setShowDropdown(!dropdown)}
                    align="center"
                    justify="space-between"
                    className="w-[100%] border cursor-pointer h-14 px-3 rounded-lg mb-2  hover:border-[#17e]">
                    <div className="text-black capitalize">
                      {consultation.consultation_type}
                    </div>
                  </Flex>

                  {dropdown && (
                    <div className="absolute w-[100%] top-24 left-0 border gap-3 flex flex-col shadow-md shadow-black p-3 rounded-lg bg-white z-10">
                      {consult.map((item) => (
                        <div
                          key={item}
                          onClick={() =>
                            setConsultation({
                              ...consultation,
                              consultation_type: item,
                            })
                          }
                          className={`cursor-pointer ${
                            item === consultation.consultation_type
                              ? "text-white bg-black rounded-lg py-3"
                              : "text-black bg-white"
                          } px-3`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-gray-300 mb-1">Consultation Date</p>
                  <DatePicker
                    format={{
                      format: "YYYY-MM-DD HH:mm:ss",
                      type: "mask",
                    }}
                    onChange={onChange}
                    style={{ width: "100%", height: 64 }}
                  />
                </div>
                <div className=" cursor-pointer">
                  <Flex
                    onClick={() => setShow(!show)}
                    align="center"
                    justify="space-between"
                    className="w-[100%] border  h-14 px-3 rounded-lg mb-2  hover:border-[#17e]">
                    <div className="text-black capitalize">
                      Click to Select Date and Time (P.S. the date has been
                      picked)
                    </div>
                    <Image
                      src="/calendar.jpeg"
                      width={20}
                      height={20}
                      alt="calendar"
                    />
                  </Flex>
                  {show && (
                    <InlineWidget
                      url="https://calendly.com/tolulopebamisile/30min"
                      styles={{
                        height: 780,
                        width: "100%",
                        borderRadius: 10,
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                      }}
                      prefill={{
                        email: consultation.email,
                        name: consultation.name,
                        date: new Date(calender),
                      }}
                    />
                  )}
                </div>
                <InputNumber
                  placeholder="Select Time (Minutes)"
                  className=" rounded-none"
                  style={{ width: "100%", paddingTop: 10, paddingBottom: 10 }}
                  value={consultation.minutes}
                  onChange={(e) =>
                    setConsultation({
                      ...consultation,
                      minutes: e ? e : "",
                    })
                  }
                />
                <Input
                  placeholder="Price (NGN)"
                  className=" h-14 rounded-none"
                  value={consultation.price}
                  onChange={(e) =>
                    setConsultation({ ...consultation, price: +e.target.value })
                  }
                />
                <Input
                  placeholder="Addition Information"
                  className=" h-14 rounded-none"
                  value={consultation.additional_information}
                  onChange={(e) =>
                    setConsultation({
                      ...consultation,
                      additional_information: e.target.value,
                    })
                  }
                />
                <br />
                <Button
                  onClick={handleInsertConsultation}
                  className="w-[250px] border-none hover:bg-black"
                  style={{
                    height: 60,
                    backgroundColor: " #3b82f6",
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "700",
                    border: 0,
                  }}>
                  Book Now
                </Button>
              </Space>
              <br />
            </div>
          </div>
        </Flex>
      </Flex>
      {loading && <Loading />}
    </div>
  );
}
