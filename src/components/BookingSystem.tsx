import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const TRAINERS = [
  { id: 1, name: 'Marcus Stone', role: 'Strength Specialist', image: 'https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/trainer-male-9e2e4778-1771689267389.webp' },
  { id: 2, name: 'Sarah Jenkins', role: 'HIIT & Nutrition', image: 'https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/trainer-female-1cb56af5-1771689263510.webp' },
];

export const BookingSystem = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ trainer: '', date: '', time: '' });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Session Requested!', {
      description: 'The trainer will confirm your session shortly.',
    });
    setStep(3);
  };

  return (
    <section className="py-24 bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-4">
        <motion.div layout className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          {step < 3 && (
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black text-white mb-4 uppercase">Book Your <span className="text-orange-600">Session</span></h2>
              <div className="flex items-center justify-center gap-2">
                {[1, 2].map(i => (
                  <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${step >= i ? 'bg-orange-600' : 'bg-zinc-800'}`} />
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <label className="text-zinc-400 text-sm font-bold uppercase tracking-wider block">Choose Your Coach</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TRAINERS.map(t => (
                  <button
                    key={t.id}
                    onClick={() => { setFormData({...formData, trainer: t.name}); setStep(2); }}
                    className={`p-4 rounded-3xl border text-left transition-all flex items-center gap-4 ${formData.trainer === t.name ? 'bg-orange-600 border-orange-500' : 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'}`}
                  >
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
                    <div>
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-zinc-400 text-xs">{t.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleBook} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-zinc-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <Calendar size={16} /> Preferred Date
                  </label>
                  <input required type="date" className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 text-white outline-none focus:border-orange-600" onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-zinc-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <Clock size={16} /> Preferred Time
                  </label>
                  <select required className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 text-white outline-none focus:border-orange-600" onChange={e => setFormData({...formData, time: e.target.value})}>
                    <option value="">Select Time</option>
                    <option>08:00 AM</option>
                    <option>10:00 AM</option>
                    <option>02:00 PM</option>
                    <option>05:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-800 text-white rounded-2xl font-bold border border-zinc-700">Back</button>
                <button type="submit" className="w-2/3 py-4 bg-orange-600 text-white rounded-2xl font-bold shadow-lg shadow-orange-600/20">Confirm Request</button>
              </div>
            </form>
          )}

          {step === 3 && (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 size={40} /></div>
              <h2 className="text-3xl font-black text-white mb-4 uppercase">Request Sent!</h2>
              <p className="text-zinc-400 mb-10 leading-relaxed">Coach <span className="text-white font-bold">{formData.trainer}</span> will confirm shortly.</p>
              <button onClick={() => setStep(1)} className="px-10 py-4 border border-zinc-800 text-zinc-400 font-bold rounded-full hover:bg-zinc-800 hover:text-white transition-all">Book Another Session</button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};