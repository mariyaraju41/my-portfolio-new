
import React from 'react';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string; link: string; type?: string }> = ({ icon, text, link, type = 'link' }) => (
    <a 
        href={type === 'link' ? link : `${type}:${link}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg transition-all duration-300 hover:bg-slate-700 hover:text-cyan-400 group"
    >
        <div className="text-cyan-400 group-hover:scale-110 transition-transform">{icon}</div>
        <div className="flex items-center">
            <span className="text-slate-200 group-hover:text-cyan-400">{text}</span>
            <ExternalLinkIcon className="w-4 h-4 ml-2 text-slate-500 group-hover:text-cyan-400 transition-colors" />
        </div>
    </a>
);

const Contact: React.FC = () => {
  const mailIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
  const linkedInIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
  const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfo 
                icon={mailIcon} 
                text="medavaramdevasena20@gmail.com" 
                link="medavaramdevasena20@gmail.com"
                type="mailto"
            />
            <ContactInfo 
                icon={linkedInIcon} 
                text="linkedin.com/in/medavaram-devasena" 
                link="https://linkedin.com/in/medavaram-devasena"
            />
             <ContactInfo 
                icon={phoneIcon} 
                text="+91 9550190389" 
                link="+919550190389"
                type="tel"
            />
        </div>
      </div>
    </section>
  );
};

export default Contact;
