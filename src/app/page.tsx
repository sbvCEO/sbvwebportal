import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import AICalculator from "@/components/ui/AICalculator";
import {
  Cpu,
  BarChart3,
  Users,
  FileText,
  LayoutDashboard,
  Briefcase,
  Activity,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const products = [
    { title: "Smart Deal Pricing", description: "Intelligent pricing, margin optimization, and discount guidance.", icon: Cpu, badge: "In Progress" },
    { title: "Smart Contract Management", description: "Risk detection, renewal tracking, and clause intelligence.", icon: FileText, badge: "Planned" },
    { title: "Smart Purchasing", description: "Vendor management, spend control, and approval automation.", icon: LayoutDashboard, badge: "Planned" },
  ];

  const targetAudiences = [
    { title: "Solo Founders", desc: "Enterprise-grade capabilities without the enterprise-level cost.", icon: Zap },
    { title: "Growing SMBs", desc: "Scale with efficiency and insight across all business functions.", icon: TrendingUp },
    { title: "Cost-Conscious Operators", desc: "Lean, AI-native tools built for confidence and resilience.", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-accent selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full -mr-96 -mt-96" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full mb-8 animate-pulse-soft">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Enterprise Intelligence. SME Pricing.</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1]">
              The AI-Native Ecosystem for <br />
              <span className="gradient-text">Growing Businesses</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Empowering solo entrepreneurs and SMBs with smart applications across finance, procurement, HR, and growth functions. No bloat. No traps. Just value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-105">
                Explore Products
              </button>
              <button className="bg-white border border-slate-200 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:scale-105">
                See Transparent Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-widest text-sm">Who We Serve</h2>
              <p className="text-slate-500 font-medium">Built for the backbone of the economy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {targetAudiences.map((audience) => (
                <div key={audience.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-left group hover:border-accent transition-colors">
                  <div className="bg-slate-50 p-3 rounded-2xl w-fit mb-6 text-primary group-hover:text-accent transition-colors">
                    <audience.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{audience.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{audience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Ecosystem Preview */}
        <section className="py-24 bg-white" id="products">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold text-primary mb-6 tracking-tight">One Platform. <br />Every Tool Your Business Needs.</h2>
                <p className="text-slate-500 text-lg">Pick and choose the tools you need. Scale as you grow. Pay only for what you use.</p>
              </div>
              <button className="text-accent font-bold flex items-center space-x-2 group shrink-0">
                <span>View All Products</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl font-extrabold text-primary mb-6 tracking-tight">The Big SaaS Problem</h2>
              <p className="text-slate-500 text-lg">Why legacy enterprise software is failing modern agile businesses — and how we're doing it differently.</p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-soft">
              <ComparisonTable />
            </div>
          </div>
        </section>

        {/* AI-Native Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative" id="ai-native">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full -ml-48 -mb-48" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">Built with an <br /><span className="text-accent">AI-First Foundation</span></h2>
                <p className="text-white/70 text-lg mb-12 leading-relaxed">
                  We didn't just "add" AI as an afterthought. Our entire architecture is built around generative intelligence, continuous model evolution, and natural language interfaces.
                </p>
                <div className="space-y-8">
                  {[
                    { title: "Native Automation", desc: "Workflows that self-optimize over time based on your business patterns." },
                    { title: "Predictive Insights", desc: "Stop reacting to the past. Start predicting your revenue and bottlenecks." },
                    { title: "Voice & Text Control", desc: "Interact with your entire business stack as easily as chatting with a colleague." }
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-2 rounded-lg mt-1">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md">
                  {/* Abstract AI Diagram Placeholder */}
                  <div className="flex flex-col items-center space-y-12 py-10">
                    <div className="flex space-x-12">
                      <div className="w-20 h-20 bg-accent p-0.5 rounded-2xl animate-pulse"><div className="w-full h-full bg-primary rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-accent">User</div></div>
                      <div className="w-20 h-20 bg-white/20 p-0.5 rounded-2xl"><div className="w-full h-full bg-primary rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-white/50">Stack</div></div>
                    </div>
                    <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,194,255,0.3)]">
                      <Cpu className="w-12 h-12 text-primary" />
                    </div>
                    <div className="flex space-x-12">
                      <div className="w-20 h-20 bg-white/20 p-0.5 rounded-2xl"><div className="w-full h-full bg-primary rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-white/50">DB</div></div>
                      <div className="w-20 h-20 bg-white/20 p-0.5 rounded-2xl"><div className="w-full h-full bg-primary rounded-[14px] flex items-center justify-center font-bold text-xs uppercase text-white/50">Edge</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Calculator */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <AICalculator />
          </div>
        </section>

        {/* Transparency Promise */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tight">Our Transparency Promise</h2>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                  We believe business tools should be honest. No surprise fees, no hidden tiers, and no sales calls just to see a price.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-primary mb-2 capitalize">No hidden tiers</h4>
                    <p className="text-slate-400 text-sm">Every feature is available based on the tool you buy. No paywalled essentials.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 capitalize">Public roadmap</h4>
                    <p className="text-slate-400 text-sm">See exactly what we're building and when. You vote on our next priorities.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-12 rounded-[2.5rem] shadow-soft border border-slate-100 text-center">
                <div className="bg-slate-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
                  <ShieldCheck className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">"No Enterprise Lock-in"</h3>
                <p className="text-slate-500 mb-8">Move your data at any time. We build for longevity, not trap-based growth.</p>
                <button className="text-primary font-bold underline underline-offset-8 decoration-accent">Read the Ethics Manifesto</button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-extrabold text-primary mb-8 tracking-tight">Start Managing Smarter Today.</h2>
            <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto">Join 500+ serious operators who ditched bloated SaaS for AI-native speed.</p>
            <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20">
              Get Started for Free
            </button>
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
