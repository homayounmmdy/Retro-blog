"use client"
import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import SiteConfig from "../config/site";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Neon glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
      
      <nav className="relative border-b-2 border-cyan-400/50 bg-slate-900/80 shadow-[0_0_15px_rgba(34,211,238,0.3)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo */}
            <a 
              href="/" 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-75" />
              <div className="clip-path-octagon relative flex items-center space-x-2 border-2 border-cyan-400 bg-slate-900 px-2 py-1 transition-all duration-300 hover:border-purple-400 md:px-4 md:py-2">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-black tracking-wider text-transparent md:text-2xl">
                  {SiteConfig.name}
                </span>
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              {SiteConfig.nav.map((nav, index) => (
                <a
                  key={nav.id}
                  href={nav.href}
                  className="group relative overflow-hidden px-6 py-2"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-pink-500/0 transition-transform duration-700 group-hover:translate-x-[100%]" />
                  
                  {/* Border effect */}
                  <div className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-cyan-400/50" />
                  
                  {/* Text */}
                  <span className="relative text-sm font-bold uppercase tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-cyan-400">
                    {nav.name}
                  </span>
                  
                  {/* Index number */}
                  <span className="absolute right-1 top-0 font-mono text-[10px] text-cyan-400/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/homayounmmdy"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />
                <div className="relative border-2 border-cyan-400 bg-slate-900 p-1.5 transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] md:p-3">
                  <FaGithub className="h-5 w-5 text-cyan-400 transition-colors duration-300 group-hover:text-purple-400" />
                </div>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group relative border-2 border-cyan-400 bg-slate-900 p-1.5 transition-all duration-300 hover:border-purple-400 md:p-3 lg:hidden"
              >
                <div className="absolute inset-0 bg-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />
                {isMenuOpen ? (
                  <FaTimes className="relative h-5 w-5 text-cyan-400" />
                ) : (
                  <FaBars className="relative h-5 w-5 text-cyan-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 border-t border-cyan-400/30 bg-slate-900/95 px-4 pb-6 pt-2">
            {SiteConfig.nav.map((nav, index) => (
              <a
                key={nav.id}
                href={nav.href}
                className="group relative block"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between border-l-4 border-transparent bg-slate-800/50 p-4 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-slate-800">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-cyan-400">
                    {nav.name}
                  </span>
                  <span className="font-mono text-xs text-cyan-400/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,rgba(34,211,238,0.1)_0px,transparent_1px,transparent_2px,rgba(34,211,238,0.1)_3px)]" />
      </div>
    </div>
  );
};

export default Navbar;