import React from "react";
import LegalLayout from "@/components/layout/LegalLayout";

export default function TermsOfServicePage() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="February 22, 2026">
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p>
                    By accessing or using SmartBusinessValue (the "Service"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of a company or organization, you represent that you have the authority to bind that entity to these terms.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">2. Software License and Access</h2>
                <p className="mb-4">
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your internal business purposes.
                </p>
                <p className="bg-slate-50 border-l-4 border-accent p-4 italic text-slate-700">
                    <strong>Restriction:</strong> You may not reverse engineer, decompile, or attempt to extract the source code or underlying AI models of the Service.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">3. AI-Native Services and Content</h2>
                <p className="mb-4">
                    The Service utilizes artificial intelligence to generate insights, proposals, and other content ("Output").
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Ownership of Output:</strong> As between you and SmartBusinessValue, you own the Output generated through your use of the Service, provided you have paid all applicable fees.</li>
                    <li><strong>Accuracy Policy:</strong> AI models can produce inaccurate or biased results ("hallucinations"). <strong>You are solely responsible for reviewing and verifying any AI-generated Output before relying on it for business or legal decisions.</strong></li>
                    <li><strong>No Professional Advice:</strong> The Service is a tool, not a substitute for professional legal, financial, or tax advice.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
                <p className="mb-4">You agree not to use the Service to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any laws or regulations.</li>
                    <li>Infringe upon the intellectual property rights of others.</li>
                    <li>Transmit malware, viruses, or any destructive code.</li>
                    <li>Abuse or overload the AI processing infrastructure (rate-limiting apply).</li>
                    <li>Generate content that is harmful, discriminatory, or deceptive.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                <p>
                    All rights, title, and interest in and to the Service (excluding User Data and Output) are and will remain the exclusive property of SmartBusinessValue. This includes our proprietary algorithms, UI/UX design, and AI-native architecture.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="mb-4 font-bold text-slate-800">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMARTBUSINESSVALUE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS REPUTATION.
                </p>
                <p className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <strong>Liability Cap:</strong> In no event shall our total aggregate liability exceed the total amount paid by you to SmartBusinessValue in the twelve (12) months preceding the event giving rise to the claim.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. Disclaimers</h2>
                <p>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p>
                    We reserve the right to suspend or terminate your access to the Service at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
                <p>
                    Questions about the Terms of Service? Reach out to <span className="font-bold text-primary">legal@smartbusinessvalue.com</span>.
                </p>
            </section>
        </LegalLayout>
    );
}
