"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Why Us", href: "/why-us" },
    { name: "AI-Native", href: "/ai-native" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "bg-[#0c162b]/95 border-white/10 backdrop-blur-xl shadow-[0_18px_45px_-28px_rgba(4,8,20,0.95)]"
            : "bg-[#0b1428]/78 border-white/15 backdrop-blur-md"
        }`}
      >
        <div className="px-5 sm:px-7 h-[74px] flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/brand/logo-primary-dark.svg"
              alt="Smart Business Valee"
              width={980}
              height={188}
              priority
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#dbe6f8]/85 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-5 w-px bg-white/15" />
            <Link
              href="/contact"
              className="text-sm font-semibold text-[#e8f1ff] hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/products"
              className="bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] px-5 py-2.5 rounded-full text-sm font-extrabold flex items-center space-x-2 hover:brightness-105 transition-all"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-[#dbe6f8]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 sm:px-7 py-7 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-[#e6edf7]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-lg font-bold text-[#e6edf7]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/products"
                className="bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] w-full py-4 rounded-xl font-extrabold text-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
