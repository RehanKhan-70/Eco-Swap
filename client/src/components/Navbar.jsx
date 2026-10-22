import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shirt, RefreshCw, MapPin, User, PlusCircle, LogIn, LogOut } from 'lucide-react';

export default function Navbar({ onOpenAddModal, currentUser, onOpenAuthModal, onLogout }) {
  return (
    <header className="bg-emerald-950 text-white sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-tight text-white">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-emerald-950">
            <RefreshCw className="w-5 h-5" />
          </div>
          <span>ReThread<span className="text-emerald-400">.</span></span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-emerald-900/50 p-1 rounded-2xl border border-emerald-800/50 text-xs font-semibold text-emerald-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
              }`
            }
          >
            <Shirt className="w-3.5 h-3.5" /> Browse Apparel
          </NavLink>

          <NavLink
            to="/swaps"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
              }`
            }
          >
            <RefreshCw className="w-3.5 h-3.5" /> Swap Hub
          </NavLink>

          <NavLink
            to="/map"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
              }`
            }
          >
            <MapPin className="w-3.5 h-3.5" /> Nearby Map
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
              }`
            }
          >
            <User className="w-3.5 h-3.5" /> Wardrobe & Impact
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-300 bg-emerald-900 px-3 py-1.5 rounded-xl border border-emerald-700/50">
                {currentUser.name}
              </span>
              <button
                onClick={onLogout}
                title="Log Out"
                className="p-1.5 bg-red-900/60 hover:bg-red-800 text-red-200 rounded-xl text-xs font-bold border border-red-700/50 transition flex items-center justify-center"
              >
                <LogOut className="w-4 h-4" /> LogOut
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="px-3.5 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-200 rounded-xl text-xs font-bold border border-emerald-700/50 transition flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" /> Login
            </button>
          )}

          <button
            onClick={onOpenAddModal}
            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-xl text-xs font-black shadow-md transition flex items-center gap-1.5 active:scale-95"
          >
            <PlusCircle className="w-4 h-4" /> + Add Listing
          </button>
        </div>

      </div>
    </header>
  );
}