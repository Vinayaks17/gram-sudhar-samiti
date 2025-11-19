import React from 'react';
import { 
  Droplets, 
  GraduationCap, 
  Mountain, 
  Flower2, 
  HeartPulse, 
  Map, 
  Users2, 
  Briefcase 
} from 'lucide-react';

export const Services: React.FC = () => {
  const areas = [
    { title: "Watershed Development", icon: <Droplets className="w-8 h-8" />, desc: "Conserving groundwater and managing resources." },
    { title: "Educational Initiatives", icon: <GraduationCap className="w-8 h-8" />, desc: "Ensuring elementary education for every child." },
    { title: "Landscape Restoration", icon: <Mountain className="w-8 h-8" />, desc: "Reviving barren lands for sustainable use." },
    { title: "Horticulture Development", icon: <Flower2 className="w-8 h-8" />, desc: "Promoting fruit and vegetable cultivation." },
    { title: "Community Healthcare", icon: <HeartPulse className="w-8 h-8" />, desc: "Improving public health and hygiene access." },
    { title: "Rural Tourism", icon: <Map className="w-8 h-8" />, desc: "Developing eco-tourism for economic growth." },
    { title: "Tribal Development", icon: <Users2 className="w-8 h-8" />, desc: "Preserving indigenous culture and rights." },
    { title: "Livelihood Generation", icon: <Briefcase className="w-8 h-8" />, desc: "Non-agricultural income sources for resilience." },
  ];

  return (
    <section className="py-24 bg-white" id="service">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-bold text-brand-blue mb-2 block tracking-wide">WHAT WE DO</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            Thematic Areas
          </h2>
          <p className="text-slate-600 text-lg font-light">
            Our multifaceted approach addresses the complex challenges of rural development through targeted interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 rounded-full bg-white group-hover:bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue transition-colors shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};