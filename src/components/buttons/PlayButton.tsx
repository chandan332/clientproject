import React from "react";
import { Button } from "../ui/button";
import { BiPlay } from "react-icons/bi";

const PlayButton = () => {
  return (
    <Button
      type="button"
      variant="ghost"
      className="rounded-full w-[40px] h-[40px] bg-white"
    >
      <BiPlay style={{ color: "black", strokeWidth: "10px" }} />
    </Button>
  );
};

export default PlayButton;
