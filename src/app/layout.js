"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "@/app/Components/NavBar";
import { Providers } from "./GlobalRedux/provider";
import Head from "next/head";
import Footer from "./Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body className="dark:bg-[#121212] bg-slate-50">
        <Providers>
          <StickyNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
