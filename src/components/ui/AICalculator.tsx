"use client";

import React, { useState } from "react";
import { Calculator, TrendingDown, DollarSign, Users } from "lucide-react";

const AICalculator = () => {
  const [currentSpend, setCurrentSpend] = useState(5000);
  const [teamSize, setTeamSize] = useState(25);

  const monthlySavings = currentSpend * 0.4 + teamSize * 150;
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="sb-glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full -mr-20 -mt-20" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-white/10 p-2 rounded-lg border border-white/10">
              <Calculator className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-[#eaf2ff]">AI Cost Savings Calculator</h2>
          </div>
          <p className="text-[#9ab0d0] mb-10 leading-relaxed">
            See how much you can save by switching from bloated enterprise SaaS to SmartBusinessValue&apos;s lean, AI-native toolkit.
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold flex items-center space-x-2 text-[#d9e7ff]">
                  <DollarSign className="w-4 h-4" />
                  <span>Current Monthly SaaS Spend</span>
                </label>
                <span className="text-accent font-bold">${currentSpend}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={currentSpend}
                onChange={(e) => setCurrentSpend(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold flex items-center space-x-2 text-[#d9e7ff]">
                  <Users className="w-4 h-4" />
                  <span>Team Size</span>
                </label>
                <span className="text-accent font-bold">{teamSize} Users</span>
              </div>
              <input
                type="range"
                min="1"
                max="500"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-4 bg-accent/20 rounded-2xl mb-6">
              <TrendingDown className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-[#92a9cb] text-sm font-bold uppercase tracking-widest mb-2">Estimated Annual Savings</h3>
            <div className="text-5xl md:text-6xl font-extrabold text-[#f3f8ff]">${yearlySavings.toLocaleString()}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10">
              <p className="text-[#92a9cb] text-xs font-bold uppercase mb-2">Monthly Potential</p>
              <p className="text-2xl font-bold text-accent">${monthlySavings.toLocaleString()}</p>
            </div>
            <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10">
              <p className="text-[#92a9cb] text-xs font-bold uppercase mb-2">Efficiency Gain</p>
              <p className="text-2xl font-bold text-accent">+65%</p>
            </div>
          </div>

          <button className="w-full mt-10 bg-gradient-to-r from-accent to-[#5a85ff] text-[#08111f] py-4 rounded-xl font-extrabold hover:brightness-105 transition-all flex items-center justify-center space-x-2">
            <span>Get These Results Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICalculator;
