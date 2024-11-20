"use client";

import React from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    });
  }, []);

  const navbarConfig = [
    {
      name: "Home",
      id: "Home",
    },
    {
      name: "Skills",
      id: "Goal",
    },
    {
      name: "Timeline",
      id: "Timeline",
    },
    {
      name: "Projects",
      id: "Projects",
    },
    {
      name: "Social",
      id: "Social",
    },
    {
      name: "MaiaLabs",
      id: "MaiaLabs",
    },
    {
      name: "Contact",
      id: "Contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-white/80 w-full rounded-none px-4 py-4 backdrop-saturate-200">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-lg font-bold text-gray-900">
          <p className="block antialiased font-sans text-blue-gray-900 text-2xl font-bold">
            Milan Kiele
          </p>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-4">
          {navbarConfig.map((item) => (
            <li key={item.id}>
              <Link
                href={`/#${item.id}`}
                className="text-gray-900 font-[500] hover:bg-gray-900/10 py-3 px-6 rounded-lg transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-900 hover:bg-gray-900/10 p-2 rounded-lg transition"
          onClick={handleOpen}
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-gray-400 bg-opacity-10 border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 p-4">
            {navbarConfig.map((item) => (
              <li key={item.id} className="w-full">
                <Link
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-gray-900 hover:bg-gray-900/10 py-3 px-6 rounded-lg transition w-full text-center block font-[500]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
