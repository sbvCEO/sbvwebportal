"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Menu, X, ChevronRight } from "lucide-react";

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <img
                        src="/logo.png"
                        alt="SmartBusinessValue"
                        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-primary/80 hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-6 w-px bg-slate-200" />
                    <Link href="/contact" className="text-sm font-semibold text-primary hover:text-accent">
                        Contact
                    </Link>
                    <button className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 hover:bg-primary/90 transition-all shadow-soft group">
                        <span>Explore Products</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden p-2 text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                >
                    <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-lg font-bold text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <button className="bg-primary text-white w-full py-4 rounded-xl font-bold text-lg">
                            Get Started
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
