import React from "react";

interface FormProps {
  title: string;
}

const FormField = ({ title }: FormProps) => {
  return (
    <div className="p-6 my-2 bg-white rounded border-2">
      <div className="text-xl mb-4 block">
        {title} <span className="text-red-700">*</span>
      </div>
      <input
        type="text"
        className="border-none w-full outline-none"
        placeholder="Your answer"
      />
      <hr />
    </div>
  );
};

export default FormField;
