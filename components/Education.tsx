
import React from 'react';
import { Education, Certification } from '../types';
import Section from './Section';

interface EducationAndCertsProps {
  education: Education[];
  certifications: Certification[];
}

const EducationAndCerts: React.FC<EducationAndCertsProps> = ({ education, certifications }) => {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 p-4 rounded-lg shadow-md">
                <p className="font-bold text-sky-400">{edu.degree}</p>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.years}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 p-4 rounded-lg shadow-md">
                <p className="font-bold text-sky-400">{cert.name}</p>
                <p className="text-gray-300">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationAndCerts;
