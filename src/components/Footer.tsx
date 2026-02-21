import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-orange-600 rounded-lg"><Dumbbell className="text-white" size={20} /></div>
            <span className="text-2xl font-bold tracking-tighter text-white uppercase">KALE<span className="text-orange-600">FIT</span></span>
          </div>
          <p className="text-zinc-500 leading-relaxed mb-8">The ultimate platform for fitness enthusiasts who want to push their limits and achieve real results.</p>
          <div className="flex gap-4">
            <button className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-600 transition-all"><Instagram size={18} /></button>
            <button className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-600 transition-all"><Facebook size={18} /></button>
            <button className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-600 transition-all"><Twitter size={18} /></button>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-zinc-500 font-medium">
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Programs</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Our Trainers</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Membership</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-zinc-500 font-medium">
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Help Center</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="Your email" className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white outline-none focus:border-orange-600" />
            <button className="bg-orange-600 text-white p-3 rounded-xl font-bold hover:bg-orange-700 transition-all">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-medium">
        <p>\u00a9 2024 Kale Fit. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><MapPin size={14} /> Los Angeles, CA</span>
          <span className="flex items-center gap-2"><Phone size={14} /> +1 (800) KALE-FIT</span>
        </div>
      </div>
    </div>
  </footer>
);