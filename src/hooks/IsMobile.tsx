"use client";
import React, { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      if (innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", detectMobile);
    detectMobile();
    return () => {
      window.removeEventListener("resize", detectMobile);
    };
  }, []);

  return [isMobile];
};

export default useMobile;
