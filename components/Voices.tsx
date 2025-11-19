import React from 'react';

export const Voices: React.FC = () => {
  const stories = [
    { id: 1, name: "Rajni Devi", role: "Farmer, Satna District", quote: "Before GSS, we had no hope. Now we have water, land, and dignity.", img: "https://images.unsplash.com/photo-1506543730435-e2c164552184?q=80&w=1974&auto=format&fit=crop" },
    { id: 2, name: "Sunita Bai", role: "Artisan, Rewa District", quote: "The training gave me skills, but the community gave me strength.", img: "https://images.unsplash.com/photo-1489396572299-a7313100df6e?q=80&w=2049&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="project">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2">Stories of Change</p>
      </div>
      
      <div className="space-y-24">
        {stories.map((story, index) => (
           <div key={story.id} className="container mx-auto px-6">
             <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
               {/* Title */}
               <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-3' : 'lg:order-1'}`}>
                 <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none text-brand-blue opacity-10 mb-4 lg:mb-0">
                   VOICES
                 </h2>
                 <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                   From the Ground Up
                 </h3>
               </div>

               {/* Image */}
               <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-2'}`}>
                 <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg">
                   <img 
                    src={story.img} 
                    alt={story.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                   />
                 </div>
               </div>

               {/* Quote */}
               <div className={`lg:col-span-4 flex flex-col justify-center text-center lg:text-left py-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-3'}`}>
                 <p className="text-2xl font-heading font-light text-slate-800 mb-8 leading-normal">
                   "{story.quote}"
                 </p>
                 <div>
                   <h4 className="text-lg font-bold text-brand-blue">{story.name}</h4>
                   <p className="text-sm text-slate-500">{story.role}</p>
                 </div>
               </div>
             </div>
           </div>
        ))}
      </div>
    </section>
  );
};