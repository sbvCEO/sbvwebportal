import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto sb-glass rounded-[3rem] shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-[#0d1a32] text-white relative border-r border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
              <h1 className="text-5xl font-extrabold mb-8 tracking-tight text-[#f2f7ff]">
                Let&apos;s Talk <br />
                Value.
              </h1>
              <p className="text-[#9ab0d0] text-lg mb-12 leading-relaxed">
                Have questions about our AI stack or custom pricing? Our team of serious operators is ready to help.
              </p>

              <div className="space-y-8 relative z-10">
                <div className="flex items-center space-x-6">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[#8ea7ca] text-xs font-bold uppercase tracking-widest">Email Us</p>
                    <p className="font-bold text-[#eaf2ff]">hello@smartbusinessvalue.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[#8ea7ca] text-xs font-bold uppercase tracking-widest">Chat with us</p>
                    <p className="font-bold text-[#eaf2ff]">24/7 AI-Assistant Support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[#8ea7ca] text-xs font-bold uppercase tracking-widest">Office</p>
                    <p className="font-bold text-[#eaf2ff]">Cloud-Native (Global)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-20 bg-[#0b1428]">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#dbe8ff] px-1">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#eaf2ff] placeholder:text-[#8ea7ca] focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#dbe8ff] px-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#eaf2ff] placeholder:text-[#8ea7ca] focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#dbe8ff] px-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#eaf2ff] placeholder:text-[#8ea7ca] focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#dbe8ff] px-1">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#eaf2ff] focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all appearance-none cursor-pointer">
                    <option>Product Inquiry</option>
                    <option>Pricing Question</option>
                    <option>Custom AI Requirements</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#dbe8ff] px-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help your business grow?"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#eaf2ff] placeholder:text-[#8ea7ca] focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] py-5 rounded-xl font-extrabold flex items-center justify-center space-x-3 hover:brightness-105 transition-all">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
