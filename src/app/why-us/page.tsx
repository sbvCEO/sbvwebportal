import LegalLayout from "@/components/layout/LegalLayout";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function WhyUsPage() {
    return (
        <LegalLayout title="Why SmartBusinessValue" lastUpdated="February 22, 2026">
            <section className="mb-12">
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    In the modern AI era, building software is no longer the primary challenge. Sustaining, evolving, and continuously improving business-critical applications over years of technological change is where the real complexity lies.
                </p>
                <div className="bg-primary text-white p-8 rounded-3xl shadow-xl mb-12">
                    <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-4">The SBV Objective</h3>
                    <p className="text-2xl font-bold leading-tight">
                        To provide powerful, continuously evolving business applications that remain current, relevant, and valuable — allowing organizations to operate with confidence today and resilience tomorrow.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-extrabold text-primary mb-8 tracking-tight">Main Strategy Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
                        <h4 className="font-bold text-primary mb-2">Longevity Over Speed</h4>
                        <p className="text-slate-500 text-sm">AI makes building easy, but sustaining value over time is where legacy is built.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <ShieldCheck className="w-10 h-10 text-accent mx-auto mb-4" />
                        <h4 className="font-bold text-primary mb-2">Focus on Core</h4>
                        <p className="text-slate-500 text-sm">Businesses shouldn't waste time building internal tools. We handle the systems, you handle the growth.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
                        <h4 className="font-bold text-primary mb-2">Modern Value</h4>
                        <p className="text-slate-500 text-sm">Existing solutions are costly & outdated. We deliver enterprise-grade tech on a cloud-native foundation.</p>
                    </div>
                </div>
            </section>

            <section>
                <p className="text-slate-600 leading-relaxed">
                    SmartBusinessValue exists to remove distraction. We enable entrepreneurs and small to mid-sized organizations to focus on their core business rather than spending time and resources designing, coding, and maintaining internal support systems.
                </p>
            </section>
        </LegalLayout>
    );
}
