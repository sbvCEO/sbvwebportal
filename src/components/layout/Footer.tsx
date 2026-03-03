import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

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
    <footer className="pt-24 pb-10 border-t border-white/10 bg-[#050c19]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/brand/logo-primary-dark.svg"
                alt="Smart Business Valee"
                width={980}
                height={188}
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>
            <p className="text-[#9ab0d0] text-sm leading-relaxed max-w-xs mb-8">
              Affordable, AI-native business tools for serious operators. Building the future of lean enterprise SaaS.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-white/5 rounded-lg text-[#9ab0d0] hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-lg text-[#9ab0d0] hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-lg text-[#9ab0d0] hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-[#c8d7ee] mb-6 text-xs uppercase tracking-[0.18em]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#9ab0d0] hover:text-accent text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#7085a8] text-xs">© 2026 SmartBusinessValue. Built for serious operators.</p>
          <p className="text-[#7085a8] text-xs">Powered by AI-Native Architecture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
