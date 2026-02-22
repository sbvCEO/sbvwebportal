import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import {
    Cpu,
    BarChart3,
    Users,
    FileText,
    LayoutDashboard,
    Briefcase,
    Activity,
    Search,
    Zap
} from "lucide-react";

export default function ProductsPage() {
    const products = [
        { title: "Smart Deal Pricing", description: "Intelligent pricing, margin optimization, and discount guidance.", icon: Cpu, badge: "In Progress" },
        { title: "Smart Contract Management", description: "Risk detection, renewal tracking, and clause intelligence.", icon: FileText, badge: "Planned" },
        { title: "Smart Purchasing", description: "Vendor management, spend control, and approval automation.", icon: LayoutDashboard, badge: "Planned" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-5xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
                            One Unified <span className="gradient-text">Ecosystem.</span> <br />
                            Infinite Business Value.
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            Modular tools built to solve specific business problems. No bloat, no forced bundles. Pick what you need today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.title} {...product} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
