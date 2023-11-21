import React from "react";

const DashDashText = ({
  title,
  text,
  textColor,
}: {
  title: string;
  text: string;
  textColor?: string;
}) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-5 h-1 bg-third"></div>
        <div className="w-14 h-1 bg-third"></div>
        <p className={`${textColor} font-semibold`}>{title}</p>
      </div>
      <h3 className="text-2xl font-bold">{text}</h3>
    </>
  );
};

export default DashDashText;
