import { Inter } from "next/font/google";
import Footer from "@/layouts/Footer";
import NavBar from "@/layouts/NavBar";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEGAL SUCCESS INDIA",
  description: "Generated by create next app",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container overflow-hidden">
          <NavBar />
          <div className="pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
