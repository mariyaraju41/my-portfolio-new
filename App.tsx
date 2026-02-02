import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import type { Project, Experience, Education, Certification, SkillCategory } from './types';
import Section from './components/Section';
import { EnvelopeIcon, PhoneIcon, LinkedinIcon, GithubIcon, CertificateIcon, DocumentIcon, DownloadIcon } from './components/Icons';

// --- DATA FROM RESUME ---
const profileImage = "https://media.licdn.com/dms/image/v2/D5603AQHZzXJ0HqULaA/profile-displayphoto-shrink_400_400/B56ZT2QfvXGsAg-/0/1739298307808?e=1771459200&v=beta&t=curD0WQ_R3zARL8v3SUeGlHPwTT7kd3zoxvi4trg6IM";

const professionalSummary = "Moddalo Software Developer with hands-on experience in designing, developing, debugging, and enhancing scalable applications and tools using Java, Spring Boot, and React.js. Skilled in modern software architecture, RESTful APIs, and database-driven application logic. Proficient in building microservices, troubleshooting complex bugs, and deploying secure cloud-based applications. Passionate about clean code and continuous learning.";

const technicalSkills: SkillCategory[] = [
    { title: "Languages", skills: ["Java 8+", "JavaScript", "TypeScript"] },
    { title: "Frameworks/Tech", skills: ["Spring Boot", "Node.js", "React.js", "Angular", "Express.js"] },
    { title: "Databases", skills: ["MySQL", "SQL"] },
    { title: "Tools/Cloud", skills: ["AWS (EC2, S3, Lambda)", "Git", "Docker", "Kubernetes"] },
    { title: "Testing DevOps", skills: ["JUnit", "Selenium", "Jenkins", "GitHub", "Postman"] },
    { title: "Architecture", skills: ["REST APIs", "Microservices", "CI/CD", "Event-driven design"] },
];

const projects: Project[] = [
  {
    title: "Task Management System",
    tech: ["Spring Boot", "React.js", "MySQL", "Kafka", "Docker", "Kubernetes"],
    date: "2023–2024",
    description: [
        "Designed a modular application using Spring Boot, React.js, MySQL with event-driven updates via Kafka.",
        "Deployed using Docker and Kubernetes for high availability and scalability.",
    ],
    link: "#",
  },
  {
    title: "College Management System (CMS)",
    tech: ["Java", "Spring Boot", "React.js"],
    date: "2022–2023",
    description: [
        "Built a full-stack CMS to streamline academic administration using Java, Spring Boot, and React.js.",
        "Boosted user engagement by 40% through a responsive UI and automated deployment.",
    ],
    link: "#",
  },
];

const internship: Experience = {
  role: "Full Stack Development Intern",
  company: "Kodnest Technologies",
  location: "Bangalore",
  date: "2023–2024",
  points: [
    "Developed and enhanced responsive web applications, improving UX by 30%.",
    "Integrated RESTful APIs with Spring Boot, optimizing performance and reducing query latency by 20%.",
    "Built and deployed microservices using Docker and Kubernetes to improve system reliability by 35%.",
    "Conducted unit testing and debugging using JUnit and Postman.",
    "Participated in code reviews, CI/CD automation, and performance tuning.",
  ],
};

const education: Education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "A.M. Reddy Memorial College of Engineering and Technology",
    date: "2024",
    cgpa: "6.5",
};

const certifications: Certification[] = [
    { name: "Full Stack Java Developer", issuer: "Kodnest Technologies" },
    { name: "Responsive Web Design", issuer: "FreeCodeCamp" },
];

// --- COMPONENTS ---

const NavLink: React.FC<{ onClick: () => void; isActive: boolean; children: React.ReactNode }> = ({ onClick, isActive, children }) => (
  <button
    onClick={onClick}
    className={`relative font-medium px-3 py-2 transition-colors duration-300 text-sm md:text-base group ${
      isActive 
        ? 'text-white' 
        : 'text-slate-300 hover:text-white'
    }`}
  >
    <span>{children}</span>
    <span className={`absolute bottom-0 left-0 h-0.5 bg-sky-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
  </button>
);

const Navbar: React.FC<{ activeView: string; onNavClick: (view: string) => void, className?: string }> = ({ activeView, onNavClick, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { view: 'home', label: 'Home' },
        { view: 'about', label: 'About' },
        { view: 'projects', label: 'Projects' },
        { view: 'resume', label: 'Resume' },
        { view: 'contact', label: 'Contact' },
    ];
    
    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                         <button onClick={() => onNavClick('home')} className="text-2xl font-bold text-white font-serif">MI</button>
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
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-slate-800/50 inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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
                                        ? 'bg-sky-500/30 text-white'
                                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
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
    <span className="inline-block bg-sky-100 text-sky-800 text-sm font-medium px-3 py-1 rounded-full transition-transform duration-200 hover:scale-105 hover:bg-sky-200">{skill}</span>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200/50 shadow-md hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col hover:-translate-y-1">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
            <span className="text-sm font-medium text-slate-500 flex-shrink-0 ml-2">{project.date}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(t => <span key={t} className="bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">{t}</span>)}
        </div>
        <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4 flex-grow">
          {project.description.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-800 font-semibold mt-auto group">
            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>View Repository</span>
        </a>
    </div>
);

const AnimatedView: React.FC<{ isVisible: boolean, children: React.ReactNode }> = ({ isVisible, children }) => {
  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {isVisible && <div className="animate-fade-in">{children}</div>}
    </div>
  );
};


const App: React.FC = () => {
  const [activeView, setActiveView] = useState('home');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    const resumeElement = document.getElementById('resume-container');
    if (!resumeElement) return;

    setIsDownloading(true);

    try {
        const canvas = await html2canvas(resumeElement, {
            scale: 2, 
            useCORS: true,
            backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        
        const ratio = canvasHeight / canvasWidth;
        
        const imgHeight = pdfWidth * ratio;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
            position = -heightLeft;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;
        }

        pdf.save('MariyaraJu_Indla_Resume.pdf');

    } catch (error) {
        console.error("Failed to generate PDF", error);
        alert("Sorry, there was an error generating the PDF. As a fallback, you can use your browser's print function (Ctrl+P or Cmd+P) to save the page as a PDF.");
    } finally {
        setIsDownloading(false);
    }
  };

  return (
    <div className="font-sans leading-relaxed text-slate-800">
      <Navbar className="no-print" activeView={activeView} onNavClick={setActiveView} />

      <main>
        <AnimatedView isVisible={activeView === 'home'}>
            <section className="min-h-screen flex items-center justify-center py-20 md:py-32 text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5 text-center md:text-left">
                            <p className="text-sky-300 font-bold text-lg md:text-xl">Hello, I'm</p>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-serif mt-2 animate-gradient-text">MARIYARAJU INDLA</h1>
                            <p className="mt-4 text-xl md:text-2xl text-slate-300">A Full Stack Developer specializing in Java & AWS.</p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                 <a href="https://linkedin.com/in/mariya-raju-indla" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
                                    <LinkedinIcon className="w-8 h-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
                                    <GithubIcon className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                        <div className="md:w-2/5 flex justify-center">
                            <img 
                                src={profileImage} 
                                alt="MariyaraJu Indla" 
                                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(125,211,252,0.4)]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedView>
        
        <AnimatedView isVisible={activeView === 'about'}>
            <Section title="About Me" className="bg-white/80 backdrop-blur-lg">
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
                             <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                              <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
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
        </AnimatedView>

        <AnimatedView isVisible={activeView === 'projects'}>
            <Section title="Projects & Experience" className="bg-slate-50/80 backdrop-blur-lg">
                <div className="space-y-12">
                     <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Projects</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map(p => <ProjectCard key={p.title} project={p} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Internship</h3>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200/50 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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
        </AnimatedView>
        
        <AnimatedView isVisible={activeView === 'resume'}>
            <Section title="My Resume" className="bg-slate-100/80 backdrop-blur-lg">
                <div className="max-w-4xl mx-auto">
                    <div className="text-right mb-6 no-print">
                        <button
                            onClick={handleDownloadPdf}
                            disabled={isDownloading}
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-sky-400 disabled:cursor-not-allowed hover:-translate-y-0.5 transform"
                        >
                             {isDownloading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating PDF...
                                </>
                            ) : (
                                <>
                                    <DownloadIcon className="w-5 h-5 mr-2 -ml-1" />
                                    Download as PDF
                                </>
                            )}
                        </button>
                    </div>
                    
                    <div id="resume-container" className="bg-white p-8 md:p-12 rounded-lg shadow-2xl border border-slate-200">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-wide font-serif">Mariyaraju Indla</h1>
                            <div className="mt-4 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                                <a href="tel:+918367443035" className="flex items-center space-x-2 hover:text-sky-600">
                                    <PhoneIcon className="w-4 h-4" />
                                    <span>+91 8367443035</span>
                                </a>
                                <span className="text-slate-300 hidden sm:inline">|</span>
                                <a href="mailto:mariyarajuindla3@gmail.com" className="flex items-center space-x-2 hover:text-sky-600">
                                    <EnvelopeIcon className="w-4 h-4" />
                                    <span>mariyarajuindla3@gmail.com</span>
                                </a>
                                <span className="text-slate-300 hidden sm:inline">|</span>
                                <a href="https://linkedin.com/in/mariya-raju-indla" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-sky-600">
                                    <LinkedinIcon className="w-4 h-4" />
                                    <span>linkedin.com/in/mariya-raju-indla</span>
                                </a>
                            </div>
                        </div>

                        {/* Resume Sections */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Professional Summary</h2>
                                <p className="text-slate-700 text-balance">{professionalSummary}</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Technical Skills</h2>
                                <div className="space-y-3">
                                    {technicalSkills.map(category => (
                                        <div key={category.title} className="flex flex-col sm:flex-row">
                                            <h3 className="font-bold text-slate-700 w-full sm:w-48 shrink-0">{category.title}</h3>
                                            <p className="text-slate-700">{category.skills.join(', ')}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Experience</h2>
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="text-lg font-bold text-slate-800">{internship.role}</h3>
                                        <span className="text-sm font-medium text-slate-500">{internship.date}</span>
                                    </div>
                                    <p className="font-semibold text-slate-700 mb-2">{internship.company}, {internship.location}</p>
                                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                                        {internship.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Projects</h2>
                                <div className="space-y-4">
                                    {projects.map(project => (
                                        <div key={project.title}>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
                                                <span className="text-sm font-medium text-slate-500">{project.date}</span>
                                            </div>
                                            <ul className="list-disc list-inside space-y-1 text-slate-700">
                                                {project.description.map((point, i) => <li key={i}>{point}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Education</h2>
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="text-lg font-bold text-slate-800">{education.degree}</h3>
                                        <span className="text-sm font-medium text-slate-500">{education.date}</span>
                                    </div>
                                    <p className="font-semibold text-slate-700">{education.institution}</p>
                                    {education.cgpa && <p className="text-sm text-slate-500 mt-1">CGPA: {education.cgpa}</p>}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Certifications</h2>
                                <ul className="list-disc list-inside space-y-1 text-slate-700">
                                    {certifications.map(cert => (
                                        <li key={cert.name}>{cert.name} – <span className="italic">{cert.issuer}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </AnimatedView>

        <AnimatedView isVisible={activeView === 'contact'}>
            <section className="bg-slate-900/70 backdrop-blur-md text-slate-300 py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                     <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto text-balance">
                        I'm currently looking for new opportunities. If you have a project or a role that you think I'd be a good fit for, please don't hesitate to reach out.
                     </p>
                     <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 text-lg">
                        <a href="mailto:mariyarajuindla3@gmail.com" className="flex items-center space-x-2 hover:text-sky-400 transition-colors duration-300 group">
                            <EnvelopeIcon className="w-6 h-6 transform transition-transform group-hover:scale-110" />
                            <span>mariyarajuindla3@gmail.com</span>
                        </a>
                        <a href="tel:+918367443035" className="flex items-center space-x-2 hover:text-sky-400 transition-colors duration-300 group">
                            <PhoneIcon className="w-5 h-5 transform transition-transform group-hover:scale-110" />
                            <span>+91 8367443035</span>
                        </a>
                     </div>
                     <div className="mt-12 pt-8 border-t border-slate-700">
                        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Mariyaraju Indla. All Rights Reserved.</p>
                     </div>
                </div>
            </section>
        </AnimatedView>
      </main>
    </div>
  );
};

export default App;
