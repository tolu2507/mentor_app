"use client";

import React from "react";

import { InterswitchPay } from "react-interswitch";

export default function Payment() {
  const paymentParameters = {
    merchantCode: "MX191317",
    payItemID: "Default_Payable_MX191317",
    customerEmail: "tolulopebamisile@gmail.com",
    redirectURL: "http://localhost:3000",
    text: "Pay Now",
    mode: "TEST",
    transactionReference: Date.now().toString(),
    amount: "10000",
    style: {
      width: "200px",
      height: "40px",
      border: "none",
      color: "#fff",
      backgroundColor: "#ff0000",
    },
    callback: (response: any) => {
      console.log("response: ", response);
    },
  };
  return (
    <div className="w-screen bg-white h-[100%] justify-center items-center py-20 flex flex-row">
      <div className="bg-black p-20">
        <InterswitchPay {...paymentParameters} />
      </div>
    </div>
  );
}
