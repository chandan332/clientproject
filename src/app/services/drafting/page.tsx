import React from "react";
import Form from "./_components/Form";

const ApplyPage = () => {
  return (
    <>
      <div className="bg-[#f6f5d9]">
        <div className="w-[90vw] lg:w-1/2 mx-auto">
          <div
            className="max-h-[22vh] h-[160px] rounded"
            style={{
              backgroundImage: "url('/01_spider.png')",
              backgroundPosition: "center",
              backgroundSize: " cover",
            }}
          ></div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default ApplyPage;
