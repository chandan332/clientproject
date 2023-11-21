import React from "react";
import Form from "./_components/Form";

const ApplyPage = () => {
  return (
    <>
      <div className="bg-[#f1ecec]">
        <div className="w-[90vw] lg:w-1/2 mx-auto">
          <div
            className="max-h-[22vh] h-[160px] rounded"
            style={{
              backgroundImage: "url('/08_book.png')",
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
