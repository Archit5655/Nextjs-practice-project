// import { Component } from 'react'
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {  Themeprovider } from "./context/Contextapi";
import { SessionProvider } from "next-auth/react"
import AuthProvider from "./components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Designer",
  description: "WE HELP PEOPLE TO  GET AMQZING DESIGN FOR THEIR PRODUCTS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Themeprovider>
<AuthProvider>
  
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
</AuthProvider>
    </Themeprovider>
   
      </body>
    </html>
  );
}
