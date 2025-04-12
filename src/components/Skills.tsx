
import { 
  Database, 
  Code,
  Smartphone,
  Monitor,
  Globe,
  Tablet,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-10 h-10 text-portfolio-teal" />,
      skills: ["Dart", "JavaScript", "Java", "C++", "PHP", "C#"]
    },
    {
      title: "Database",
      icon: <Database className="w-10 h-10 text-portfolio-teal" />,
      skills: ["MySQL", "Firebase", "SQLite", "Supabase", "MongoDB"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-10 h-10 text-portfolio-teal" />,
      skills: ["Flutter", "React Native", "Android", "iOS"]
    },
    {
      title: "Application Types",
      icon: <Globe className="w-10 h-10 text-portfolio-teal" />,
      skills: ["Mobile Apps", "Desktop Apps", "Web Apps"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my journey as a developer. 
            Here's an overview of my technical expertise and the technologies I work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-portfolio-lightGray rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-portfolio-navy ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
