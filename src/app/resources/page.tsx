"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Newspaper, FileText, Map, MessageSquare, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Blog",
      desc: "Expert takes on AI-native business growth and lean operations.",
      icon: Newspaper,
      link: "/resources/blog",
    },
    {
      title: "Public Roadmap",
      desc: "See what we're building next. Vote on the features you want now.",
      icon: Map,
      link: "/resources/roadmap",
    },
    {
      title: "Documentation",
      desc: "Technical guides and API references for the SmartBusinessValue stack.",
      icon: FileText,
      link: "/resources/docs",
    },
    {
      title: "Developer Support",
      desc: "24/7 assistance for integrations and custom AI workflows.",
      icon: MessageSquare,
      link: "/resources/support",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-extrabold text-[#f2f7ff] mb-6 tracking-tight">
              Growth <span className="text-accent underline decoration-4 underline-offset-8 decoration-accent/30">Resources</span>
            </h1>
            <p className="text-xl text-[#9ab0d0] leading-relaxed">
              Everything you need to successfully transition to an AI-native business model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {resources.map((res) => (
              <Link key={res.title} href={res.link} className="sb-glass p-10 rounded-[2.5rem] group card-hover block">
                <div className="bg-white/5 p-4 rounded-2xl w-fit border border-white/10 mb-8 text-accent">
                  <res.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#eaf2ff] mb-4">{res.title}</h3>
                <p className="text-[#9ab0d0] mb-8 leading-relaxed">{res.desc}</p>
                <span className="text-[#dbe8ff] font-bold flex items-center space-x-2 group/btn hover:text-accent transition-colors">
                  <span>Explore</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
