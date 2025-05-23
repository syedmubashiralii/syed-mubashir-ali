
import { Briefcase, Calendar, MapPin, GraduationCap, Code, Smartphone, CreditCard, Database } from "lucide-react";

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
    <section id="experience" className="py-20 bg-portfolio-navy text-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background that have shaped my expertise and knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 text-portfolio-teal" /> 
              Work Experience
            </h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-600">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-portfolio-teal rounded-full flex items-center justify-center">
                    {index === 0 ? (
                      <CreditCard className="w-5 h-5 text-white" />
                    ) : index === 1 ? (
                      <Smartphone className="w-5 h-5 text-white" />
                    ) : (
                      <Code className="w-5 h-5 text-white" />
                    )}
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-portfolio-lightBlue">{exp.title}</h4>
                    <h5 className="text-lg font-medium mb-2">{exp.company}</h5>
                    
                    <div className="flex flex-wrap text-sm text-gray-300 mb-4">
                      <div className="flex items-center mr-4 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 text-portfolio-teal" /> 
              Education
            </h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-600">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-portfolio-teal rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-portfolio-lightBlue">{edu.degree}</h4>
                    <h5 className="text-lg font-medium mb-2">{edu.institution}</h5>
                    
                    <div className="flex flex-wrap text-sm text-gray-300 mb-4">
                      <div className="flex items-center mr-4 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300">{edu.description}</p>
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
