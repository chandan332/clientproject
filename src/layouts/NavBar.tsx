import Link from "next/link";
import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import RedButton from "@/components/buttons/RedButton";
import HamburgerMenu from "./_components/HamburgerMenu";
import "./styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full shadow-lg bg-white flex justify-between items-center p-2 lg:py-2 lg:px-6 z-10">
      <Link href={`/`}>
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundImage: "url('/logo.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </Link>
      <div className="order-2 md:order-none">
        <HamburgerMenu />
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex gap-1 items-center">
          <BsFillTelephoneOutboundFill />
          9007299384
        </div>
        <div>
          <Link href="/services" className="hidden lg:block">
            <RedButton text="GET STARTED" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
