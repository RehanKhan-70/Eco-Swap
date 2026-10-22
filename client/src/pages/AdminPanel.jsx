// // import React, { useState } from 'react';
// // import { ShieldAlert, Trash2, Users, ShoppingBag, RefreshCw, BarChart3, AlertCircle } from 'lucide-react';

// // export default function AdminPanel({ clothes, onDeleteListing }) {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   // Filter listings based on admin search
// //   const filteredListings = clothes.filter(
// //     (item) =>
// //       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       item.brand.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="space-y-6 pb-12">
// //       {/* Page Header */}
// //       <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex items-center justify-between">
// //         <div>
// //           <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
// //             Platform Moderation & Control
// //           </span>
// //           <h1 className="text-2xl sm:text-3xl font-black">Admin Management Panel</h1>
// //           <p className="text-emerald-200/80 text-xs mt-1">
// //             Monitor platform activity, oversee clothing listings, and remove non-compliant items.
// //           </p>
// //         </div>
// //         <div className="hidden sm:flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/50 px-4 py-2 rounded-2xl text-xs font-bold text-emerald-300">
// //           <ShieldAlert className="w-4 h-4 text-emerald-400" />
// //           Admin Level 1
// //         </div>
// //       </div>

// //       {/* Analytics KPI Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
// //         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
// //           <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
// //             <ShoppingBag className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <span className="text-2xl font-black text-gray-900 block">{clothes.length}</span>
// //             <p className="text-xs font-semibold text-gray-500">Total Listings</p>
// //           </div>
// //         </div>

// //         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
// //           <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
// //             <Users className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <span className="text-2xl font-black text-gray-900 block">48</span>
// //             <p className="text-xs font-semibold text-gray-500">Active Swappers</p>
// //           </div>
// //         </div>

// //         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
// //           <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
// //             <RefreshCw className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <span className="text-2xl font-black text-gray-900 block">19</span>
// //             <p className="text-xs font-semibold text-gray-500">Completed Swaps</p>
// //           </div>
// //         </div>

// //         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
// //           <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
// //             <BarChart3 className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <span className="text-2xl font-black text-gray-900 block">100%</span>
// //             <p className="text-xs font-semibold text-gray-500">Barter Rate</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Moderation Table */}
// //       <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
// //         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
// //           <h2 className="text-sm font-bold text-gray-900">Clothing Item Moderation Queue</h2>
// //           <input
// //             type="text"
// //             placeholder="Search items by title or brand..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
// //           />
// //         </div>

// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left text-xs text-gray-600">
// //             <thead className="bg-gray-50 uppercase text-[10px] font-bold text-gray-400 border-b border-gray-100">
// //               <tr>
// //                 <th className="p-3">Item Details</th>
// //                 <th className="p-3">Category</th>
// //                 <th className="p-3">Size & Value</th>
// //                 <th className="p-3">Owner</th>
// //                 <th className="p-3 text-right">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-100 font-medium">
// //               {filteredListings.map((item) => (
// //                 <tr key={item._id || item.id} className="hover:bg-gray-50/50 transition">
// //                   <td className="p-3 flex items-center gap-3">
// //                     <img
// //                       src={item.image}
// //                       alt={item.title}
// //                       className="w-10 h-10 rounded-lg object-cover"
// //                     />
// //                     <div>
// //                       <p className="font-bold text-gray-900">{item.title}</p>
// //                       <span className="text-[10px] text-gray-400 uppercase">{item.brand}</span>
// //                     </div>
// //                   </td>
// //                   <td className="p-3">{item.category}</td>
// //                   <td className="p-3">
// //                     Size: <strong>{item.size}</strong> • ${item.estimatedValue}
// //                   </td>
// //                   <td className="p-3">{item.owner || 'Community User'}</td>
// //                   <td className="p-3 text-right">
// //                     <button
// //                       onClick={() => onDeleteListing(item._id || item.id)}
// //                       className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-[11px] font-bold rounded-lg transition flex items-center gap-1 ml-auto"
// //                     >
// //                       <Trash2 className="w-3.5 h-3.5" /> Remove
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import { ShieldAlert, Trash2, Users, ShoppingBag, RefreshCw, BarChart3, LogIn, LogOut, Lock } from 'lucide-react';

// export default function AdminPanel({ clothes, onDeleteListing }) {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   const [adminAuth, setAdminAuth] = useState({ username: '', password: '' });
//   const [authError, setAuthError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Handle Admin Login Submit
//   const handleAdminLogin = (e) => {
//     e.preventDefault();
//     if (adminAuth.username === 'admin' && adminAuth.password === 'admin123') {
//       setIsAdminLoggedIn(true);
//       setAuthError('');
//       setAdminAuth({ username: '', password: '' });
//     } else {
//       setAuthError('Invalid Admin credentials! (Use: admin / admin123)');
//     }
//   };

//   // Handle Admin Logout
//   const handleAdminLogout = () => {
//     setIsAdminLoggedIn(false);
//   };

//   // Filter listings based on search
//   const filteredListings = clothes.filter(
//     (item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.brand.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // 1. ADMIN LOGIN FORM (LOCKED STATE)
//   if (!isAdminLoggedIn) {
//     return (
//       <div className="max-w-md mx-auto my-12 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xl space-y-6">
//         <div className="text-center space-y-2">
//           <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto">
//             <Lock className="w-6 h-6" />
//           </div>
//           <h2 className="text-2xl font-black text-gray-900">Admin Authentication</h2>
//           <p className="text-xs text-gray-500">Enter administrator credentials to access platform controls.</p>
//         </div>

//         {authError && (
//           <div className="p-3 bg-red-50 text-red-700 border border-red-200 text-xs font-bold rounded-xl text-center">
//             {authError}
//           </div>
//         )}

//         <form onSubmit={handleAdminLogin} className="space-y-4 text-xs font-semibold">
//           <div>
//             <label className="block mb-1 text-gray-700">Admin Username</label>
//             <input
//               required
//               type="text"
//               placeholder="e.g. admin"
//               value={adminAuth.username}
//               onChange={(e) => setAdminAuth({ ...adminAuth, username: e.target.value })}
//               className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Password</label>
//             <input
//               required
//               type="password"
//               placeholder="••••••••"
//               value={adminAuth.password}
//               onChange={(e) => setAdminAuth({ ...adminAuth, password: e.target.value })}
//               className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-emerald-700 hover:bg-emerald-900 text-white rounded-xl font-bold shadow-md transition flex items-center justify-center gap-2"
//           >
//             <LogIn className="w-4 h-4" /> Login as Administrator
//           </button>
//         </form>
//       </div>
//     );
//   }

//   // 2. ADMIN DASHBOARD VIEW (UNLOCKED STATE)
//   return (
//     <div className="space-y-6 pb-12">
//       {/* Page Header with Logout Button */}
//       <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex items-center justify-between">
//         <div>
//           <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
//             Platform Moderation & Control
//           </span>
//           <h1 className="text-2xl sm:text-3xl font-black">Admin Management Panel</h1>
//           <p className="text-emerald-200/80 text-xs mt-1">
//             Monitor platform activity, oversee clothing listings, and remove non-compliant items.
//           </p>
//         </div>
        
//         <div className="flex items-center gap-3">
//           <div className="hidden sm:flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/50 px-4 py-2 rounded-2xl text-xs font-bold text-emerald-300">
//             <ShieldAlert className="w-4 h-4 text-emerald-400" />
//             Admin Active
//           </div>
//           <button
//             onClick={handleAdminLogout}
//             className="px-3.5 py-2 bg-red-900/80 hover:bg-red-800 text-red-200 border border-red-700/50 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 shadow-md"
//           >
//             <LogOut className="w-4 h-4" /> Admin Logout
//           </button>
//         </div>
//       </div>

//       {/* Analytics KPI Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
//           <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
//             <ShoppingBag className="w-6 h-6" />
//           </div>
//           <div>
//             <span className="text-2xl font-black text-gray-900 block">{clothes.length}</span>
//             <p className="text-xs font-semibold text-gray-500">Total Listings</p>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
//           <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
//             <Users className="w-6 h-6" />
//           </div>
//           <div>
//             <span className="text-2xl font-black text-gray-900 block">48</span>
//             <p className="text-xs font-semibold text-gray-500">Active Swappers</p>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
//           <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
//             <RefreshCw className="w-6 h-6" />
//           </div>
//           <div>
//             <span className="text-2xl font-black text-gray-900 block">19</span>
//             <p className="text-xs font-semibold text-gray-500">Completed Swaps</p>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
//           <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
//             <BarChart3 className="w-6 h-6" />
//           </div>
//           <div>
//             <span className="text-2xl font-black text-gray-900 block">100%</span>
//             <p className="text-xs font-semibold text-gray-500">Barter Rate</p>
//           </div>
//         </div>
//       </div>

//       {/* Moderation Table */}
//       <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//           <h2 className="text-sm font-bold text-gray-900">Clothing Item Moderation Queue</h2>
//           <input
//             type="text"
//             placeholder="Search items by title or brand..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
//           />
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-xs text-gray-600">
//             <thead className="bg-gray-50 uppercase text-[10px] font-bold text-gray-400 border-b border-gray-100">
//               <tr>
//                 <th className="p-3">Item Details</th>
//                 <th className="p-3">Category</th>
//                 <th className="p-3">Size & Value</th>
//                 <th className="p-3">Owner</th>
//                 <th className="p-3 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100 font-medium">
//               {filteredListings.map((item) => (
//                 <tr key={item._id || item.id} className="hover:bg-gray-50/50 transition">
//                   <td className="p-3 flex items-center gap-3">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-10 h-10 rounded-lg object-cover"
//                     />
//                     <div>
//                       <p className="font-bold text-gray-900">{item.title}</p>
//                       <span className="text-[10px] text-gray-400 uppercase">{item.brand}</span>
//                     </div>
//                   </td>
//                   <td className="p-3">{item.category}</td>
//                   <td className="p-3">
//                     Size: <strong>{item.size}</strong> • ${item.estimatedValue}
//                   </td>
//                   <td className="p-3">{item.owner || 'Community User'}</td>
//                   <td className="p-3 text-right">
//                     <button
//                       onClick={() => onDeleteListing(item._id || item.id)}
//                       className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-[11px] font-bold rounded-lg transition flex items-center gap-1 ml-auto"
//                     >
//                       <Trash2 className="w-3.5 h-3.5" /> Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { ShieldAlert, Trash2, Users, ShoppingBag, RefreshCw, BarChart3, LogIn, LogOut, Lock } from 'lucide-react';

export default function AdminPanel({ clothes, onDeleteListing }) {
  // Admin session ko alag state aur localStorage me store karenge
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('rethread_admin_session') === 'true';
  });
  
  const [adminAuth, setAdminAuth] = useState({ username: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Admin Login Handle
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminAuth.username === 'admin' && adminAuth.password === 'admin123') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('rethread_admin_session', 'true');
      setAuthError('');
      setAdminAuth({ username: '', password: '' });
    } else {
      setAuthError('Invalid Admin credentials! (Use: admin / admin123)');
    }
  };

  // Admin Logout Handle (Normal User Login ko bina disturb kiye)
  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('rethread_admin_session');
  };

  // Filter listings based on search
  const filteredListings = clothes.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 1. ADMIN LOCKED LOGIN SCREEN
  if (!isAdminLoggedIn) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Admin Authentication</h2>
          <p className="text-xs text-gray-500">Enter administrator credentials to access platform controls.</p>
        </div>

        {authError && (
          <div className="p-3 bg-red-50 text-red-700 border border-red-200 text-xs font-bold rounded-xl text-center">
            {authError}
          </div>
        )}

        <form onSubmit={handleAdminLogin} className="space-y-4 text-xs font-semibold">
          <div>
            <label className="block mb-1 text-gray-700">Admin Username</label>
            <input
              required
              type="text"
              placeholder="e.g. admin"
              value={adminAuth.username}
              onChange={(e) => setAdminAuth({ ...adminAuth, username: e.target.value })}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              required
              type="password"
              placeholder="••••••••"
              value={adminAuth.password}
              onChange={(e) => setAdminAuth({ ...adminAuth, password: e.target.value })}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold shadow-md transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" /> Login as Administrator
          </button>
        </form>
      </div>
    );
  }

  // 2. ADMIN UNLOCKED DASHBOARD SCREEN
  return (
    <div className="space-y-6 pb-12">
      {/* Header with Admin Logout */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
            Platform Moderation & Control
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">Admin Management Panel</h1>
          <p className="text-emerald-200/80 text-xs mt-1">
            Monitor platform activity, oversee clothing listings, and remove non-compliant items.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/50 px-4 py-2 rounded-2xl text-xs font-bold text-emerald-300">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            Admin Active
          </div>
          <button
            onClick={handleAdminLogout}
            className="px-3.5 py-2 bg-red-900/80 hover:bg-red-800 text-red-200 border border-red-700/50 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 shadow-md"
          >
            <LogOut className="w-4 h-4" /> Exit Admin Session
          </button>
        </div>
      </div>

      {/* Analytics KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-gray-900 block">{clothes.length}</span>
            <p className="text-xs font-semibold text-gray-500">Total Listings</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-gray-900 block">48</span>
            <p className="text-xs font-semibold text-gray-500">Active Swappers</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-gray-900 block">19</span>
            <p className="text-xs font-semibold text-gray-500">Completed Swaps</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-gray-900 block">100%</span>
            <p className="text-xs font-semibold text-gray-500">Barter Rate</p>
          </div>
        </div>
      </div>

      {/* Moderation Table */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h2 className="text-sm font-bold text-gray-900">Clothing Item Moderation Queue</h2>
          <input
            type="text"
            placeholder="Search items by title or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-600">
            <thead className="bg-gray-50 uppercase text-[10px] font-bold text-gray-400 border-b border-gray-100">
              <tr>
                <th className="p-3">Item Details</th>
                <th className="p-3">Category</th>
                <th className="p-3">Size & Value</th>
                <th className="p-3">Owner</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium">
              {filteredListings.map((item) => (
                <tr key={item._id || item.id} className="hover:bg-gray-50/50 transition">
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <span className="text-[10px] text-gray-400 uppercase">{item.brand}</span>
                    </div>
                  </td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">
                    Size: <strong>{item.size}</strong> • ${item.estimatedValue}
                  </td>
                  <td className="p-3">{item.owner || 'Community User'}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onDeleteListing(item._id || item.id)}
                      className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-[11px] font-bold rounded-lg transition flex items-center gap-1 ml-auto"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}