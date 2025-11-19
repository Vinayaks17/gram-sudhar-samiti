import React from 'react';

const teamMembers = [
  {
    name: "Sarthak Tyagi",
    title: "Chief Executive Officer",
    desc: "A visionary leader with 35 years of grassroots development experience in rural Madhya Pradesh.",
    img: "/assets/sarthak-tyagi.png"
  },
  {
    name: "Aditi Sharma",
    title: "Program Director",
    desc: "Dedicated specialist in water conservation and sustainable community planning.",
    img: ""
  }
];

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="team">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue block mb-2">Leadership</span>
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">Our Team</h2>
          <p className="text-slate-600 font-light">Dedicated professionals committed to rural transformation.</p>
        </div>

        {/* Centered grid limited to available members */}
        <div className="flex flex-wrap justify-center gap-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group cursor-pointer text-center max-w-sm w-full">
              <div className="aspect-[4/5] overflow-hidden mb-6 rounded-lg bg-slate-100 shadow-sm border border-slate-100">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">{member.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};