
import { 
  Database, 
  Code,
  Smartphone,
  Globe,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: ["Dart", "JavaScript", "Java", "C++", "PHP", "C#"]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: ["MySQL", "Firebase", "SQLite", "Supabase", "MongoDB"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      skills: ["Flutter", "React Native", "Android", "iOS"]
    },
    {
      title: "Application Types",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      skills: ["Mobile Apps", "Desktop Apps", "Web Apps"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my journey as a developer. 
            Here's an overview of my technical expertise and the technologies I work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white group border border-slate-100"
            >
              <div className="flex items-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
                <h3 className="text-lg font-semibold text-slate-800 ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-200"></span>
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
