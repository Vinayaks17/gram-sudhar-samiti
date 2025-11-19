import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    ).fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden" ref={heroRef}>
      {/* Background Image - Community under trees */}
      <div className="absolute inset-0">
        <img
          src="/assets/community-gathering.jpg"
          alt="Community Gathering Under Trees"
          className="w-full h-full object-cover brightness-95"
        />
        {/* Gradient Overlay - Optimized for text readability with the colorful community photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/85 via-brand-darkBlue/60 to-brand-darkBlue/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 pt-20">
        <div ref={textRef} className="max-w-4xl">
          <span className="inline-block px-3 py-1 mb-6 border border-white/30 rounded-full text-white text-xs font-bold tracking-wider uppercase bg-white/10 backdrop-blur-sm">
            Est. 1987
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-6">
            Empowering <br />
            Rural <span className="text-brand-lightBlue">Lives.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-xl font-light leading-relaxed mb-10">
            Gram Sudhar Samiti is dedicated to environmental conservation, sustainable agriculture, and social justice in Madhya Pradesh.
          </p>
        </div>
      </div>
    </section>
  );
};