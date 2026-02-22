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
        <div className="min-h-screen bg-slate-50 selection:bg-accent selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-12">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 tracking-tight">
                                {title}
                            </h1>
                            <p className="text-slate-500 font-medium">
                                Last Updated: {lastUpdated}
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-soft prose prose-slate prose-headings:text-primary prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600 max-w-none">
                            {children}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LegalLayout;
