"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "@/app/Components/NavBar";
import { Providers } from "./GlobalRedux/provider";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body className="dark:bg-black bg-slate-50">
        <div
         
        >
          <Providers>
            <StickyNavbar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
