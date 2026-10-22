import React, { useState } from 'react';
import { MapPin, Navigation, Tag, RefreshCw, SlidersHorizontal, User } from 'lucide-react';

export default function NearbyMap({ clothes, onProposeSwap }) {
  const [distanceRadius, setDistanceRadius] = useState(5); // default 5 km radius
  const [selectedPin, setSelectedPin] = useState(null);

  // Simulated neighborhood coordinates relative to current location
  const mapLocations = [
    { id: 1, name: 'Downtown Center', distance: 1.2, top: '40%', left: '35%', count: 8 },
    { id: 2, name: 'West End Hub', distance: 2.5, top: '25%', left: '60%', count: 5 },
    { id: 3, name: 'North Suburbs', distance: 4.8, top: '65%', left: '70%', count: 3 },
    { id: 4, name: 'South District', distance: 3.1, top: '75%', left: '25%', count: 6 },
  ];

  // Filter listings based on radius slider
  const nearbyItems = clothes.filter((item) => {
    // Parse distance number or fallback
    const distMatch = item.location ? parseFloat(item.location) : 2.0;
    const dist = isNaN(distMatch) ? 2.5 : distMatch;
    return dist <= distanceRadius;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
            Geolocation Swap Discovery
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">Nearby Swap Map</h1>
          <p className="text-emerald-200/80 text-xs mt-1">
            Find clothing swappers in your neighborhood to arrange fast, zero-shipping local exchanges.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/50 px-4 py-2 rounded-2xl text-xs font-bold text-emerald-300">
          <Navigation className="w-4 h-4 text-emerald-400" />
          Location Active
        </div>
      </div>

      {/* Main Grid: Interactive Visual Map + Swapper Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Interactive Neighborhood Map (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-4">
          
          {/* Controls Bar */}
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs font-bold">
            <div className="flex items-center gap-2 text-gray-700">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>Search Radius: <strong className="text-emerald-700">{distanceRadius} km</strong></span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={distanceRadius}
              onChange={(e) => setDistanceRadius(Number(e.target.value))}
              className="w-36 accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Map Canvas Visualizer */}
          <div className="relative w-full h-[450px] bg-emerald-950/90 rounded-2xl overflow-hidden border border-emerald-900 shadow-inner flex items-center justify-center">
            
            {/* Grid Map Background Overlay */}
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ 
                backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
              }} 
            />

            {/* Radar Pulsing User Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-emerald-400 opacity-75"></span>
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-lg text-white font-bold text-xs z-10">
                  You
                </div>
              </div>
              <span className="bg-emerald-900/90 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 border border-emerald-700">
                Your Location
              </span>
            </div>

            {/* Neighborhood Pins */}
            {mapLocations.map((pin) => {
              const inRange = pin.distance <= distanceRadius;
              if (!inRange) return null;

              return (
                <div
                  key={pin.id}
                  onClick={() => setSelectedPin(pin)}
                  style={{ top: pin.top, left: pin.left }}
                  className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 group transition-transform hover:scale-110 z-20"
                >
                  <div className="bg-white text-gray-900 px-2.5 py-1 rounded-full text-[10px] font-extrabold shadow-md border border-emerald-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    {pin.name} ({pin.count})
                  </div>
                </div>
              );
            })}

            {/* Active Pin Popover */}
            {selectedPin && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-emerald-200 shadow-xl flex items-center justify-between z-30">
                <div>
                  <h4 className="font-bold text-xs text-gray-900">{selectedPin.name}</h4>
                  <p className="text-[10px] text-gray-500">{selectedPin.distance} km away • {selectedPin.count} available clothes</p>
                </div>
                <button 
                  onClick={() => setSelectedPin(null)}
                  className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-lg hover:bg-emerald-200"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>

        {/* Right Column: Local Swapper Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Local Items within {distanceRadius} km ({nearbyItems.length})
            </h2>
          </div>

          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
            {nearbyItems.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center space-y-2">
                <MapPin className="w-8 h-8 text-gray-300 mx-auto" />
                <p className="text-xs font-bold text-gray-600">No swappers found within {distanceRadius} km</p>
                <p className="text-[11px] text-gray-400">Try expanding the search radius slider on the map!</p>
              </div>
            ) : (
              nearbyItems.map((item) => (
                <div
                  key={item._id || item.id}
                  className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">{item.brand}</span>
                      <h4 className="font-bold text-xs text-gray-900 line-clamp-1">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded-md font-semibold">Size {item.size}</span>
                        <span className="flex items-center gap-0.5 text-emerald-700 font-bold">
                          <Tag className="w-3 h-3" /> ${item.estimatedValue}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onProposeSwap(item)}
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition active:scale-95 flex items-center justify-center"
                    title="Propose Swap"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}