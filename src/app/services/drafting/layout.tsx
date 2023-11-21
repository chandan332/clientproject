import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Filing And Drafting",
  icons: "/favicon_qp2.png",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
