import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingCard from "@/components/ui/PricingCard";

export default function PricingPage() {
    const soloPlans = [
        {
            title: "Single Application",
            price: "199",
            description: "Perfect for solo entrepreneurs starting with one core function.",
            features: ["Full access to one app", "Cloud-native security", "Standard AI processing", "Email support"],
        },
        {
            title: "Full Suite",
            price: "499",
            description: "The complete ecosystem for independent operators.",
            features: ["All current & future apps", "Priority AI processing", "Predictive insights", "Priority support"],
            popular: true,
        }
    ];

    const smePlans = [
        {
            title: "SME Single App",
            price: "499",
            description: "Enterprise power for growing teams under 200 people.",
            features: ["Full app access", "Team collaboration", "Advanced analytics", "Onboarding support"],
        },
        {
            title: "SME Full Suite",
            price: "999",
            description: "Everything you need to operate a modern business at scale.",
            features: ["All current & future apps", "Unlimited users", "Custom AI workflows", "Account manager"],
            popular: true,
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 selection:bg-accent selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24">
                <section className="container mx-auto px-6 text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-primary mb-6 tracking-tight">Transparent Pricing</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Enterprise-grade capabilities without the enterprise-level cost or complexity. Choose the plan that fits your stage.
                    </p>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <h2 className="text-2xl font-bold text-primary mb-10 text-center uppercase tracking-widest">Solo Entrepreneur</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {soloPlans.map((plan) => (
                            <PricingCard
                                key={plan.title}
                                name={plan.title}
                                price={plan.price}
                                description={plan.description}
                                features={plan.features}
                                isPopular={plan.popular}
                            />
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <h2 className="text-2xl font-bold text-primary mb-10 text-center uppercase tracking-widest">Small & Medium Enterprise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {smePlans.map((plan) => (
                            <PricingCard
                                key={plan.title}
                                name={plan.title}
                                price={plan.price}
                                description={plan.description}
                                features={plan.features}
                                isPopular={plan.popular}
                            />
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-6">
                    <div className="bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden max-w-4xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full" />
                        <h2 className="text-3xl font-extrabold mb-6 tracking-tight text-white">Large Enterprise</h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            For organizations exceeding SME thresholds or requiring advanced integration and custom capabilities.
                        </p>
                        <button className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
                            Contact Sales for Custom Quote
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
