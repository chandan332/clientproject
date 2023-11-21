import React from "react";

const CheckBox = () => {
  return (
    <div className="p-6 my-2 bg-white rounded border-2">
      <p className="text-xl">Do you have GST?</p>
      <div className="my-2">
        <input type="radio" id="no" name="gst" />
        {"   "}
        <label htmlFor="no">NO</label>
      </div>
      <div className="my-2">
        <input type="radio" id="yes" name="gst" />
        {"   "}
        <label htmlFor="yes">YES</label>
      </div>
    </div>
  );
};

export default CheckBox;
