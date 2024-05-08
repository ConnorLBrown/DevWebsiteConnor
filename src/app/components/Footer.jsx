import React from "react";
import MyLogo from "../../../public/CB.png";
import Image from "next/image"; 

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#000000] border-2-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <div className="relative" style={{ width: '25%', paddingTop: '25%', }}>
       <div className="absolute inset-0 bg-white overflow-hidden" style={{ border: '3pt solid #6366f1', borderRadius: '10px'}}>
          <div className="relative w-full h-full">
            <Image src={MyLogo} layout="fill" objectFit="cover" />
            </div>
            </div>
          </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
