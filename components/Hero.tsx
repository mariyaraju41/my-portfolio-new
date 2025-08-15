
import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { EmailIcon } from './icons/EmailIcon';

interface HeroProps {
    data: {
        name: string;
        title: string;
        tagline: string;
        headshotUrl: string;
        contact: {
            linkedin: string;
            email: string;
        }
    }
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { name, title, tagline, headshotUrl, contact } = data;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 animate-fade-in-up">
        <div className="relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-sky-500/50">
            <img src={headshotUrl} alt="Professional headshot of Devasena Medavaram" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            {name}
          </h1>
          <p className="mt-2 text-xl sm:text-2xl text-sky-400 font-semibold">
            {title}
          </p>
          <p className="mt-4 max-w-xl text-lg text-gray-300">
            {tagline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-transform transform hover:scale-105">
              Get In Touch
            </a>
            <a 
              href="/medavaram_devasena_resume.pdf" 
              download 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 text-base font-medium rounded-md text-gray-200 bg-slate-800 hover:bg-slate-700 transition-transform transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
          <div className="mt-6 flex justify-center md:justify-start space-x-6">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
              <LinkedInIcon className="w-7 h-7" />
            </a>
            <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-sky-400 transition-colors">
              <EmailIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
