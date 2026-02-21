import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const RECIPES = [
  { id: 1, name: 'Protein Poke Bowl', cal: '450', time: '20 min', image: 'https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/recipe-healthy-bowl-1-a7f076d7-1771689263247.webp' },
  { id: 2, name: 'Berry Power Pancakes', cal: '380', time: '15 min', image: 'https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/recipe-pancakes-93fe232f-1771689269600.webp' },
];

export const NutritionSection = () => (
  <section className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">Fuel Your <span className="text-orange-600">Performance</span></h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Abs are made in the kitchen, but performance is fueled there. Our nutrition guides and recipe vault ensure you have the energy to crush your goals.
          </p>
          <div className="space-y-4 mb-10">
            {[
              'Custom Meal Plans',
              'Macro Tracking Tools',
              '1,000+ Healthy Recipes',
              'Supplement Guides'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-orange-600" size={20} />
                {text}
              </div>
            ))}
          </div>
          <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold shadow-xl shadow-orange-600/20">Explore Nutrition</button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="flex bg-zinc-900 p-4 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all">
              <img src={recipe.image} alt={recipe.name} className="w-32 h-32 object-cover rounded-2xl" />
              <div className="ml-6 flex flex-col justify-center">
                <h4 className="text-white text-xl font-bold mb-1">{recipe.name}</h4>
                <div className="flex gap-4 text-zinc-500 text-sm">
                  <span>{recipe.cal} kcal</span>
                  <span>{recipe.time}</span>
                </div>
                <button className="mt-3 text-orange-500 font-bold text-sm flex items-center gap-1">View Recipe <ChevronRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);