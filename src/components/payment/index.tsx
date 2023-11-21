"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./payment.module.css";
import { usePathname } from "next/navigation";

interface PaymentInterface {
  title: string;
  charges: string;
  ammout: number;
  govfee: boolean;
  textarr: string[];
}

const Payment = ({
  title,
  charges,
  ammout,
  govfee,
  textarr,
}: PaymentInterface) => {
  const pathname = usePathname();

  return (
    <div className="text-sm font-semibold">
      <div className="py-6 bg-gray-200 rounded-lg shadow-lg">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl italic">
          <span className="font-semibold">₹</span>
          {ammout}{" "}
        </h1>
        <p className="bg-gray-400 text-gray-200 p-2"> {title}</p>
        <ul className="text-gray-600 px-2">
          <li className="mb-2">
            <p className={styles.latofont}>
              {charges}
              {govfee && (
                <span className="font-normal">(excluding government fees)</span>
              )}
            </p>
          </li>
          {textarr?.map((text, index) => {
            return (
              <li key={index} className="mb-2 ">
                <div className="flex items-baseline">
                  <FaArrowRight />
                  <p className={`m-auto ${styles.latofont}`}>{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <Link href={`${pathname}/..`}>
          <button className="bg-third text-white mt-4 py-2 px-4 rounded-full">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
