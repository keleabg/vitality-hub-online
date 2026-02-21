import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const MembershipPlans = () => (
  <section className="py-24 bg-zinc-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">Choose Your <span className="text-orange-600">Plan</span></h2>
        <p className="text-zinc-500 max-w-xl mx-auto">Flexible options designed to help you reach your goals without limits. No long-term contracts.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Basic', price: '29', features: ['Gym Access', '2 Group Classes/Mo', 'Basic Workout Plans', 'Mobile App Access'] },
          { name: 'Elite', price: '59', features: ['24/7 Gym Access', 'Unlimited Classes', 'Custom Nutrition Plan', 'Progress Tracking', '1 Guest Pass/Mo'], featured: true },
          { name: 'Pro', price: '99', features: ['Everything in Elite', 'Personal Trainer (2/Mo)', 'Recovery Room Access', 'Pro Community Access', 'Kale Supplements Discount'] },
        ].map((plan, i) => (
          <div key={i} className={`relative p-1 rounded-[2.5rem] ${plan.featured ? 'bg-gradient-to-br from-orange-400 to-orange-700' : 'bg-zinc-800'}`}>
            <div className="bg-zinc-950 h-full w-full rounded-[2.3rem] p-10 flex flex-col">
              {plan.featured && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">Best Value</span>}
              <h3 className="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-zinc-500 text-lg">/mo</span>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="text-orange-600 flex-shrink-0" size={18} />
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.featured ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-xl shadow-orange-600/20' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);