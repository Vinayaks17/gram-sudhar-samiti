import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const impactStats = [
    { value: "20L+", label: "Beneficiaries Reached" },
    { value: "9,500+", label: "Hectares Restored" },
    { value: "2.5L+", label: "Trees Planted (Last 2 Yrs)" },
    { value: "7,000+", label: "Households Supported" },
    { value: "3,000+", label: "Acres Organic Farming" },
    { value: "100+", label: "Village Committees" },
  ];

  return (
    <section className="py-24 bg-brand-darkBlue text-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Impact at a Glance</h2>
           <p className="text-brand-lightBlue text-lg font-light max-w-2xl mx-auto">
             Over four decades of dedication, we have achieved measurable milestones in our mission to transform rural landscapes.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {impactStats.map((stat, idx) => (
            <div key={idx} className="stat-card p-4">
               <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-lightBlue mb-2">{stat.value}</div>
               <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};