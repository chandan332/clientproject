"use client";
import React from "react";
import useMobile from "@/hooks/IsMobile";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HamburgerMenu = () => {
  const pathname = usePathname();
  const [isMobile] = useMobile();
  const [isClickOnMenu, setIsClickOnMenu] = React.useState(false);
  return (
    <div className="flex justify-center items-center">
      <motion.div className="border-2 rounded-lg" whileTap={{ scale: 0.9 }}>
        {isMobile && (
          <button
            type="button"
            className="rotate-90 px-2 py-1"
            onClick={() => {
              setIsClickOnMenu(!isClickOnMenu);
            }}
          >
            |||
          </button>
        )}
      </motion.div>
      <ul
        className={` flex ${
          isMobile
            ? ` ${
                isClickOnMenu ? "" : "hidden"
              } absolute top-[90%] right-[0%] flex-col shadow-lg bg-white`
            : ""
        } gap-2  font-semibold p-2`}
      >
        <li className={`mx-2 ${pathname === "/" ? "active" : ""}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`mx-2 ${pathname === "/services" ? "active" : ""}`}>
          <Link href="/services">Services</Link>
        </li>
        <li className={`mx-2 ${pathname === "/about" ? "active" : ""}`}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
