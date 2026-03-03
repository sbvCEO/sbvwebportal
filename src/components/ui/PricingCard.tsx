import React from "react";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular,
  ctaText = "Get Started",
}) => {
  return (
    <div
      className={`relative p-10 rounded-3xl border ${
        isPopular
          ? "bg-[#0e1c35] border-accent shadow-[0_24px_45px_-28px_rgba(7,15,30,0.95)] scale-[1.02]"
          : "sb-glass"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-[#08111f] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-[#ebf2ff] mb-2">{name}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-5xl font-extrabold text-[#f3f8ff]">{price}</span>
        {price !== "Custom" && <span className="text-[#8ea7ca] text-sm ml-1">/mo</span>}
      </div>
      <p className="text-[#9ab0d0] text-sm mb-8 leading-relaxed">{description}</p>
      <button
        className={`w-full py-4 rounded-xl font-bold text-sm transition-all mb-8 ${
          isPopular
            ? "bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] hover:brightness-105"
            : "bg-[#152845] text-[#e8f1ff] border border-white/10 hover:border-accent/50"
        }`}
      >
        {ctaText}
      </button>
      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-accent shrink-0" />
            <span className="text-[#b2c2dc] text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
