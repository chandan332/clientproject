"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const RedButton = ({ text }: { text: string }) => {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Button className="bg-third hover:bg-red-600">{text}</Button>
    </motion.div>
  );
};

export default RedButton;
