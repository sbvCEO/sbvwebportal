import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import AICalculator from "@/components/ui/AICalculator";
import Link from "next/link";
import { Cpu, FileText, LayoutDashboard, TrendingUp, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  const products = [
    {
      title: "Smart Deal Pricing",
      description: "Intelligent pricing, margin optimization, and discount guidance.",
      icon: Cpu,
      badge: "In Progress",
    },
    {
      title: "Smart Contract Management",
      description: "Risk detection, renewal tracking, and clause intelligence.",
      icon: FileText,
      badge: "Planned",
    },
    {
      title: "Smart Purchasing",
      description: "Vendor management, spend control, and approval automation.",
      icon: LayoutDashboard,
      badge: "Planned",
    },
  ];

  const targetAudiences = [
    {
      title: "Solo Founders",
      desc: "Enterprise-grade capabilities without the enterprise-level cost.",
      icon: Zap,
    },
    {
      title: "Growing SMBs",
      desc: "Scale with efficiency and insight across all business functions.",
      icon: TrendingUp,
    },
    {
      title: "Cost-Conscious Operators",
      desc: "Lean, AI-native tools built for confidence and resilience.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-[#08111f]">
      <Navbar />

      <main>
        <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 sb-grid-bg opacity-55" />
          <div className="absolute top-[-15rem] right-[-10rem] w-[34rem] h-[34rem] rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute bottom-[-17rem] left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-[#6489ff]/20 blur-[130px]" />
          <div className="relative max-w-7xl mx-auto px-6 text-center animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 animate-pulse-soft">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-xs font-bold text-[#d8e6ff] uppercase tracking-widest">
                Enterprise Intelligence. SME Pricing.
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#f3f8ff] mb-8 tracking-tight leading-[1.1]">
              The AI-Native Ecosystem for <br />
              <span className="gradient-text">Growing Businesses</span>
            </h1>
            <p className="text-xl text-[#9ab0d0] mb-12 max-w-2xl mx-auto leading-relaxed">
              Empowering solo entrepreneurs and SMBs with smart applications across finance, procurement, HR, and growth functions. No bloat. No traps. Just value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/products"
                className="bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] px-8 py-4 rounded-full font-extrabold text-lg hover:brightness-105 transition-all"
              >
                Explore Products
              </Link>
              <Link
                href="/pricing"
                className="bg-white/5 border border-white/15 text-[#e6edf7] px-8 py-4 rounded-full font-bold text-lg hover:border-accent/45 transition-all"
              >
                See Transparent Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#eef5ff] mb-4 uppercase tracking-widest text-sm">Who We Serve</h2>
              <p className="text-[#9ab0d0] font-medium">Built for the backbone of the economy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {targetAudiences.map((audience) => (
                <div key={audience.title} className="sb-glass p-8 rounded-3xl text-left group card-hover">
                  <div className="bg-white/5 p-3 rounded-2xl w-fit mb-6 text-accent border border-white/10">
                    <audience.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#edf4ff] mb-2">{audience.title}</h3>
                  <p className="text-[#9ab0d0] text-sm leading-relaxed">{audience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" id="products">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold text-[#f1f7ff] mb-6 tracking-tight">
                  One Platform. <br />Every Tool Your Business Needs.
                </h2>
                <p className="text-[#9ab0d0] text-lg">Pick and choose the tools you need. Scale as you grow. Pay only for what you use.</p>
              </div>
              <Link href="/products" className="text-accent font-bold flex items-center space-x-2 group shrink-0">
                <span>View All Products</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-[#f1f7ff] mb-6 tracking-tight">The Big SaaS Problem</h2>
              <p className="text-[#9ab0d0] text-lg">
                Why legacy enterprise software is failing modern agile businesses and how we&apos;re doing it differently.
              </p>
            </div>
            <div className="sb-glass p-8 md:p-12 rounded-[2.5rem]">
              <ComparisonTable />
            </div>
          </div>
        </section>

        <section className="py-24 overflow-hidden relative" id="ai-native">
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-accent/10 blur-[100px] rounded-full -ml-56 -mb-56" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-[#eff5ff]">
                  Built with an <br />
                  <span className="text-accent">AI-First Foundation</span>
                </h2>
                <p className="text-[#9ab0d0] text-lg mb-12 leading-relaxed">
                  We didn&apos;t just &quot;add&quot; AI as an afterthought. Our entire architecture is built around generative intelligence, continuous model evolution, and natural language interfaces.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      title: "Native Automation",
                      desc: "Workflows that self-optimize over time based on your business patterns.",
                    },
                    {
                      title: "Predictive Insights",
                      desc: "Stop reacting to the past. Start predicting your revenue and bottlenecks.",
                    },
                    {
                      title: "Voice & Text Control",
                      desc: "Interact with your entire business stack as easily as chatting with a colleague.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-2 rounded-lg mt-1 border border-accent/30">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-[#ebf2ff]">{item.title}</h4>
                        <p className="text-[#8ea7ca] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="sb-glass p-12 rounded-[3rem]">
                  <div className="flex flex-col items-center space-y-12 py-10">
                    <div className="flex space-x-12">
                      <div className="w-20 h-20 bg-accent p-0.5 rounded-2xl animate-pulse">
                        <div className="w-full h-full bg-[#08111f] rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-accent">
                          User
                        </div>
                      </div>
                      <div className="w-20 h-20 bg-white/20 p-0.5 rounded-2xl">
                        <div className="w-full h-full bg-[#08111f] rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-[#e0edff]">
                          Stack
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(25,211,197,0.35)]">
                      <Cpu className="w-12 h-12 text-[#08111f]" />
                    </div>
                    <div className="flex space-x-12">
                      <div className="w-20 h-20 bg-white/20 p-0.5 rounded-2xl">
                        <div className="w-full h-full bg-[#08111f] rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-[#e0edff]">
                          DB
                        </div>
                      </div>
                      <div className="w-20 h-20 bg-white/20 p-0.5 rounded-2xl">
                        <div className="w-full h-full bg-[#08111f] rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-[#e0edff]">
                          Edge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <AICalculator />
          </div>
        </section>

        <section className="py-24 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-[#f2f7ff] mb-8 tracking-tight">Our Transparency Promise</h2>
                <p className="text-[#9ab0d0] text-lg mb-10 leading-relaxed">
                  We believe business tools should be honest. No surprise fees, no hidden tiers, and no sales calls just to see a price.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#e8f1ff] mb-2 capitalize">No hidden tiers</h4>
                    <p className="text-[#8ea7ca] text-sm">Every feature is available based on the tool you buy. No paywalled essentials.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#e8f1ff] mb-2 capitalize">Public roadmap</h4>
                    <p className="text-[#8ea7ca] text-sm">See exactly what we&apos;re building and when. You vote on our next priorities.</p>
                  </div>
                </div>
              </div>
              <div className="sb-glass p-12 rounded-[2.5rem] text-center">
                <div className="bg-white/5 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 border border-white/10">
                  <ShieldCheck className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-[#edf4ff] mb-4">&quot;No Enterprise Lock-in&quot;</h3>
                <p className="text-[#9ab0d0] mb-8">Move your data at any time. We build for longevity, not trap-based growth.</p>
                <Link
                  href="/why-us"
                  className="text-[#dbe8ff] font-bold underline underline-offset-8 decoration-accent hover:text-accent transition-colors"
                >
                  Read the Ethics Manifesto
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-[#6f8fff]/10" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-extrabold text-[#f3f8ff] mb-8 tracking-tight">Start Managing Smarter Today.</h2>
            <p className="text-xl text-[#9ab0d0] mb-12 max-w-xl mx-auto">
              Join 500+ serious operators who ditched bloated SaaS for AI-native speed.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] px-12 py-5 rounded-full font-extrabold text-lg hover:brightness-105 transition-all inline-block"
            >
              Get Started for Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);
