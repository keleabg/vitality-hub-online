import React from 'react';
import { Dumbbell, Clock, Flame, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PROGRAMS = [
  { id: 1, title: 'Power Lifter', level: 'Advanced', duration: '12 Weeks', burn: '800 kcal', image: 'https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/hero-gym-58b59f80-1771689268560.webp' },
  { id: 2, title: 'HIIT Burn', level: 'Intermediate', duration: '6 Weeks', burn: '600 kcal', image: 'https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/workout-hiit-479b3a59-1771689263020.webp' },
  { id: 3, title: 'Zen Yoga', level: 'Beginner', duration: '8 Weeks', burn: '300 kcal', image: 'https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/workout-yoga-serene-5f3f490a-1771689263941.webp' },
];

export const WorkoutPrograms = () => (
  <section className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">Workout <span className="text-orange-600">Programs</span></h2>
          <p className="text-zinc-500 max-w-xl">Curated training paths designed for every goal and skill level. Whether you want to gain muscle or lose fat, we have you covered.</p>
        </div>
        <button className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Programs <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {PROGRAMS.map((p) => (
          <motion.div 
            key={p.id}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20 uppercase tracking-widest">{p.level}</span>
                <span className="flex items-center gap-1 text-orange-500 text-xs font-bold"><Flame size={12} /> {p.burn}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{p.title}</h3>
              <div className="flex items-center gap-4 text-zinc-400 text-sm mb-6">
                <span className="flex items-center gap-1"><Clock size={14} /> {p.duration}</span>
                <span className="flex items-center gap-1"><Dumbbell size={14} /> 4 sessions/wk</span>
              </div>
              <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-orange-600 hover:text-white transition-colors">Start Program</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);