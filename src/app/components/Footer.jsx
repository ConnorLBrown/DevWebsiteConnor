import React from "react";
import MyLogo from "../../../public/Connor.png";
import Image from "next/image"; 

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#000000] border-2-transparent border-r-transparent text-white">
      <div className="container flex justify-between">
      <div className="relative" style={{ width: '25%', paddingTop: '25%', }}>
       <div className="absolute inset-0 bg-white overflow-hidden">
          <div className="relative w-full h-full">
            <Image src={MyLogo} layout="fill"  />
            </div>
            </div>
          </div>
        <p className="text-white"> Connor Brown's Website, All rights reserved.</p>
        <div><p className="text-white">Link to Repository: https://github.com/ConnorLBrown/DevWebsiteConnor</p></div>
        
      </div>
    </footer>
  );
};

export default Footer;
