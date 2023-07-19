"use client"
import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import { Inter, Rubik } from 'next/font/google'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const inter = Rubik({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} >
        <Header />
        <div className='flex flex-col items-center justify-center overflow-hidden  bg-primary'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
