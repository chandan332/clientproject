import Payment from "@/components/payment";
import React from "react";

const Pricing2 = () => {
  const textarr = [
    "writing website copy",
    "writing marketing materials",
    "writing blog posts",
    "writing social media posts",
    "writing email marketing campaigns",
  ];
  return (
    <div>
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Find a Pricing Plan
        </h1>
        <div className="bg-white p-8 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/4 m-auto">
          <Payment
            title="Copywriting"
            charges="500 words"
            ammout={1999}
            govfee={false}
            textarr={textarr}
          />
          <Payment
            title="Copywriting"
            charges="700 words"
            ammout={2999}
            govfee={false}
            textarr={textarr}
          />
          <Payment
            title="Copywriting"
            charges="1000 words"
            ammout={3999}
            govfee={false}
            textarr={textarr}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing2;
