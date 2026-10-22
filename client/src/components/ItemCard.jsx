// import React from 'react';
// import { Heart, MapPin, RefreshCw, Eye } from 'lucide-react';

// export default function ItemCard({ item, onProposeSwap }) {
//   return (
//     <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
//       <div>
//         {/* Image Container with Badges */}
//         <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
          
//           {/* Top Badges */}
//           <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gray-800 shadow-sm">
//             {item.condition}
//           </span>
//           <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-red-500 transition shadow-sm">
//             <Heart className="w-3.5 h-3.5" />
//           </button>

//           {/* Bottom Value Badge */}
//           <div className="absolute bottom-3 left-3 bg-emerald-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
//             <span>⚡ {item.estimatedValue} pts</span>
//           </div>
//         </div>

//         {/* Content Body */}
//         <div className="p-4 space-y-1.5">
//           <div className="flex justify-between items-center text-[11px] font-semibold text-gray-400">
//             <span className="uppercase tracking-wider text-emerald-600">{item.brand}</span>
//             <span>Size: <strong className="text-gray-700">{item.size}</strong></span>
//           </div>
          
//           <h3 className="font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition line-clamp-1">
//             {item.title}
//           </h3>
          
//           <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
//             {item.description || 'High quality pre-loved fashion piece ready for direct exchange.'}
//           </p>

//           <div className="flex items-center justify-between pt-2 border-t border-gray-50 text-xs">
//             <div className="flex items-center gap-1.5">
//               <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
//                 {item.owner ? item.owner[0] : 'U'}
//               </div>
//               <span className="text-gray-600 text-[11px] font-medium">{item.owner || 'Swapper'}</span>
//             </div>
//             <span className="text-[11px] text-gray-400 flex items-center gap-1">
//               <MapPin className="w-3 h-3 text-emerald-600" />
//               {item.location || '1.2 km'}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="p-4 pt-0 grid grid-cols-2 gap-2">
//         <button className="py-2 px-3 border border-gray-200 hover:border-gray-300 rounded-xl text-xs font-bold text-gray-700 transition flex items-center justify-center gap-1">
//           <Eye className="w-3.5 h-3.5" />
//           Details
//         </button>
//         <button
//           onClick={() => onProposeSwap(item)}
//           className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-1"
//         >
//           <RefreshCw className="w-3.5 h-3.5" />
//           Request Swap
//         </button>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, RefreshCw, Eye } from 'lucide-react';

export default function ItemCard({ item, onProposeSwap }) {
  const itemId = item._id || item.id;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gray-800 shadow-sm">
            {item.condition}
          </span>
          <div className="absolute bottom-3 left-3 bg-emerald-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span>⚡ {item.estimatedValue} pts</span>
          </div>
        </div>

        <div className="p-4 space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-semibold text-gray-400">
            <span className="uppercase tracking-wider text-emerald-600">{item.brand}</span>
            <span>Size: <strong className="text-gray-700">{item.size}</strong></span>
          </div>
          <h3 className="font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition line-clamp-1">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="p-4 pt-0 grid grid-cols-2 gap-2">
        {/* DETAILS BUTTON WITH LINK TO ITEM DETAIL PAGE */}
        <Link
          to={`/item/${itemId}`}
          className="py-2 px-3 border border-gray-200 hover:border-gray-300 rounded-xl text-xs font-bold text-gray-700 transition flex items-center justify-center gap-1"
        >
          <Eye className="w-3.5 h-3.5" />
          Details
        </Link>
        
        <button
          onClick={() => onProposeSwap(item)}
          className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-1"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Request Swap
        </button>
      </div>
    </div>
  );
}