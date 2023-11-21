import CheckBox from "@/components/form/CheckBox";
import FormField from "@/components/form/FormField";
import SelectField from "@/components/form/SelectField";
import React from "react";
import SubmitButton from "./SubmitButton";

const Form = () => {
  return (
    <>
      <div className="relative mt-4 p-4 bg-white border-2 rounded">
        <section className="">
          <h1 className="text-4xl font-semibold my-4">Renewal</h1>
          <p className="my-4">Food safety standards drafting.</p>
          <hr />
          <p className="text-red-700">* Indicates required question</p>
        </section>
        <div className="absolute top-0 left-0 bg-[#d0cb43] h-[10px] w-full rounded-t"></div>
      </div>
      <form action="">
        <FormField title="Full Name" />
        <FormField title="Contact Number" />
        <SelectField />
        <CheckBox />
        <SubmitButton />
      </form>
    </>
  );
};

export default Form;
