import React, { useState } from 'react';
import { X, Mail, Lock, User, ShieldCheck } from 'lucide-react';

export default function AuthModal({ onClose, onLoginSuccess }) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate user auth login
    const user = {
      name: formData.name || (formData.email ? formData.email.split('@')[0] : 'Alex Johnson'),
      email: formData.email || 'alex.j@example.com',
    };
    onLoginSuccess(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h2 className="text-xl font-black text-gray-900">
              {isSignup ? 'Create Swapper Account' : 'Welcome Back to ReThread'}
            </h2>
            <p className="text-xs text-gray-500">
              {isSignup ? 'Join the sustainable clothing exchange network.' : 'Log in to manage your wardrobe and active swap negotiations.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
          
          {isSignup && (
            <div>
              <label className="block mb-1 text-gray-700 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-emerald-600" /> Full Name
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-gray-700 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-emerald-600" /> Email Address
            </label>
            <input
              required
              type="email"
              placeholder="alex@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> Password
            </label>
            <input
              required
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md transition text-xs"
          >
            {isSignup ? 'Register & Start Swapping' : 'Sign In'}
          </button>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="text-xs text-emerald-700 font-bold hover:underline"
            >
              {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Register"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}