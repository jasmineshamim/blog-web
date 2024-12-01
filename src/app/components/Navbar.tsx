import React, { useState } from "react";
import Link from "next/link";

const Navbar = (): JSX.Element => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/#introduction", label: "INTRODUCTION" },
        { href: "/#about", label: "ABOUT US" },
        { href: "/#categories", label: "CATEGORIES" },
        { href: "/#comment", label: "COMMENTS" },
        { href: "/#contact", label: "CONTACT US" },
    ];

    return (
        <nav className="bg-gradient-to-r from-[#000814] via-[#0077b6] to-[#000814] text-white w-full fixed z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Branding */}
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Blogs</h1>

                   {/* Desktop Links */}
<div className="hidden md:flex space-x-8 font-extrabold">
    {navLinks.map((link) => (
        <Link
            key={link.href}
            href={link.href}
            className="relative group"
        >
            <span className="relative group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-pink-500">
                {link.label}
            </span>
            {/* Gradient Underline */}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
        </Link>
    ))}
</div>


                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden">
                        <button
                            aria-label="Toggle Navigation"
                            aria-expanded={isClick}
                            className="p-2 rounded-md text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${
                    isClick ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-extrabold">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={toggleNavbar}
      className="relative group"
    >
      {/* Text with gradient */}
      <span className="relative group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-pink-500">
        {link.label}
      </span>

      {/* Gradient Underline */}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
    </Link>
  ))}
</div>

            </div>
        </nav>
    );
};

export default Navbar;
