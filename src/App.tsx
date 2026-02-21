import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import { Navbar, type Section } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkoutPrograms } from './components/WorkoutPrograms';
import { ExerciseLibrary } from './components/ExerciseLibrary';
import { NutritionSection } from './components/NutritionSection';
import { UserDashboard } from './components/UserDashboard';
import { BookingSystem } from './components/BookingSystem';
import { MembershipPlans } from './components/MembershipPlans';
import { Footer } from './components/Footer';

const StatsBanner = () => (
  <section className="bg-zinc-900 py-12 border-y border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { label: 'Active Members', value: '15k+' },
        { label: 'Workouts', value: '500+' },
        { label: 'Trainers', value: '45' },
        { label: 'Community Rating', value: '4.9/5' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
          <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Schedule = () => {
  const data = [
    { day: 'Monday', classes: [{ time: '08:00 AM', name: 'Yoga Flow', coach: 'Sarah' }, { time: '05:00 PM', name: 'HIIT Blast', coach: 'Marcus' }] },
    { day: 'Tuesday', classes: [{ time: '09:00 AM', name: 'Power Lifting', coach: 'Marcus' }, { time: '06:00 PM', name: 'Zumba', coach: 'Elena' }] },
    { day: 'Wednesday', classes: [{ time: '07:30 AM', name: 'Core Crusher', coach: 'Sarah' }, { time: '05:30 PM', name: 'Pilates', coach: 'Elena' }] },
  ];

  return (
    <section className="py-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 uppercase text-center">Class <span className="text-orange-600">Schedule</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((day, idx) => (
            <div key={idx} className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-black text-white mb-6 border-b border-zinc-800 pb-4 uppercase tracking-tighter">{day.day}</h3>
              <div className="space-y-6">
                {day.classes.map((cls, ci) => (
                  <div key={ci} className="flex justify-between items-start">
                    <div>
                      <p className="text-orange-500 font-bold text-sm">{cls.time}</p>
                      <h4 className="text-white text-lg font-bold">{cls.name}</h4>
                      <p className="text-zinc-500 text-sm">with {cls.coach}</p>
                    </div>
                    <button onClick={() => toast.success(`Booked for ${cls.name}!`)} className="bg-zinc-800 hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Join</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    document.title = 'Kale Fit - Transform Your Life';
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-600 selection:text-white">
      <Toaster position="top-center" richColors />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero onAction={() => setActiveSection('membership')} />
            <StatsBanner />
            <WorkoutPrograms />
            <ExerciseLibrary />
            <NutritionSection />
            <MembershipPlans />
          </motion.div>
        )}

        {activeSection === 'workouts' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <WorkoutPrograms />
            <ExerciseLibrary />
          </motion.div>
        )}

        {activeSection === 'schedule' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Schedule />
          </motion.div>
        )}

        {activeSection === 'nutrition' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <NutritionSection />
          </motion.div>
        )}

        {activeSection === 'dashboard' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <UserDashboard />
          </motion.div>
        )}

        {activeSection === 'booking' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <BookingSystem />
          </motion.div>
        )}

        {activeSection === 'membership' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <MembershipPlans />
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}