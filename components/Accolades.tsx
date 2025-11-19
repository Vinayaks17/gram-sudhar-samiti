import React from 'react';
import { Award } from 'lucide-react';

export const Accolades: React.FC = () => {
  const awards = [
    "Thakkar Bapa Trust Award",
    "Red & White Bravery Award",
    "Friendship Forum of India Excellency Award",
    "Vivekanand Award (Ramkrishna Mission)",
    "NABARD Best Implementing Agency (Watershed)",
    "NABARD 3rd Best Agency (Horticulture)",
    "Khokara - Best Tourism Village (Bronze)",
    "Best PSO for Rural Tourism (MP Tourism Board)"
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <span className="text-sm font-bold text-brand-blue mb-2 block tracking-wide">RECOGNITION</span>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Accolades & Awards</h2>
            <p className="text-slate-600 font-light">
              Our work has been acknowledged at local, state, and national levels for innovation and community-centric impact.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-brand-blue/30 transition-colors">
                <Award className="w-6 h-6 text-brand-accent shrink-0" />
                <span className="text-sm font-semibold text-slate-800">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};