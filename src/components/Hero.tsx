import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = ({ onAction }: { onAction: () => void }) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img 
        src="https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/hero-gym-58b59f80-1771689268560.webp" 
        className="w-full h-full object-cover opacity-40"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-600/30">
          Transform Your Life
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none">
          BREAK YOUR <span className="text-orange-600">LIMITS</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Premium training programs, expert coaching, and a community built to push you further. Join Kale Fit today and start your evolution.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={onAction}
            className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20"
          >
            Get Started <ChevronRight size={20} />
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-bold transition-all">
            Browse Workouts
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);