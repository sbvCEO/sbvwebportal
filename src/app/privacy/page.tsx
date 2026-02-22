import React from "react";
import LegalLayout from "@/components/layout/LegalLayout";

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="February 22, 2026">
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                    SmartBusinessValue ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and AI-native business tools.
                </p>
                <p>
                    By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the services.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <p className="mb-4 text-slate-700 font-semibold italic">We collect information that you provide directly to us, as well as information collected automatically when you use our services.</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Personal Data:</strong> Name, email address, billing address, and payment information.</li>
                    <li><strong>Business Data:</strong> Information you input into our tools, such as CRM data, financial records, and operational details.</li>
                    <li><strong>Usage Data:</strong> IP address, browser type, device information, and how you interact with our platform.</li>
                    <li><strong>AI Training Data:</strong> To improve our services, we may use de-identified and aggregated data derived from your interactions with our AI models. <strong>We do not use your sensitive business data for training without explicit consent.</strong></li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Process transactions and send billing information.</li>
                    <li>Develop new AI features and optimize existing models.</li>
                    <li>Communicate with you about updates, security alerts, and support.</li>
                    <li>Protect against fraud and ensure the security of our services.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                <p className="mb-4">
                    We do not sell your personal or business data. We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who perform services for us (e.g., payment processing via Stripe, hosting via Vercel).</li>
                    <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of SmartBusinessValue and our users.</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale of assets, or acquisition.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p>
                    We implement industry-standard security measures, including encryption (AES-256) and secure access controls, to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="mb-4">
                    Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>The right to access the data we hold about you.</li>
                    <li>The right to request correction or deletion of your data.</li>
                    <li>The right to object to or restrict processing.</li>
                    <li>The right to data portability.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
                <p>
                    Your information may be transferred to and maintained on servers located outside of your state or country. By using our services, you consent to these transfers.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at: <br />
                    <span className="font-bold text-primary">legal@smartbusinessvalue.com</span>
                </p>
            </section>
        </LegalLayout>
    );
}
