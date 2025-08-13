
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => (
  <section className={`py-16 md:py-20 ${className}`}>
     <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 md:mb-12 pb-3 border-b-2 border-slate-300">{title}</h2>
        <div className="text-slate-700">
            {children}
        </div>
     </div>
  </section>
);

export default Section;