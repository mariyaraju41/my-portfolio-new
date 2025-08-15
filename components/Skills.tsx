
import React from 'react';
import { Skill } from '../types';
import Section from './Section';
import { CodeIcon } from './icons/CodeIcon';
import { CloudIcon } from './icons/CloudIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';
import { DesktopIcon } from './icons/DesktopIcon';
import { FrameworkIcon } from './icons/FrameworkIcon';

interface SkillsProps {
  skills: Skill[];
}

const categoryIcons: { [key in Skill['category']]: React.ReactNode } = {
  Programming: <CodeIcon className="w-8 h-8 text-sky-400" />,
  Cloud: <CloudIcon className="w-8 h-8 text-sky-400" />,
  Databases: <DatabaseIcon className="w-8 h-8 text-sky-400" />,
  Frontend: <DesktopIcon className="w-8 h-8 text-sky-400" />,
  Frameworks: <FrameworkIcon className="w-8 h-8 text-sky-400" />,
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categorizedSkills).map(([category, skillList]) => (
          <div key={category} className="bg-slate-800/50 p-6 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              {categoryIcons[category as Skill['category']]}
              <h3 className="text-xl font-bold ml-4 text-white">{category}</h3>
            </div>
            <ul className="space-y-2">
              {skillList.map((skill) => (
                <li key={skill.name} className="bg-slate-700/50 px-3 py-1 rounded-md text-gray-300 text-sm">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
