import React, { useState } from 'react';
import { RefreshCw, CheckCircle2, XCircle, Send, MessageSquare, Tag, ShieldCheck, Clock } from 'lucide-react';

export default function SwapHub() {
  // Sample initial swap proposals
  const [swaps, setSwaps] = useState([
    {
      id: 'SWAP-101',
      status: 'pending', // 'pending' | 'accepted' | 'rejected'
      otherUser: 'Elena R.',
      otherAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      requestedItem: {
        title: 'Floral Summer Sundress',
        brand: 'Reformation',
        size: 'S',
        value: 80,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&auto=format&fit=crop&q=80',
      },
      offeredItem: {
        title: 'Chunky Knit Wool Sweater',
        brand: 'Everlane',
        size: 'M',
        value: 75,
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop&q=80',
      },
      messages: [
        { sender: 'Elena R.', text: 'Hi Alex! I saw your request for the Reformation sundress. Your Everlane sweater looks great!', time: '10:15 AM' },
        { sender: 'Alex Johnson', text: 'Hey Elena! Yes, it is in perfect condition. Would you like to swap?', time: '10:18 AM' },
      ],
    },
    {
      id: 'SWAP-102',
      status: 'accepted',
      otherUser: 'Marcus K.',
      otherAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      requestedItem: {
        title: 'Organic Cotton Hoodie',
        brand: 'Patagonia',
        size: 'L',
        value: 45,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&auto=format&fit=crop&q=80',
      },
      offeredItem: {
        title: 'Vintage Denim Jacket',
        brand: "Levi's",
        size: 'M',
        value: 50,
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&auto=format&fit=crop&q=80',
      },
      messages: [
        { sender: 'Marcus K.', text: 'Offer accepted! Where should we meet for the trade?', time: 'Yesterday' },
        { sender: 'Alex Johnson', text: 'Great! How about downtown coffee shop tomorrow at 2 PM?', time: 'Yesterday' },
      ],
    },
  ]);

  const [activeSwapId, setActiveSwapId] = useState('SWAP-101');
  const [newMessage, setNewMessage] = useState('');

  const activeSwap = swaps.find((s) => s.id === activeSwapId) || swaps[0];

  // Handle sending a chat message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const updatedSwaps = swaps.map((s) => {
      if (s.id === activeSwapId) {
        return {
          ...s,
          messages: [
            ...s.messages,
            { sender: 'Alex Johnson', text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
          ],
        };
      }
      return s;
    });

    setSwaps(updatedSwaps);
    setNewMessage('');
  };

  // Handle accepting or rejecting a swap
  const handleStatusChange = (swapId, newStatus) => {
    setSwaps(swaps.map((s) => (s.id === swapId ? { ...s, status: newStatus } : s)));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
            Negotiation & Trade Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">Swap Negotiation Hub</h1>
          <p className="text-emerald-200/80 text-xs mt-1">
            Chat directly with swappers, discuss trade logistics, and finalize agreements.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/50 px-4 py-2 rounded-2xl text-xs font-bold text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Secure Direct Swap
        </div>
      </div>

      {/* Main Grid: Left List + Right Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Active Swap List (4 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Active Proposals ({swaps.length})
          </h2>

          <div className="space-y-3">
            {swaps.map((swap) => {
              const isActive = swap.id === activeSwapId;
              return (
                <div
                  key={swap.id}
                  onClick={() => setActiveSwapId(swap.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={swap.otherAvatar}
                        alt={swap.otherUser}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-xs font-bold text-gray-900">{swap.otherUser}</span>
                    </div>

                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        swap.status === 'accepted'
                          ? 'bg-emerald-100 text-emerald-800'
                          : swap.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {swap.status}
                    </span>
                  </div>

                  {/* Visual Items Trade Pair */}
                  <div className="grid grid-cols-2 gap-2 bg-gray-50 p-2 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={swap.requestedItem.image}
                        alt={swap.requestedItem.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Target</p>
                        <p className="text-xs font-bold text-gray-800 truncate">{swap.requestedItem.title}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src={swap.offeredItem.image}
                        alt={swap.offeredItem.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Your Offer</p>
                        <p className="text-xs font-bold text-gray-800 truncate">{swap.offeredItem.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Chat Room & Deal Actions (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col h-[600px]">
          
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <img
                src={activeSwap.otherAvatar}
                alt={activeSwap.otherUser}
                className="w-10 h-10 rounded-full object-cover border border-emerald-500"
              />
              <div>
                <h3 className="font-bold text-sm text-gray-900">{activeSwap.otherUser}</h3>
                <p className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-600" /> Negotiating Swap Deal
                </p>
              </div>
            </div>

            {/* Accept / Reject Buttons */}
            {activeSwap.status === 'pending' ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleStatusChange(activeSwap.id, 'rejected')}
                  className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl transition flex items-center gap-1"
                >
                  <XCircle className="w-3.5 h-3.5" /> Decline
                </button>
                <button
                  onClick={() => handleStatusChange(activeSwap.id, 'accepted')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Accept Swap
                </button>
              </div>
            ) : (
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  activeSwap.status === 'accepted' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}
              >
                Trade {activeSwap.status}
              </span>
            )}
          </div>

          {/* Trade Value Comparison Bar */}
          <div className="p-3 bg-emerald-50 border-b border-emerald-100 flex items-center justify-around text-xs font-semibold text-emerald-900">
            <div className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-emerald-600" />
              <span>Target: <strong>${activeSwap.requestedItem.value}</strong></span>
            </div>
            <RefreshCw className="w-4 h-4 text-emerald-600" />
            <div className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-emerald-600" />
              <span>Your Item: <strong>${activeSwap.offeredItem.value}</strong></span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {activeSwap.messages.map((msg, index) => {
              const isMe = msg.sender === 'Alex Johnson';
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium shadow-sm ${
                      isMe
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
                </div>
              );
            })}
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message to negotiate..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md transition active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}