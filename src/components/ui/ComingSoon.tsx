import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Timer, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
    title: string;
    description?: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
    return (
        <div className="min-h-screen bg-white selection:bg-accent selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center pt-32 pb-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full mb-8 animate-pulse-soft">
                        <Timer className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Coming Soon</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold text-primary mb-8 tracking-tight leading-tight">
                        {title} is <br />
                        <span className="gradient-text">Under Construction.</span>
                    </h1>

                    <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {description || "We're working hard to bring you the best AI-native experience. Something amazing is in the works—stay tuned for updates!"}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                        <div className="relative max-w-md w-full">
                            <input
                                type="email"
                                placeholder="Enter your email for updates"
                                className="w-full px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:border-accent transition-colors pr-36"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary text-white px-6 rounded-full font-bold text-sm hover:bg-primary/90 transition-all">
                                Notify Me
                            </button>
                        </div>
                    </div>

                    <Link href="/" className="inline-flex items-center space-x-2 text-primary font-bold hover:text-accent transition-colors">
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
