"use client"
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Connor from "../../../public/Connor.svg";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
  { title: "Github", path: "https://github.com/ConnorLBrown" },
  { title: "LinkedIn", path: "https://www.linkedin.com/in/connor-brown-32591a269/" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="mobile-menu block md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 border rounded border-black text-slate-200 hover:text-white hover:border-white"
            >
              {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <h2 className="text-5xl font-semibold text-gray-800 mb-2"></h2>
            <ul className="flex justify-center items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
  
};

export default Navbar;
