
import { Briefcase, Calendar, MapPin, GraduationCap, CreditCard, Smartphone, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "HeapStash Global",
      location: "Lahore (Remote)",
      period: "Nov 2023 - Mar 2025",
      description: [
        "Developed a Fintech application with features like bank account linking and cryptocurrency wallet management, ensuring secure transactions and seamless financial operations.",
        "Built a Flutter web application for flight bookings and cryptocurrency payments, optimizing performance and user experience for smooth transactions and hassle-free booking."
      ]
    },
    {
      title: "Flutter Mobile App Developer",
      company: "Khas Tech",
      location: "Islamabad",
      period: "Jun 2022 - Nov 2023",
      description: [
        "Developed and deployed various AI-powered editing applications and utility apps using Flutter for both the Play Store and App Store.",
        "Created Enhancer, Remover, Sketcher – AI-based image processing apps for enhancing images, removing objects, and converting photos into sketches.",
        "Designed ICR (Intelligent Character Recognition) Apps for text extraction and document scanning.",
        "Built tracking applications and step counter (pedometer) apps for fitness and location-based services.",
        "Focused on performance enhancement, seamless UI/UX, and AI integration to enhance user experience across multiple applications."
      ]
    },
  ];

  const education = [
    {
      degree: "BS in Computer Science",
      institution: "BIIT (Barani Institute of Information Technology)",
      location: "Rawalpindi, Pakistan",
      period: "Oct 2018 - Jun 2022",
      description: "Graduated with a Bachelor of Science degree in Computer Science, gaining solid foundations in programming, algorithms, data structures, and software development."
    }
  ];

  return (
    <section id="experience" className="py-16 bg-slate-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience & Education</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            My professional journey and academic background that have shaped my expertise and knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-3 text-blue-500" /> 
              Work Experience
            </h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-700">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {index === 0 ? (
                      <CreditCard className="w-5 h-5 text-white" />
                    ) : index === 1 ? (
                      <Smartphone className="w-5 h-5 text-white" />
                    ) : (
                      <Code className="w-5 h-5 text-white" />
                    )}
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-blue-300">{exp.title}</h4>
                    <h5 className="text-base font-medium mb-2">{exp.company}</h5>
                    
                    <div className="flex flex-wrap text-sm text-slate-400 mb-3">
                      <div className="flex items-center mr-4 mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="hover:text-white transition-colors duration-200">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-500" /> 
              Education
            </h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-700">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-blue-300">{edu.degree}</h4>
                    <h5 className="text-base font-medium mb-2">{edu.institution}</h5>
                    
                    <div className="flex flex-wrap text-sm text-slate-400 mb-3">
                      <div className="flex items-center mr-4 mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-300 hover:text-white transition-colors duration-200">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
