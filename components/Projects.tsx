
import React from 'react';
import { Project } from '../types';
import CodeIcon from './icons/CodeIcon';

const projects: Project[] = [
  {
    title: 'Cloud-Based Web Service Hosting',
    description: 'Launched scalable web servers on AWS EC2, stored static assets on S3, and managed backend data with RDS, demonstrating a comprehensive cloud architecture.',
    technologies: ['AWS EC2', 'AWS S3', 'AWS RDS', 'VPC'],
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
  },
  {
    title: 'Secure Authorized Deduplication',
    description: 'Developed a hybrid system to securely remove duplicate file storage in the cloud, ensuring only authorized users can access or upload data through robust access control.',
    technologies: ['Python', 'Cryptography', 'Cloud Storage', 'Security'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
  },
  {
    title: 'Online Examination System',
    description: 'Built a full-stack online examination platform using Python and Flask for the backend API and modern frontend technologies for a responsive user interface.',
    technologies: ['Python', 'Flask', 'HTML5', 'CSS3', 'MySQL'],
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
  },
   {
    title: 'Python Full Stack Development',
    description: 'Completed an intensive full-stack developer certification, gaining expertise in building end-to-end applications with Python-based frameworks and modern frontend tools.',
    technologies: ['Python', 'Django/Flask', 'React', 'Databases'],
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 group">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projects & Certifications
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Here are some of the projects and learning milestones I'm proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
