
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "Jan 2021 - Present",
      description: [
        "Led the development of a scalable e-commerce platform using React, Node.js, and MongoDB",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Mentored junior developers and conducted code reviews to ensure code quality",
        "Optimized database queries resulting in a 30% performance improvement"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Co.",
      location: "New York, NY",
      period: "May 2018 - Dec 2020",
      description: [
        "Developed and maintained multiple client websites using React, Express, and PostgreSQL",
        "Created RESTful APIs for mobile applications with over 50,000 active users",
        "Collaborated with design team to implement responsive UI components",
        "Participated in agile development process and sprint planning"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebCreative Agency",
      location: "Chicago, IL",
      period: "Aug 2016 - Apr 2018",
      description: [
        "Built interactive and responsive websites for various clients using HTML, CSS, and JavaScript",
        "Worked with WordPress and custom PHP solutions to deliver content management systems",
        "Implemented cross-browser compatibility fixes and performance optimizations",
        "Assisted in UX/UI design and prototyping for web applications"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2016",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Neural Networks for Natural Language Processing'."
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      period: "2010 - 2014",
      description: "Graduated with honors. Participated in various hackathons and software development competitions."
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
                    <span className="text-white font-bold">{index + 1}</span>
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
              <Calendar className="mr-3 text-portfolio-teal" /> 
              Education
            </h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-600">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-portfolio-teal rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
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
