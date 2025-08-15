import React from 'react';
import { Section } from '../types';

const profilePhotoUrl = 'https://i.postimg.cc/7ZPZh9tF/DSC-0286-1.jpg';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      >
          <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      <div className="relative z-10 p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-shrink-0">
          <img 
            src={profilePhotoUrl} 
            alt="Medavaram Devasena"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Medavaram Devasena
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8">
            Software Developer | AWS Cloud Practitioner
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto md:mx-0">
            A growth-oriented developer skilled in Python, Java, and AWS, passionate about building innovative solutions and contributing to impactful projects.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
              <button 
                  onClick={() => setActiveSection(Section.Projects)}
                  className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                  View My Work
              </button>
              <button 
                  onClick={() => setActiveSection(Section.Contact)}
                  className="bg-slate-700 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-600 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                  Contact Me
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;