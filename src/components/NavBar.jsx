import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Navbar = () => {
  const location = useLocation(); 
  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-transparent p-5 fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={32} />
        </button>

        <ul className="hidden md:flex gap-10 text-white text-lg md:text-2xl font-bold">
          {menuItems.map(({ name, path }) => {
            const isActive = location.pathname === path; 
            return (
              <NavLink
                key={name}
                to={path}
                className={`relative px-4 py-2 cursor-pointer transition-all ${
                  isActive ? "text-amber-400" : "text-white"
                }`}
              >
                <motion.span whileTap={{ scale: 0.9 }}>{name}</motion.span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-md border-2 border-amber-300"
                    initial={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  />
                )}
              </NavLink>
            );
          })}
        </ul>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-gray-800 text-white p-5 shadow-md"
        >
          <ul className="flex flex-col gap-5 text-lg font-bold">
            {menuItems.map(({ name, path }) => {
              const isActive = location.pathname === path;
              return (
                <NavLink
                  key={name}
                  to={path}
                  className={`relative px-4 py-2 cursor-pointer transition-all ${
                    isActive ? "text-amber-400" : "text-white"
                  }`}
                >
                  <motion.span whileTap={{ scale: 0.9 }}>{name}</motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-md border-2 border-amber-300"
                      initial={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
