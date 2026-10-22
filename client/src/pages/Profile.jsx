// import React, { useState } from 'react';
// import { Leaf, Droplets, Trash2, Shirt, RefreshCw, Award, CheckCircle2, MapPin } from 'lucide-react';

// export default function Profile({ userListings = [] }) {
//   const [activeTab, setActiveTab] = useState('inventory'); // 'inventory' | 'history'
//   const displayName = currentUser ? currentUser.name : "Alex Johnson";

//   const userProfile = {
//     name: 'Alex Johnson',
//     email: 'alex.j@example.com',
//     location: 'Downtown (1.2 km away)',
//     joined: 'October 2026',
//     avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
//     stats: {
//       swapsCompleted: 14,
//       co2SavedKg: 42.5,
//       waterSavedLiters: 18500,
//       landfillDivertedItems: 18,
//     },
//     history: [
//       {
//         id: 'HIST-1',
//         itemGiven: 'Chunky Knit Sweater',
//         itemReceived: 'Denim Jacket',
//         partner: 'Elena R.',
//         date: 'Oct 12, 2026',
//       },
//       {
//         id: 'HIST-2',
//         itemGiven: 'Graphic Vintage Tee',
//         itemReceived: 'Linen Shorts',
//         partner: 'Marcus K.',
//         date: 'Sep 28, 2026',
//       },
//     ],
//   };

//   return (
//     <div className="space-y-8 pb-12">
//       {/* 1. USER HERO PROFILE HEADER */}
//       <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
//         <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
//           <img
//             src={userProfile.avatar}
//             alt={userProfile.name}
//             className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500/80 shadow-lg"
//           />
//           <div className="text-center sm:text-left space-y-1">
//             <div className="flex items-center justify-center sm:justify-start gap-2">
//               <h1 className="text-2xl font-black">{userProfile.name}</h1>
//               <span className="bg-emerald-800 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-600">
//                 Verified Swapper
//               </span>
//             </div>
//             <p className="text-xs text-emerald-200/80 flex items-center justify-center sm:justify-start gap-1">
//               <MapPin className="w-3.5 h-3.5 text-emerald-400" />
//               {userProfile.location} • Member since {userProfile.joined}
//             </p>
//             <div className="pt-2 flex items-center justify-center sm:justify-start gap-2">
//               <span className="bg-emerald-900/80 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-xl border border-emerald-700/50 flex items-center gap-1">
//                 <Award className="w-3.5 h-3.5 text-amber-400" />
//                 {userProfile.stats.swapsCompleted} Successful Swaps
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. SUSTAINABILITY IMPACT METRICS CARDS */}
//       <div>
//         <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
//           Your Ecological Footprint Offset
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div className="bg-emerald-50 border border-emerald-200/80 p-5 rounded-2xl flex items-center gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
//               <Leaf className="w-6 h-6" />
//             </div>
//             <div>
//               <span className="text-2xl font-black text-emerald-950 block">
//                 {userProfile.stats.co2SavedKg} kg
//               </span>
//               <p className="text-xs font-semibold text-emerald-700">CO₂ Emissions Offset</p>
//             </div>
//           </div>

//           <div className="bg-teal-50 border border-teal-200/80 p-5 rounded-2xl flex items-center gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-md">
//               <Droplets className="w-6 h-6" />
//             </div>
//             <div>
//               <span className="text-2xl font-black text-teal-950 block">
//                 {userProfile.stats.waterSavedLiters.toLocaleString()} L
//               </span>
//               <p className="text-xs font-semibold text-teal-700">Water Preserved</p>
//             </div>
//           </div>

//           <div className="bg-blue-50 border border-blue-200/80 p-5 rounded-2xl flex items-center gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
//               <Trash2 className="w-6 h-6" />
//             </div>
//             <div>
//               <span className="text-2xl font-black text-blue-950 block">
//                 {userProfile.stats.landfillDivertedItems} Items
//               </span>
//               <p className="text-xs font-semibold text-blue-700">Kept Out of Landfills</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 3. WARDROBE INVENTORY & SWAP HISTORY TABS */}
//       <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
//         <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
//           <button
//             onClick={() => setActiveTab('inventory')}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
//               activeTab === 'inventory'
//                 ? 'bg-emerald-600 text-white shadow-sm'
//                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//             }`}
//           >
//             <Shirt className="w-4 h-4" />
//             My Wardrobe ({userListings.length})
//           </button>
//           <button
//             onClick={() => setActiveTab('history')}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
//               activeTab === 'history'
//                 ? 'bg-emerald-600 text-white shadow-sm'
//                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//             }`}
//           >
//             <RefreshCw className="w-4 h-4" />
//             Swap History ({userProfile.history.length})
//           </button>
//         </div>

//         {/* TAB 1: INVENTORY GRID */}
//         {activeTab === 'inventory' && (
//           <div>
//             {userListings.length === 0 ? (
//               <p className="text-xs text-gray-400 py-6 text-center">
//                 You haven't listed any clothes yet. Click "+ Add Listing" in the navbar to start swapping!
//               </p>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
//                 {userListings.map((item) => (
//                   <div
//                     key={item._id || item.id}
//                     className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-14 h-14 rounded-lg object-cover"
//                     />
//                     <div className="min-w-0 flex-1">
//                       <h4 className="font-bold text-xs text-gray-900 truncate">{item.title}</h4>
//                       <p className="text-[10px] text-gray-500">{item.brand} • Size {item.size}</p>
//                       <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md inline-block mt-1">
//                         ${item.estimatedValue} Value
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* TAB 2: SWAP HISTORY TABLE */}
//         {activeTab === 'history' && (
//           <div className="space-y-3 pt-2">
//             {userProfile.history.map((record) => (
//               <div
//                 key={record.id}
//                 className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between text-xs"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
//                     <CheckCircle2 className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">
//                       Swapped <span className="text-emerald-700">{record.itemGiven}</span> for{' '}
//                       <span className="text-emerald-700">{record.itemReceived}</span>
//                     </h4>
//                     <p className="text-[10px] text-gray-500">Partner: {record.partner} • {record.date}</p>
//                   </div>
//                 </div>
//                 <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase">
//                   Completed
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Leaf, Droplets, Trash2, Shirt, RefreshCw, Award, MapPin, ShieldCheck } from 'lucide-react';

export default function Profile({ userListings = [], currentUser }) {
  const [activeTab, setActiveTab] = useState('inventory');

  // Dynamic user data based on logged-in state
  const userName = currentUser ? currentUser.name : 'Alex Johnson';
  const userEmail = currentUser ? currentUser.email : 'alex.j@example.com';

  const userProfile = {
    name: userName,
    email: userEmail,
    location: 'Downtown (1.2 km away)',
    joined: 'October 2026',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    stats: {
      swapsCompleted: 14,
      co2SavedKg: 42.5,
      waterSavedLiters: 18500,
      landfillDivertedItems: userListings.length > 0 ? userListings.length * 3 : 18,
    },
    history: [
      {
        id: 'HIST-1',
        itemGiven: 'Chunky Knit Sweater',
        itemReceived: 'Denim Jacket',
        partner: 'Elena R.',
        date: 'Oct 12, 2026',
      },
      {
        id: 'HIST-2',
        itemGiven: 'Graphic Vintage Tee',
        itemReceived: 'Linen Shorts',
        partner: 'Marcus K.',
        date: 'Sep 28, 2026',
      },
    ],
  };

  return (
    <div className="space-y-8 pb-12">
      {/* 1. USER HERO PROFILE HEADER */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500/80 shadow-lg"
          />
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-black">{userProfile.name}</h1>
              <span className="bg-emerald-800 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-600">
                Verified Swapper
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 flex items-center justify-center sm:justify-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              {userProfile.location} • Member since {userProfile.joined}
            </p>
            <div className="pt-2 flex items-center justify-center sm:justify-start gap-2">
              <span className="bg-emerald-900/80 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-xl border border-emerald-700/50 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                {userProfile.stats.swapsCompleted} Successful Swaps
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SUSTAINABILITY IMPACT METRICS CARDS */}
      <div>
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
          Your Ecological Footprint Offset
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-emerald-50 border border-emerald-200/80 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-emerald-950 block">
                {userProfile.stats.co2SavedKg} kg
              </span>
              <p className="text-xs font-semibold text-emerald-700">CO₂ Emissions Offset</p>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200/80 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-md">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-teal-950 block">
                {userProfile.stats.waterSavedLiters.toLocaleString()} L
              </span>
              <p className="text-xs font-semibold text-teal-700">Water Preserved</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200/80 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-blue-950 block">
                {userProfile.stats.landfillDivertedItems} Items
              </span>
              <p className="text-xs font-semibold text-blue-700">Kept Out of Landfills</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. WARDROBE INVENTORY & SWAP HISTORY TABS */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'inventory'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Shirt className="w-4 h-4" />
            My Wardrobe ({userListings.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'history'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            Swap History ({userProfile.history.length})
          </button>
        </div>

        {/* TAB 1: INVENTORY GRID */}
        {activeTab === 'inventory' && (
          <div>
            {userListings.length === 0 ? (
              <p className="text-xs text-gray-400 py-6 text-center">
                You haven't listed any clothes yet. Click "+ Add Listing" in the navbar to start swapping!
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {userListings.map((item) => (
                  <div
                    key={item._id || item.id}
                    className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-xs text-gray-900 truncate">{item.title}</h4>
                      <p className="text-[10px] text-gray-500">{item.brand} • Size {item.size}</p>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md inline-block mt-1">
                        ${item.estimatedValue} Value
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SWAP HISTORY TABLE */}
        {activeTab === 'history' && (
          <div className="space-y-3 pt-2">
            {userProfile.history.map((record) => (
              <div
                key={record.id}
                className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Swapped <span className="text-emerald-700">{record.itemGiven}</span> for{' '}
                      <span className="text-emerald-700">{record.itemReceived}</span>
                    </h4>
                    <p className="text-[10px] text-gray-500">Partner: {record.partner} • {record.date}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase">
                  Completed
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}