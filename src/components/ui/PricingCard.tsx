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
    ctaText = "Get Started"
}) => {
    return (
        <div className={`relative bg-white p-10 rounded-3xl border ${isPopular ? "border-accent shadow-xl scale-105 z-10" : "border-slate-100 shadow-sm"
            }`}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Most Popular
                </div>
            )}
            <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
            <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-primary">{price}</span>
                {price !== "Custom" && <span className="text-slate-400 text-sm ml-1">/mo</span>}
            </div>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {description}
            </p>
            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all mb-8 ${isPopular ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20" : "bg-primary text-white hover:bg-primary/90"
                }`}>
                {ctaText}
            </button>
            <div className="space-y-4">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;
