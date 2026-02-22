import React from "react";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon: Icon, badge }) => {
    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm card-hover flex flex-col items-start text-left">
            <div className="bg-slate-50 p-3 rounded-xl mb-6 text-accent">
                <Icon className="w-6 h-6" />
            </div>
            {badge && (
                <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-4">
                    {badge}
                </span>
            )}
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>
            <button className="flex items-center space-x-2 text-primary font-bold text-sm group">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

export default ProductCard;
