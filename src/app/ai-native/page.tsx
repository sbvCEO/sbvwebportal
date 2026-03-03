import LegalLayout from "@/components/layout/LegalLayout";
import { Cpu, Cloud } from "lucide-react";

export default function AINativePage() {
  return (
    <LegalLayout title="AI-Native Architecture" lastUpdated="February 22, 2026">
      <section className="mb-12">
        <p className="text-xl text-[#b4c4de] leading-relaxed mb-8">
          At SmartBusinessValue, being AI-native means more than just using LLMs. It means building on a foundation that assumes intelligence is an inherent part of the data flow, the UI, and the business logic.
        </p>
        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 border-l-8 border-l-accent">
          <h4 className="font-bold text-[#ebf2ff] mb-2">Our Core Belief:</h4>
          <p className="text-lg text-[#c7d7ef] italic font-medium">
            &quot;AI makes building easy, but sustaining, evolving, and maintaining business-critical applications is where the true value lies.&quot;
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-extrabold text-[#f2f6ff] mb-8 tracking-tight">Cloud-Native, AI-First</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="bg-white/5 p-3 rounded-xl mt-1 border border-white/10">
              <Cloud className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-bold text-[#e8f1ff] mb-1">Architecture for Longevity</h4>
              <p className="text-[#9ab0d0] text-sm">
                Every application in our suite is built to remain current and relevant through technological shifts.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-white/5 p-3 rounded-xl mt-1 border border-white/10">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-bold text-[#e8f1ff] mb-1">Embedded Intelligence</h4>
              <p className="text-[#9ab0d0] text-sm">
                We don&apos;t &quot;bolt on&quot; AI features. We design workflows around generative and predictive capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 border-t border-white/10">
        <p className="text-[#b4c4de]">
          Our cloud-native applications deliver modern capabilities without the excessive cost or operational friction of traditional platforms. We handle the complexity of maintenance and evolution, so you can focus on your business goals.
        </p>
      </section>
    </LegalLayout>
  );
}
