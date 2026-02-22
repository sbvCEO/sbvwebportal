import LegalLayout from "@/components/layout/LegalLayout";

export default function AboutPage() {
    return (
        <LegalLayout title="Mission & Vision" lastUpdated="February 22, 2026">
            <section className="mb-12">
                <h2 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">Mission Statement</h2>
                <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-accent pl-6">
                    To empower solo entrepreneurs and growing businesses with intelligent, cloud-native SaaS solutions that deliver enterprise-grade capabilities without enterprise-level cost or complexity.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">Vision Statement</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                    To build a unified ecosystem of smart business applications that enables organizations of any size to operate with efficiency, insight, and confidence across finance, procurement, HR, legal, and growth functions.
                </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
                <p className="text-slate-500">
                    We believe that in the AI era, software should be a silent partner that elevates your capability. SmartBusinessValue is built for longevity, engineering resilience into every line of code so you can focus on building your legacy.
                </p>
            </section>
        </LegalLayout>
    );
}
