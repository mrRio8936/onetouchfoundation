import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "News & Updates", path: "/causes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white transition-colors duration-300 ${
        scrolling ? "bg-green-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-16 lg:px-32 py-3">
        {/* Logo with Name */}
        <span className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="One Touch Logo" className="h-10 md:h-12" />
            <span className="text-xl md:text-2xl font-bold pl-3 whitespace-nowrap">
              One Touch Foundation
            </span>
          </Link>
        </span>

        {/* Hamburger Icon */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center gap-8 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 md:static md:flex md:flex-row md:bg-transparent md:gap-8 md:translate-x-0`}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-green-400 text-xl md:text-base"
            >
              <Link
                to={link.path}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
