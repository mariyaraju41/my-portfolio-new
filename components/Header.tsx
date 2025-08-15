
import React from 'react';
import { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavItem: React.FC<{
  section: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
  children: React.ReactNode;
}> = ({ section, activeSection, onClick, children }) => {
  const isActive = section === activeSection;
  return (
    <button
      onClick={() => onClick(section)}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
        isActive
          ? 'text-cyan-400'
          : 'text-slate-300 hover:text-white hover:bg-slate-700'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">MD</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem section={Section.Home} activeSection={activeSection} onClick={setActiveSection}>Home</NavItem>
              <NavItem section={Section.About} activeSection={activeSection} onClick={setActiveSection}>About</NavItem>
              <NavItem section={Section.Projects} activeSection={activeSection} onClick={setActiveSection}>Projects</NavItem>
              <NavItem section={Section.Contact} activeSection={activeSection} onClick={setActiveSection}>Contact</NavItem>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
