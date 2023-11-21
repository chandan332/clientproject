import React from "react";

const SelectField = () => {
  return (
    <div className="p-6 my-2 bg-white rounded border-2">
      <label htmlFor="countries" className="block mb-4 text-xl ">
        Select State <span className="text-red-700">*</span>
      </label>
      <select
        id="countries"
        className="bg-gray-50 text-gray-500 border-2 outline-none rounded block w-full p-2"
      >
        <option selected>Choose</option>
        <option value="US">Andhra Pradesh</option>
        <option value="CA">Arunachal Pradesh</option>
        <option value="FR">Assam</option>
        <option value="DE">Bihar</option>
        <option value="DE">Chhattisgarh</option>
        <option value="DE">Goa</option>
        <option value="DE">Gujarat</option>
        <option value="DE">Haryana</option>
        <option value="DE">Himachal Pradesh</option>
        <option value="DE">Jharkhand</option>
        <option value="DE">Karnataka</option>
        <option value="DE">Kerala</option>
        <option value="DE">Madhya Pradesh</option>
        <option value="DE">Maharashtra</option>
        <option value="DE">Manipur</option>
        <option value="DE">Meghalaya</option>
        <option value="DE">Mizoram</option>
        <option value="DE">Nagaland</option>
        <option value="DE">Odisha</option>
        <option value="DE">Punjab</option>
        <option value="DE">Rajasthan</option>
        <option value="DE">Sikkim</option>
        <option value="DE">Tamil Nadu</option>
        <option value="DE">Telangana</option>
        <option value="DE">Tripura</option>
        <option value="DE">Uttar Pradesh</option>
        <option value="DE">Uttarakhand</option>
        <option value="DE">West Bengal</option>
      </select>
    </div>
  );
};

export default SelectField;
