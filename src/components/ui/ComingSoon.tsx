import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Timer, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-[#08111f] flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-36 pb-24 px-6 sb-grid-bg">
        <div className="max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 animate-pulse-soft">
            <Timer className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-[#d9e7ff] uppercase tracking-widest">Coming Soon</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#eef5ff] mb-8 tracking-tight leading-tight">
            {title} is <br />
            <span className="gradient-text">Under Construction.</span>
          </h1>

          <p className="text-xl text-[#9ab0d0] mb-12 max-w-2xl mx-auto leading-relaxed">
            {description ||
              "We're working hard to bring you the best AI-native experience. Something amazing is in the works—stay tuned for updates!"}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <div className="relative max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="w-full px-6 py-4 rounded-full border border-white/15 bg-white/5 text-[#e8f1ff] placeholder:text-[#92a9cb] focus:outline-none focus:border-accent transition-colors pr-36"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] px-6 rounded-full font-extrabold text-sm hover:brightness-105 transition-all">
                Notify Me
              </button>
            </div>
          </div>

          <Link href="/" className="inline-flex items-center space-x-2 text-[#dbe6f8] font-bold hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
