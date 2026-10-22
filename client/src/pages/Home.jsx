import React, { useState } from 'react';
import ItemCard from '../components/ItemCard';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function Home({ clothes, loading, onProposeSwap }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tops', 'Dresses', 'Pants', 'Outerwear', 'Shoes', 'Accessories'];

  const filteredClothes = clothes.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-16">
      
      {/* 1. DARK HERO BANNER */}
      <div className="bg-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-bold tracking-wider uppercase">
            ⚡ Sustainable Fashion Marketplace
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Exchange Apparel Directly. <br />
            <span className="text-emerald-400">Zero Waste. Zero Expense.</span>
          </h1>
          <p className="text-emerald-200/80 text-sm leading-relaxed">
            Swap high-quality pre-loved clothing directly with locals near you. Fair market value value-based swap calculator ensures equal value swaps without monetary transactions.
          </p>
        </div>
      </div>

      {/* 2. SEARCH & FILTER SECTION */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search clothes, brands (Patagonia, Zara, Nike...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-initial flex items-center justify-between gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700">
              <span>Nearest distance</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-100">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-gray-100 text-xs">
          <span className="font-bold text-gray-400 text-[11px] uppercase mr-2">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. CLOTHING CARDS GRID */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Showcase & Available Clothing Items ({filteredClothes.length})
          </h2>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400 font-bold">
            Loading clothes from MongoDB...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredClothes.map((item) => (
              <ItemCard key={item._id || item.id} item={item} onProposeSwap={onProposeSwap} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}