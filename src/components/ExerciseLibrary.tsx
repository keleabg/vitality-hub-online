import React from 'react';
import { Search, PlayCircle } from 'lucide-react';

export const ExerciseLibrary = () => (
  <section className="py-24 bg-zinc-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">Exercise <span className="text-orange-600">Video Library</span></h2>
        <p className="text-zinc-500 max-w-2xl text-lg">Master your form with our professional video library. Hundreds of exercises explained by our top trainers.</p>
        <div className="mt-8 flex items-center bg-zinc-800 rounded-full px-6 py-3 w-full max-w-md border border-zinc-700">
          <Search className="text-zinc-500 mr-3" size={20} />
          <input type="text" placeholder="Search exercises (e.g. Squat)" className="bg-transparent border-none outline-none text-white w-full placeholder:text-zinc-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img 
              src="https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/ce40472f-f8dd-488d-8459-7d0b7f69517c/exercise-library-preview-cef4ee55-1771689270145.webp" 
              alt="Exercise" 
              className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
                <PlayCircle fill="currentColor" size={24} />
              </div>
            </div>
            <div className="absolute bottom-3 left-3">
              <p className="text-white text-xs font-bold uppercase tracking-widest bg-black/60 px-2 py-1 rounded">Chest & Triceps</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);