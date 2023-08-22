"use client"

import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

import Image from "next/image";
import Icons from "../components/Icons"

export default function About () {

    const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "A versatile full-stack developer", "An enthusiastic tech blogger", "open-source contributor", "freelancing extraordinaire", "and lifelong self-taught learner."
      ],
      typeSpeed: 80, // Adjust typing speed (in milliseconds)
      loop: true, // Set to true for continuous typing effect
      shuffle:true,
      showCursor:false

    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy(); // Clean up the Typed.js instance when the component unmounts
    };
  }, []);



    return (
        <div className="min-h-[90vh] flex flex-col gap-2 md:mt-20">
        <div className="
        grid grid-cols-5
        sm:gap-4">
           <div className="
           col-span-12
           md:col-span-3
         p-8 mt-6 mb-4 rounded-lg
         text-white
           ">
            <div className="m-4 sm:m-10 flex flex-col gap-4
            "
            >
            <div className="flex gap-2 items-center h-14">
            <div className="bg-white h-1 w-10 "
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        />
            <div className="font-bold  text-2xl sm:text-3xl"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        >Hello</div> 
            </div>
            <div className="text-6xl sm:text-7xl font-medium min-w-[290px]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300">
                {`I'm Kunal Zanke`}
            </div>
            <div className="text-3xl sm:text-4xl font-light" >
                <div className="h-20 sm:h-10" ref={textRef} ></div>
                <div className='invisible'>K</div>
            </div>

            <div className="text-lg sm:text-2xl font-light"
             data-aos="fade-right"
             data-aos-duration="1000"
             data-aos-delay="400">
            Of course, there’s so much more to me than just a few fancy titles. Scroll down and get to know me,
            {/* Beyond these titles lies the essence of my journey. Dive in and discover more about me. */}
            </div>
            </div>              
           </div>
           
           <div className="
           col-span-full
           md:col-span-2
           p-8
           ">
            <div className="flex items-center h-full"
            data-aos="zoom-in"
            data-aos-duration="1000">
            <Image src="/profile.jpeg" alt="kunalznk" width={728} height={661} className="
            rounded-full cursor-pointer
            transform scale-100 hover:scale-110 transition-transform
            "/>
            </div>
           </div>
        </div>
        <div className="
        grid grid-cols-4
     ">
           <div className="
           col-span-12
           md:col-span-2
           ">
            <div className="flex flex-wrap gap-6 sm:gap-8 p-4 justify-center  items-center">
            <a href="https://github.com/kunalznk" className="
            rounded-full border-1  p-2 transition-all group hover:bg-black hover:scale-125 hover:cursor-pointer
            "
            data-aos="fade-left"
            data-aos-duration={1000}>
            <Icons.Github  />
            </a>
            <a href="https://twitter.com/kunalznk" className="rounded-full   p-2 transition-all hover:bg-white hover:scale-125 hover:cursor-pointer"
             data-aos="fade-right"
             data-aos-duration={1000}>
            <Icons.Twitter  />
            </a>
            <a href="https://stackoverflow.com/users/10115696/kunal-zanke" className="rounded-full   p-2 transition-all hover:bg-white hover:scale-125 hover:cursor-pointer"
            data-aos="fade-left"
            data-aos-duration={2000}
            >
            <Icons.StackOverflow  />
            </a>
            <a href="https://www.linkedin.com/in/kunalzanke/" className="rounded-full   p-2 transition-all hover:bg-white hover:scale-125 hover:cursor-pointer"
            data-aos="fade-right"
            data-aos-duration={1000}>
            <Icons.LinkedIn  />
            </a>
            <a href="https://github.com/kunalznk" className="rounded-full   p-2 transition-all hover:bg-white hover:scale-125 hover:cursor-pointer"
            data-aos="fade-left"
            data-aos-duration={1000}>
            <Icons.Discord  />
            </a>
            </div>              
           </div>
           <div className="
           hidden
           sm:flex
           col-span-full
           
           md:col-span-2
           p-4
           text-white
           ">
            <div className="flex flex-col  gap-4 sm:gap-20">
                <p className="text-xl">SCROLL</p>
                <div className="animate-bounce  sm:mt-4 px-2 py-6 rounded-full flex justify-center items-center">
                <Image src="/arrow.svg" alt="scroll arrow" width={50} height={50} className='invert'/>
                </div>
            </div>
           </div>
</div>
</div>
    )
}