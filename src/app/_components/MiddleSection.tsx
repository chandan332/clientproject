"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MiddleSection = () => {
  const midRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: midRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <div className="relative">
      <motion.section
        ref={midRef}
        className=" left-0 mt-4 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 items-center bg-white z-0"
        style={{ opacity }}
      >
        <motion.div
          className=" w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full mx-auto"
          style={{
            backgroundImage: "url('/arash-ZnssDSmy9Ho.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            scale,
          }}
        ></motion.div>
        <motion.div className="w-3/4 mx-auto" style={{ x }}>
          <div>
            <p className="text-lg">
              <span
                className="text-4xl capitalize"
                style={{ color: "hsl(120, 100%, 30%)" }}
              >
                And as for the 2021 Clutch survey,
              </span>{" "}
              it&apos;s no surprise that 70% of small businesses struggle to
              find skilled copywriters. Looks like the business world is craving
              some word wizards to spice things up! 🌶✍️
            </p>
          </div>
        </motion.div>
      </motion.section>
      <section className="sticky top-0 left-0 mt-4 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden bg-white">
        <div className="w-3/4 mx-auto gap-4">
          <p>
            <i className="text-2xl" style={{ color: "hsl(180, 100%, 30%)" }}>
              But You&apos;re in luck! If you&apos;re part of the 77% of Indian
              food businesses without FSSAI licences and among the 70% searching
              for copywriting help, consider checking out &apos;Legal Success
              India.&apos; We got the recipe for success – we can help you file
              your FSSAI licence and take care of all your copywriting needs.
              It&apos;s a one-stop shop for legal compliance and tasty content!
              🍽�
            </i>
          </p>
        </div>
        <div
          className="w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full mx-auto"
          style={{
            backgroundImage: "url('/austin-kehmeier-lyiKExA4zQA.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </section>
    </div>
  );
};

export default MiddleSection;
