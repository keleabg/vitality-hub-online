import React from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type Section = 'home' | 'workouts' | 'trainers' | 'schedule' | 'nutrition' | 'library' | 'dashboard' | 'community' | 'membership' | 'booking';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
}

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems: { id: Section, label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'workouts', label: 'Workouts' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('home')}>
          <div className="p-2 bg-orange-600 rounded-lg">
            <Dumbbell className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">KALE<span className="text-orange-600">FIT</span></span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${activeSection === item.id ? 'text-orange-500' : 'text-zinc-400'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setActiveSection('booking')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-all transform active:scale-95"
          >
            Join Now
          </button>
        </div>

        <button className="md:hidden text-zinc-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setIsOpen(false); }}
                  className={`text-left text-zinc-300 font-medium ${activeSection === item.id ? 'text-orange-500' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => { setActiveSection('booking'); setIsOpen(false); }}
                className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};