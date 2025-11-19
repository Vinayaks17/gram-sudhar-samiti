import React from 'react';

export const Journey: React.FC = () => {
  const milestones = [
    {
      year: "1987",
      title: "The Beginning",
      description: "Established in Satna, inspired by the Sarvodaya movement to uplift rural communities."
    },
    {
      year: "1995",
      title: "Expanding Horizons",
      description: "Initiated large-scale Watershed Management projects to combat drought and soil degradation."
    },
    {
      year: "2005",
      title: "Holistic Development",
      description: "Integrated health, hygiene, and education into our core community development programs."
    },
    {
      year: "2015",
      title: "Sustainable Innovation",
      description: "Launched organic farming and horticulture initiatives, recognized by NABARD."
    },
    {
      year: "Present",
      title: "Building Tomorrow",
      description: "Pioneering rural tourism and continuing our legacy of empowering over 20 lakh beneficiaries."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="journey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-sm font-bold text-brand-blue mb-2 block tracking-wide">OUR HISTORY</span>
           <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">A Journey of Change</h2>
        </div>

        <div className="relative">
           {/* Central Line */}
           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand-blue/20 hidden md:block"></div>

           <div className="space-y-12">
             {milestones.map((item, idx) => (
               <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 
                 <div className="w-full md:w-1/2 px-6"></div>
                 
                 {/* Dot */}
                 <div className="relative z-10 w-8 h-8 bg-brand-blue rounded-full border-4 border-white shadow-lg shrink-0 mb-4 md:mb-0"></div>
                 
                 <div className="w-full md:w-1/2 px-6 text-center md:text-left">
                   <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                     <span className="text-3xl font-heading font-bold text-brand-blue block mb-2">{item.year}</span>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-slate-600 font-light">{item.description}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};