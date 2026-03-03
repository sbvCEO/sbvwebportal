import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
}

const LegalLayout = ({ children, title, lastUpdated }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-[#08111f]">
      <Navbar />

      <main className="pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#eaf1ff] mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-[#8ea7ca] font-medium">Last Updated: {lastUpdated}</p>
          </div>

          <div className="sb-glass p-8 md:p-12 rounded-[2.5rem] shadow-soft prose prose-invert prose-p:text-[#b4c4de] prose-li:text-[#b4c4de] prose-strong:text-[#e6edf7] prose-headings:text-[#f2f6ff] max-w-none">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalLayout;
