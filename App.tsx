import React, { useState } from 'react';
import type { Project, Experience, Education, Certification, SkillCategory } from './types';
import Section from './components/Section';
import { EnvelopeIcon, PhoneIcon, LinkedinIcon, GithubIcon, CertificateIcon } from './components/Icons';

// --- DATA FROM RESUME ---
const profileImage = "https://media.licdn.com/dms/image/v2/D5603AQHZzXJ0HqULaA/profile-displayphoto-shrink_400_400/B56ZT2QfvXGsAg-/0/1739298307808?e=1758153600&v=beta&t=3M89e8Hh2jfvUlLZNqN7QYLFRQ79V2k8qXSpajRCA0c";

const professionalSummary = "Aspiring Software Developer with a strong foundation in Java full stack development and AWS cloud technologies. Seeking to join a backend-focused, cloud-native development team where I can contribute to building scalable microservices and RESTful APIs using Spring Boot and AWS. Eager to collaborate in Agile environments and committed to adaptability, continuous learning.";

const technicalSkills: SkillCategory[] = [
    { title: "Languages", skills: ["Java", "JavaScript", "Python"] },
    { title: "Frameworks", skills: ["Spring Boot", "React.js", "Angular JS", "Node JS"] },
    { title: "Databases", skills: ["MySQL", "SQL", "Oracle DB"] },
    { title: "Cloud/Tools", skills: ["AWS (EC2, S3, Lambda)", "Docker", "Git", "Linux"] },
    { title: "Architecture", skills: ["REST APIs", "Microservices", "CI/CD"] },
];

const projects: Project[] = [
  {
    title: "Task Management System",
    tech: ["Spring Boot", "React.js", "Kafka", "MySQL", "Docker"],
    date: "2023–2024",
    description: "Designed a modular application with event-driven updates via Kafka. Deployed using Docker and Kubernetes for scalability.",
    link: "#",
  },
  {
    title: "College Management System",
    tech: ["Java", "Spring Boot", "React.js"],
    date: "2022–2023",
    description: "Developed a full-stack web app to streamline academic administration. Improved UI responsiveness and automated deployment pipelines.",
    link: "#",
  },
];

const internship: Experience = {
  role: "Full Stack Development Intern",
  company: "Kodnest Technologies",
  location: "Bangalore",
  date: "2023–2024",
  points: [
    "Integrated Spring Boot REST APIs, improving performance and latency.",
    "Deployed microservices using Docker and Kubernetes, enhancing system reliability by 35%.",
    "Conducted unit testing with JUnit and API testing with Postman.",
    "Participated in code reviews, CI/CD automation, and debugging.",
  ],
};

const education: Education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "A.M. Reddy Memorial College of Engineering and Technology",
    date: "2024",
    cgpa: "6.5",
};

const certifications: Certification[] = [
    { name: "Full Stack Java Developer", issuer: "Besant Technologies" },
    { name: "Responsive Web Design", issuer: "FreeCodeCamp" },
    { name: "AWS Cloud Practitioner", issuer: "Tech Mahindra Foundation" },
];

// --- COMPONENTS ---

const NavLink: React.FC<{ onClick: () => void; isActive: boolean; children: React.ReactNode }> = ({ onClick, isActive, children }) => (
  <button
    onClick={onClick}
    className={`font-medium px-3 py-2 rounded-md transition-colors duration-300 text-sm md:text-base ${
      isActive 
        ? 'text-sky-700 bg-sky-100' 
        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100'
    }`}
  >
    {children}
  </button>
);

const Navbar: React.FC<{ activeView: string; onNavClick: (view: string) => void }> = ({ activeView, onNavClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { view: 'home', label: 'Home' },
        { view: 'about', label: 'About' },
        { view: 'projects', label: 'Projects' },
        { view: 'contact', label: 'Contact' },
    ];
    
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                         <button onClick={() => onNavClick('home')} className="text-2xl font-bold text-slate-800 font-serif">MI</button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                <NavLink 
                                    key={link.view} 
                                    onClick={() => onNavClick(link.view)}
                                    isActive={activeView === link.view}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-sky-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <button 
                                key={link.view} 
                                onClick={() => { onNavClick(link.view); setIsOpen(false); }} 
                                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                                    activeView === link.view 
                                        ? 'bg-sky-100 text-sky-700'
                                        : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};


const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-block bg-sky-100 text-sky-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
            <span className="text-sm font-medium text-slate-500 flex-shrink-0 ml-2">{project.date}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(t => <span key={t} className="bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">{t}</span>)}
        </div>
        <p className="text-slate-600 mb-4 text-balance flex-grow">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-800 font-semibold mt-auto">
            <GithubIcon className="w-5 h-5" />
            <span>View Repository</span>
        </a>
    </div>
);

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('home');

  return (
    <div className="font-sans leading-relaxed text-slate-800">
      <Navbar activeView={activeView} onNavClick={setActiveView} />

      <main>
        {activeView === 'home' && (
            <section className="bg-slate-100/60 backdrop-blur-md py-20 md:py-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5 text-center md:text-left">
                            <p className="text-sky-600 font-bold text-lg md:text-xl">Hello, I'm</p>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight font-serif mt-2">MARIYARAJU INDLA</h1>
                            <p className="mt-4 text-xl md:text-2xl text-slate-600">A Full Stack Developer specializing in Java & AWS.</p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                 <a href="https://linkedin.com/in/mariya-raju-indla" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-600 transition-colors duration-300">
                                    <LinkedinIcon className="w-8 h-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-600 transition-colors duration-300">
                                    <GithubIcon className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                        <div className="md:w-2/5 flex justify-center">
                            <img 
                                src={profileImage} 
                                alt="MariyaraJu Indla" 
                                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )}
        
        {activeView === 'about' && (
            <Section title="About Me" className="bg-white/70 backdrop-blur-md">
                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Professional Summary</h3>
                        <p className="text-lg text-balance">{professionalSummary}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
                         <div className="space-y-5">
                            {technicalSkills.map(category => (
                                <div key={category.title} className="flex flex-col sm:flex-row sm:items-start">
                                    <h4 className="font-bold text-slate-700 w-full sm:w-40 shrink-0 mb-2 sm:mb-0">{category.title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="grid md:grid-cols-2 gap-10">
                        <div>
                             <h3 className="text-2xl font-semibold text-slate-800 mb-6">Education</h3>
                             <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-lg font-bold text-slate-800">{education.degree}</h4>
                                    <span className="text-sm font-medium text-slate-500">{education.date}</span>
                                </div>
                                <p className="text-md text-slate-700">{education.institution}</p>
                                {education.cgpa && <p className="text-sm text-slate-500 mt-1">CGPA: {education.cgpa}</p>}
                            </div>
                        </div>
                        <div>
                             <h3 className="text-2xl font-semibold text-slate-800 mb-6">Certifications</h3>
                              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 h-full">
                                <ul className="space-y-4">
                                    {certifications.map(cert => (
                                        <li key={cert.name} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 pt-0.5">
                                                <CertificateIcon className="w-6 h-6 text-sky-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800">{cert.name}</h4>
                                                <p className="text-sm text-slate-600">{cert.issuer}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>
            </Section>
        )}

        {activeView === 'projects' && (
            <Section title="Projects & Experience" className="bg-slate-50/70 backdrop-blur-md">
                <div className="space-y-12">
                     <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Projects</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map(p => <ProjectCard key={p.title} project={p} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Internship</h3>
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-start mb-2 flex-wrap">
                                <h4 className="text-xl font-bold text-slate-800">{internship.role}</h4>
                                <span className="text-sm font-medium text-slate-500">{internship.date}</span>
                            </div>
                            <p className="text-lg font-semibold text-slate-700 mb-4">{internship.company}, {internship.location}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                {internship.points.map((point, index) => <li key={index}>{point}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        )}
        
        {activeView === 'contact' && (
            <section className="bg-slate-800/80 backdrop-blur-md text-slate-300 py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                     <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. If you have a project or a role that you think I'd be a good fit for, please don't hesitate to reach out.
                     </p>
                     <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 text-lg">
                        <a href="mailto:mariyarajuindla3@gmail.com" className="flex items-center space-x-2 hover:text-sky-400 transition-colors duration-300">
                            <EnvelopeIcon className="w-6 h-6" />
                            <span>mariyarajuindla3@gmail.com</span>
                        </a>
                        <a href="tel:+918367443035" className="flex items-center space-x-2 hover:text-sky-400 transition-colors duration-300">
                            <PhoneIcon className="w-5 h-5" />
                            <span>+91 8367443035</span>
                        </a>
                     </div>
                     <div className="mt-12 pt-8 border-t border-slate-700">
                        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Mariyaraju Indla. All Rights Reserved.</p>
                     </div>
                </div>
            </section>
        )}
      </main>
    </div>
  );
};

export default App;