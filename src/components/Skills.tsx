
import { 
  Database, 
  Code,
  Smartphone,
  Globe,
  Sparkles
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["Dart", "JavaScript", "Java", "C++", "PHP", "C#"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-green-600" />,
      skills: ["MySQL", "Firebase", "SQLite", "Supabase", "MongoDB"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6 text-orange-600" />,
      skills: ["Flutter", "React Native", "Android", "iOS"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Application Types",
      icon: <Globe className="w-6 h-6 text-portfolio-teal" />,
      skills: ["Mobile Apps", "Desktop Apps", "Web Apps"],
      gradient: "from-portfolio-teal to-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
      <div className="container relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Sparkles className="w-6 h-6 text-portfolio-teal mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">My Skills</h2>
            <Sparkles className="w-6 h-6 text-portfolio-teal ml-2" />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-portfolio-teal mx-auto mb-3"></div>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            I've acquired a diverse set of skills throughout my journey as a developer. 
            Here's an overview of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-slate-100 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`}></div>
              <div className="flex items-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10`}>
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-800 ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600 transition-colors duration-200"></span>
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
