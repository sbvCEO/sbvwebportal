import React from "react";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon: Icon, badge }) => {
  return (
    <div className="sb-glass p-8 rounded-2xl card-hover flex flex-col items-start text-left">
      <div className="bg-white/5 p-3 rounded-xl mb-6 text-accent border border-white/10">
        <Icon className="w-6 h-6" />
      </div>
      {badge && (
        <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-4">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold text-[#edf4ff] mb-3">{title}</h3>
      <p className="text-[#9ab0d0] text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      <Link href="/products" className="flex items-center space-x-2 text-[#dbe6f8] font-bold text-sm group hover:text-accent transition-colors">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ProductCard;
