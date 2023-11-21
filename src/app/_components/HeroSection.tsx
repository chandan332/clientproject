"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import RedButton from "../../components/buttons/RedButton";
import { Roboto_Serif } from "next/font/google";

const roboto = Roboto_Serif({ subsets: ["latin"] });

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <>
      <main
        ref={heroRef}
        className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
      >
        <motion.div
          style={{ opacity, x }}
          className="w-3/4 mb-4 mx-auto lg:m-auto flex flex-col gap-4"
          initial={{ opacity: 0, x: "-50%" }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, x: "0%" }}
        >
          <h1
            className={`text-4xl ${roboto.className}`}
            style={{ color: "hsl(0, 100%, 30%)" }}
          >
            LEGAL SUCCESS INDIA
          </h1>
          <p>
            <i className="text-2xl" style={{ color: "hsl(180, 100%, 30%)" }}>
              Well, it seems like <span>FICCI&apos;s 2018</span> study exposed a
              spicy truth about Indian food businesses
            </i>{" "}
            <span className="text-lg">
              – only 23% had their FSSAI licence, leaving the rest in a
              flavourless soup of non-compliance.
            </span>
          </p>
          <motion.div
            className="mt-4 flex gap-4"
            initial={{ opacity: 0, x: "-50%" }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1, x: "0%" }}
          >
            <Link href="/services">
              <RedButton text="GET STARTED" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full m-auto"
          style={{
            backgroundImage: "url('/fatemeh-rz-V-A3UpAKtpc.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity,
            scale,
          }}
        ></motion.div>
      </main>
    </>
  );
};

export default HeroSection;
