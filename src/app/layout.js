// import { Component } from 'react'
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ContextProvider, Themeprovider } from "./context/contextapi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "designer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Themeprovider>

          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
    </Themeprovider>
   
      </body>
    </html>
  );
}
