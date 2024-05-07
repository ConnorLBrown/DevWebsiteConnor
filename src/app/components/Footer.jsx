import React from "react";
import BioPic from "./BioPic";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#000000] border-2-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <BioPic />
      <span>Connor Brown Offical Website</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
