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
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-100">
                        <th className="py-6 pr-6 text-sm font-bold text-primary uppercase tracking-widest">Capabilities</th>
                        <th className="py-6 px-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Legacy Big SaaS</th>
                        <th className="py-6 pl-6 text-sm font-bold text-accent uppercase tracking-widest bg-accent/[0.03] rounded-t-2xl">SmartBusinessValue</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-50 group">
                            <td className="py-6 pr-6 text-sm font-bold text-primary">{row.feature}</td>
                            <td className="py-6 px-6 text-sm text-slate-400">
                                <div className="flex items-center space-x-2">
                                    <X className="w-4 h-4 text-red-400" />
                                    <span>{row.big}</span>
                                </div>
                            </td>
                            <td className="py-6 pl-6 text-sm text-primary font-semibold bg-accent/[0.03]">
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
                        <td></td>
                        <td></td>
                        <td className="bg-accent/[0.03] rounded-b-2xl py-6"></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ComparisonTable;
