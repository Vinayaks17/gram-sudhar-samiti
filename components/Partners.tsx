import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
            Trusted by Leading <br />
            <span className="text-brand-blue">Development Organizations</span>
          </h2>
          <p className="text-slate-600 mb-8 max-w-md font-light">
            Our partnerships drive sustainable change across rural Madhya Pradesh. We collaborate with global and local entities to maximize impact.
          </p>
          <button className="flex items-center gap-2 border border-brand-blue text-brand-blue px-6 py-3 text-sm font-bold rounded hover:bg-brand-blue hover:text-white transition-all">
            Partner Network
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white h-24 rounded shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-lg font-heading font-bold text-slate-300">LOGO</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};