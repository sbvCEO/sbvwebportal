import React from "react";
import Link from "next/link";
import { Cpu, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
    const sections = [
        {
            title: "Products",
            links: [
                { name: "Smart Deal Pricing", href: "/products" },
                { name: "Smart Contract Management", href: "/products" },
                { name: "Smart Purchasing", href: "/products" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Why Us", href: "/why-us" },
                { name: "AI-Native", href: "/ai-native" },
                { name: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", href: "/resources/blog" },
                { name: "Public Roadmap", href: "/resources/roadmap" },
                { name: "Documentation", href: "/resources/docs" },
                { name: "Support", href: "/resources/support" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
            ],
        },
    ];

    return (
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="mb-6 block">
                            <img
                                src="/logo.png"
                                alt="SmartBusinessValue"
                                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
                            Affordable, AI-native business tools for serious operators. Building the future of lean enterprise SaaS.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-accent transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-accent transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-widest">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-slate-500 hover:text-accent text-sm transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-xs">
                        © 2026 SmartBusinessValue. Built for serious operators.
                    </p>
                    <p className="text-slate-400 text-xs mt-4 md:mt-0">
                        Powered by AI-Native Architecture.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
