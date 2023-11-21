import Payment from "@/components/payment";
import React from "react";

const Pricing1 = () => {
  const textarr = [
    "preparation and submition of your FSSAI registration application on your behalf",
    "assistance with any questions or concerns you may have through out the registration process",
  ];
  return (
    <div>
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Find a Pricing Plan
        </h1>
        <div className="bg-white p-8 grid grid-cols-2 md:grid-cols-4 gap-4 m-auto lg:w-3/4">
          <Payment
            title="BASIC FSSAI REGISTRATION"
            charges="1 Year Charges"
            ammout={999}
            govfee={false}
            textarr={textarr}
          />
          <Payment
            title="BASIC FSSAI REGISTRATION"
            charges="5 Year Charges"
            ammout={1999}
            govfee={false}
            textarr={textarr}
          />
          <Payment
            title="STATE FSSAI LICENSE REGISTRATION"
            charges="Professional Fees"
            ammout={1999}
            govfee={true}
            textarr={textarr}
          />
          <Payment
            title="CENTERAL FOOD LICENSE REGISTRATION"
            charges="Professional Fees"
            ammout={2999}
            govfee={true}
            textarr={textarr}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing1;
