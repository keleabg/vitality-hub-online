import React from 'react';
import { Flame, TrendingUp, PlayCircle, ChevronRight, Star, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const dummyData = [
  { name: 'Mon', calories: 450 },
  { name: 'Tue', calories: 600 },
  { name: 'Wed', calories: 300 },
  { name: 'Thu', calories: 800 },
  { name: 'Fri', calories: 500 },
  { name: 'Sat', calories: 900 },
  { name: 'Sun', calories: 700 },
];

export const UserDashboard = () => (
  <section className="py-24 bg-zinc-900 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black text-white mb-2 uppercase">Your <span className="text-orange-600">Progress</span></h1>
          <p className="text-zinc-500">Welcome back, Alex. Keep pushing towards your 30-day streak!</p>
        </div>
        <div className="mt-6 md:mt-0 flex gap-4">
          <div className="bg-zinc-800 p-4 rounded-2xl border border-zinc-700 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600/20 text-orange-500 rounded-lg flex items-center justify-center">
              <Flame size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter">Current Streak</p>
              <p className="text-white font-black">12 DAYS</p>
            </div>
          </div>
          <div className="bg-zinc-800 p-4 rounded-2xl border border-zinc-700 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter">Weight Goal</p>
              <p className="text-white font-black">-4.5 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">Activity Overview</h3>
              <select className="bg-zinc-900 text-white text-sm border-zinc-800 rounded-lg px-3 py-1 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dummyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#71717a', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#71717a', fontSize: 12 }}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                    contentStyle={{ 
                      backgroundColor: '#18181b', 
                      borderColor: '#27272a', 
                      borderRadius: '12px',
                      color: '#fff' 
                    }}
                    itemStyle={{ color: '#ea580c' }}
                  />
                  <Bar 
                    dataKey="calories" 
                    radius={[6, 6, 0, 0]}
                    animationDuration={1500}
                  >
                    {dummyData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === 5 ? '#ea580c' : '#ea580c80'} 
                        className="hover:fill-orange-600 transition-colors"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-600/50"></div>
                <span>Average Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                <span>Peak Performance</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Upcoming Workouts</h3>
            <div className="space-y-4">
              {[
                { title: 'Morning Mobility', time: 'Tomorrow, 07:00 AM', coach: 'Sarah' },
                { title: 'Deadlift PR Session', time: 'Fri, 05:30 PM', coach: 'Marcus' }
              ].map((w, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
                      <PlayCircle size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold">{w.title}</p>
                      <p className="text-zinc-500 text-xs">{w.time} • {w.coach}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:text-orange-500 transition-colors text-zinc-500">
                    <ChevronRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Achievements</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center border ${i < 4 ? 'bg-orange-600/10 border-orange-600/20 text-orange-500' : 'bg-zinc-900 border-zinc-800 text-zinc-700'}`}>
                  <Star size={24} fill={i < 4 ? 'currentColor' : 'none'} />
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-zinc-800 text-zinc-400 text-sm font-bold rounded-xl hover:text-white hover:bg-zinc-800 transition-all">View All Badges</button>
          </div>

          <div className="bg-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 uppercase italic">Join the Pro Tier</h3>
              <p className="text-orange-100 text-sm mb-6">Unlock personal coaching and advanced nutrition tracking.</p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold text-sm">Upgrade Now</button>
            </div>
            <Dumbbell className="absolute -bottom-6 -right-6 text-orange-500 opacity-30 rotate-12" size={140} />
          </div>
        </div>
      </div>
    </div>
  </section>
);