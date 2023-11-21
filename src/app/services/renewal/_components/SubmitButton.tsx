"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const SubmitButton = () => {
  const router = useRouter();
  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    router.push("/success");
  }
  return (
    <Button
      className="w-full mb-2 text-xl text-[#898000]"
      type="submit"
      variant="outline"
      onClick={submitForm}
    >
      Submit{" "}
    </Button>
  );
};

export default SubmitButton;
