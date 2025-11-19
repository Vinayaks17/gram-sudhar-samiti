import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="relative h-[600px] w-full bg-slate-200 overflow-hidden" id="contact">
       <div className="absolute inset-0 opacity-60 grayscale">
         {/* Map iframe centered on Satna, MP */}
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d80.8166!3d24.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39846021429160d5%3A0x9039023327d2121b!2sSatna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'grayscale(100%) invert(10%)' }} 
           allowFullScreen={false} 
           loading="lazy"
           title="Satna Map"
         ></iframe>
       </div>
       
       <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none"></div>

       <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center pt-32">
         <h1 className="text-6xl md:text-9xl font-heading font-bold text-transparent mb-8 drop-shadow-xl" style={{ WebkitTextStroke: '2px #0047AB' }}>
            CONTACT
         </h1>
         <div className="bg-white p-10 max-w-lg rounded-xl shadow-2xl border-t-4 border-brand-blue">
            <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Visit Our Office</h3>
            <p className="text-slate-600 mb-6 font-light">Gram Sudhar Samiti, Satna, Madhya Pradesh, India, 485001</p>
            <a href="mailto:info@gss-india.org" className="text-brand-blue font-bold hover:underline decoration-2 underline-offset-4">info@gss-india.org</a>
         </div>
       </div>
    </section>
  );
};