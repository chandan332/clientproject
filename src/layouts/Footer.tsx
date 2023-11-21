import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="bg-gray-500 text-white p-6" id="footer">
      <div className="bg-gray-700 grid grid-cols-1 md:grid-cols-3 p-4 rounded [&>div]:flex [&>div]:flex-col">
        <div className="justify-center lg:items-center my-4 [&>div]:flex [&>div]:items-center [&>div]:gap-1 [&>div]:text-lg">
          <div>
            <HiOutlineMail /> ...@gmail.com
          </div>
          <div>
            <BsTelephoneOutboundFill /> (+91) 6290634766
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Services</h3>
          <ul className="my-6 [&>li>a]:m-2 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:text-lg">
            <li>
              <Link href="/services/drafting/pricing">
                <FaGreaterThan /> File & Drafting
              </Link>
            </li>
            <li>
              <Link href="/services/copywriting/pricing">
                <FaGreaterThan /> Copy Writing
              </Link>
            </li>
            <li>
              <Link href="/services/renewal/pricing">
                <FaGreaterThan /> Renewal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Menu</h3>
          <ul className="my-6 [&>li>a]:m-2 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:text-lg">
            <li>
              <Link href="/">
                <FaGreaterThan /> Home
              </Link>
            </li>
            <li>
              <Link href="/services">
                <FaGreaterThan /> Services
              </Link>
            </li>
            <li>
              <Link href="/about">
                <FaGreaterThan /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
