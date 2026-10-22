import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, RefreshCw, Tag, ShieldCheck, Heart, User, Clock } from 'lucide-react';

export default function ItemDetail({ clothes, onProposeSwap }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (clothes && clothes.length > 0) {
      const found = clothes.find((c) => (c._id === id || c.id === id));
      setItem(found || clothes[0]); // fallback to first item if direct link testing
    }
  }, [id, clothes]);

  if (!item) {
    return (
      <div className="text-center py-20 font-bold text-gray-500">
        Loading apparel details...
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-emerald-700 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Browse
      </button>

      {/* Main Detail Grid */}
      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8">
        
        {/* Left: Large Image View (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-inner">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-700/50">
              ⚡ {item.estimatedValue} pts Value
            </span>
          </div>
        </div>

        {/* Right: Item Info & Swap Action (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Header Badges */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {item.brand}
              </span>
              <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Condition: {item.condition}
              </span>
            </div>

            {/* Title & Description */}
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900">{item.title}</h1>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              {item.description || 'High-quality pre-loved clothing piece kept in excellent condition. Ready for direct peer-to-peer eco-swap to prevent fast fashion textile waste.'}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Size</span>
                <span className="text-sm font-extrabold text-gray-800">{item.size}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Category</span>
                <span className="text-sm font-extrabold text-gray-800">{item.category}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Est. Value</span>
                <span className="text-sm font-extrabold text-emerald-700">${item.estimatedValue}</span>
              </div>
            </div>

            {/* Owner Info Box */}
            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {item.owner ? item.owner[0] : 'S'}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">{item.owner || 'Community Swapper'}</h4>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" /> {item.location || '1.2 km away'}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified
              </span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                onProposeSwap(item);
                navigate('/swaps');
              }}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-bold shadow-md transition flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Propose Swap Deal
            </button>
            <Link
              to="/swaps"
              className="py-3 px-5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl text-xs font-bold transition text-center"
            >
              Negotiate Chat
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}