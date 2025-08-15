
import React from 'react';
import { Experience } from '../types';
import Section from './Section';

interface ExperienceProps {
  experiences: Experience[];
}

const ProfessionalExperience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-lg mb-8 transition-shadow duration-300 hover:shadow-sky-500/20">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-sky-400">{exp.title}</h3>
                <p className="text-md font-semibold text-gray-300">{exp.company}</p>
              </div>
              <p className="text-sm text-gray-400">{exp.dates}</p>
            </div>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProfessionalExperience;
