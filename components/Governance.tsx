import React from 'react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

export const Governance: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative" id="about-us">
      <div className="container mx-auto px-6">
        {/* About Us Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-6">
            <span className="text-sm font-bold text-brand-blue mb-4 block tracking-wide">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-slate-900 mb-6">
              Rooted in Principles of Collective Upliftment
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
              <p>
                Gram Sudhar Samiti (GSS) is a rural development organization committed to improving the standard of living in villages across Madhya Pradesh. Established in 1987 in Satna, the organization draws inspiration from the ideals of the Sarvodaya movement.
              </p>
              <p>
                We are rooted in the principles of collective upliftment, community welfare, and social justice. Over the decades, GSS has worked to design and implement innovative, accessible, and sustainable solutions that address the multifaceted challenges of rural development.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
             <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Rural Discussion" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Vision */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-blue/10 p-3 rounded-full">
                <Eye className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-slate-900">Vision</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Uplift marginalized and vulnerable communities.",
                "Eliminate child labor and support rehabilitation.",
                "Conserve natural resources.",
                "Improve public health and hygiene.",
                "Make women self-reliant and economically empowered."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-brand-darkBlue p-10 rounded-2xl border border-brand-darkBlue text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold">Mission</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Create a society free from inequality.",
                "Ensure elementary education is accessible to every child.",
                "Break the cycle of poverty and social isolation.",
                "Promote sustainable livelihood options.",
                "Enable equity and equality in all spheres of society."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-lightBlue mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};