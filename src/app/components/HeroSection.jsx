"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";



const HeroSection = () => {
  return (
    <section className="bg-slate-700 lg:py-0">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="capitalize relative text-transparent font-sans mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
  <span className="absolute inset-0 z-0 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
    Hello, I&apos;m{" "}
  </span>
  <br />
  <span className="absolute inset-0 z-0 bg-clip-texts" style={{ WebkitTextFillColor: "transparent" }}>
  Connor Brown
  </span>

          </h1>
          <div>
</div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
            <div className=" absolute" style={{ WebkitTextFillColor: "transparent" }}></div>
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Profile Picture"
                  className="rounded-full border-white border-rounded-full border-4"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="relative h-full">
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="text-center text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl">
      <TypeAnimation
        sequence={[
          " Welcome to my portfolio", 500,
          " Check out my content below", 1000
        ]}
        wrapper="span"
        speed={65}
        repeat={Infinity}
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default HeroSection;
