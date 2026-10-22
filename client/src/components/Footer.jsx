import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-200/80 text-xs py-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">♻️</span>
            <span className="font-black text-white text-lg tracking-tight">ReThread Marketplace</span>
          </div>
          <p className="text-[11px] leading-relaxed text-emerald-300/70">
            Promoting circular clothing exchange to eliminate fast fashion waste through direct peer-to-peer barter-based community swaps.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Marketplace Nav</h4>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#" className="hover:text-emerald-400">Browse Clothing</a></li>
            <li><a href="#" className="hover:text-emerald-400">Value Calculator</a></li>
            <li><a href="#" className="hover:text-emerald-400">Swap Negotiation Hub</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Environmental Footprint</h4>
          <ul className="space-y-2 text-[11px]">
            <li>🌱 +12.5 kg CO₂ offset per clothing swap</li>
            <li>💧 Saved ~2,700 liters of water per apparel footprint</li>
            <li>♻️ 100% Monetary Free, 100% Barter</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Platform Actions</h4>
          <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition">
            ♻️ Community Swap
          </button>
        </div>
      </div>
    </footer>
  );
}