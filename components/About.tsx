import React from 'react';
import { EducationItem, Skill } from '../types';
import CodeIcon from './icons/CodeIcon';
import CloudIcon from './icons/CloudIcon';
import DatabaseIcon from './icons/DatabaseIcon';


const profilePhotoUrl = 'https://i.postimg.cc/7ZPZh9tF/DSC-0286-1.jpg';

const skills: Skill[] = [
  { category: 'Programming', items: ['Python', 'Core Java'] },
  { category: 'Cloud', items: ['AWS (EC2, S3, VPC, IAM)', 'CloudWatch', 'Cloud9'] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'React', 'TailwindCSS'] },
  { category: 'Database', items: ['MySQL'] },
];

const education: EducationItem[] = [
    { degree: 'Master of Computer Applications (MCA)', institution: 'Nanakram Bhagawandas Science College & PG Centre', years: '2023-2025', details: 'Pursuing advanced studies in computer applications and software development.'},
    { degree: 'B.Sc (Honors)', institution: 'Sri Durga Malleswara Siddhartha Mahila Kalasala', years: '2020-2023', details: 'CGPA: 7.0' },
    { degree: '10+2 (Intermediate)', institution: 'Sri Sai Vikas Junior College', years: '2018-2020', details: 'CGPA: 9.21' },
    { degree: '10th (SSC)', institution: 'Z.P High School', years: '2017-2018', details: 'CGPA: 9.2' },
];

const strengths: string[] = [
    'Proficient in Python and Core Java for robust application development.',
    'Experienced with MySQL for efficient database management.',
    'Hands-on experience with core AWS services like EC2 and S3.',
    'A quick learner with strong analytical and problem-solving skills.'
];

const About: React.FC = () => {
  const skillCategoryToIcon: Record<string, React.ReactNode> = {
    'Programming': <CodeIcon className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />,
    'Cloud': <CloudIcon className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />,
    'Frontend': <CodeIcon className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />,
    'Database': <DatabaseIcon className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />,
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto mb-20">
            <div className="flex-shrink-0">
                <img 
                    src={profilePhotoUrl}
                    alt="Medavaram Devasena"
                    className="w-48 h-48 rounded-full object-cover border-4 border-slate-700 shadow-lg"
                />
            </div>
            <div className="text-center md:text-left">
                <p className="text-lg text-slate-300">
                    I am a dedicated and passionate software developer with a strong foundation in modern technologies. My goal is to work in a growth-oriented company where I can apply my skills in Python, Java, MySQL, and AWS to create meaningful and efficient software solutions. I am always eager to learn new things and contribute to a company's success.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Education</h3>
                <div className="relative border-l-2 border-slate-700 pl-6 space-y-8">
                {education.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[34px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                        <p className="font-bold text-lg">{item.degree}</p>
                        <p className="text-slate-400">{item.institution}</p>
                        <p className="text-sm text-cyan-400/80 mb-1">{item.years}</p>
                        <p className="text-sm text-slate-400">{item.details}</p>
                    </div>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-lg mb-3 flex items-center">
                                {skillCategoryToIcon[skill.category]}
                                <span>{skill.category}</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="bg-slate-800 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-cyan-400 mt-12 mb-6">Strengths</h3>
                <ul className="space-y-3 list-disc list-inside text-slate-300">
                    {strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;