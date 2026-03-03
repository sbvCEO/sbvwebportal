import React from "react";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const rows = [
    { feature: "Pricing Model", big: "Opaque/Enterprise", sbv: "Transparent/Flat" },
    { feature: "AI Integration", big: "Add-on/Experimental", sbv: "Foundational Native" },
    { feature: "Onboarding Time", big: "3-6 Months", sbv: "Immediate" },
    { feature: "Feature Bloat", big: "High/Distracting", sbv: "Zero/Modular" },
    { feature: "Ship Velocity", big: "Quarterly", sbv: "Weekly Updates" },
    { feature: "Enterprise Lock-in", big: "Forced Tiers", sbv: "No Lock-in" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[720px]">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-6 pr-6 text-xs font-bold text-[#d9e7ff] uppercase tracking-[0.2em]">Capabilities</th>
            <th className="py-6 px-6 text-xs font-bold text-[#7489ac] uppercase tracking-[0.2em]">Legacy Big SaaS</th>
            <th className="py-6 pl-6 text-xs font-bold text-accent uppercase tracking-[0.2em] bg-accent/[0.07] rounded-t-2xl">
              SmartBusinessValue
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-white/5">
              <td className="py-6 pr-6 text-sm font-semibold text-[#dbe8ff]">{row.feature}</td>
              <td className="py-6 px-6 text-sm text-[#89a0c4]">
                <div className="flex items-center space-x-2">
                  <X className="w-4 h-4 text-rose-400" />
                  <span>{row.big}</span>
                </div>
              </td>
              <td className="py-6 pl-6 text-sm text-[#e8f8ff] font-semibold bg-accent/[0.07]">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>{row.sbv}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td />
            <td className="bg-accent/[0.07] rounded-b-2xl py-6" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ComparisonTable;
