
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Buddy Tracker",
      description: "Live Location & Buddy Tracker is a powerful app for real-time location sharing, group tracking, chat, route finding, and travel history.",
      image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/buddy-tracker-1.jpg",
      tags: ["Flutter", "Dart", "Google Map", "Firebase"],
      liveLink: "https://play.google.com/store/apps/details?id=com.charisma.trackassistant.GPStrackingprofiling.guide&hl=en",
      githubLink: "https://github.com/syedmubashiralii/BuddyTracker"
    },
    {
      title: "Pacer",
      description: "Pacer is your personal step counter and walking tracker. Using a built-in pedometer, it records every step, distance walked, and your walking path.",
      image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/pacer-1.jpg",
      tags: ["Flutter", "Dart", "Google Map", "Firebase"],
      liveLink: "https://play.google.com/store/apps/details?id=charisma.motiondetectorpedometer.steptrackercounter&hl=en",
      githubLink: "https://github.com/syedmubashiralii/Pacer-Android"
    },
    {
      title: "BrightFlixx",
      description: "BrightFlixx is your personalized entertainment hub – stream your favorite movies and shows, just like Netflix.",
      image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/brightflixx-1.jpg",
      tags: ["Flutter", "Dart"],
      liveLink: "https://play.google.com/store/apps/details?id=com.stream.brightflixx&hl=en",
      
    },
    {
      title: "Neo Pass",
      description: "Neopass is a modern travel booking platform built entirely using Flutter for Web, designed to offer seamless travel experiences powered by cryptocurrency payments.",
      image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/neopass-1.png",
      tags: ["Flutter", "Dart", "Stripe", "Crypto-Payments", "Flutter Web"],
      liveLink: "https://neopass.club/key",
      githubLink: "#"
    },
    {
      title: "Neo One",
      description: "Neo One is a modern Flutter fintech app offering virtual cards, IBANs, and a secure multi-currency crypto wallet.\nLink your bank accounts seamlessly using Plaid-powered Open Banking.",
      image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/neo-one-1.jpg",
      tags: ["Flutter", "Fintech", "Dart", "Plaid", "Striga", "Weavr"],
      liveLink: "https://apps.apple.com/sk/app/neo-one/id6475296925",
      githubLink: "#"
    },
    {
      title: "Real Estate Platform",
      description: "A platform for listing and searching real estate properties with virtual tours and location analytics.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      tags: ["Next.js", "MongoDB", "Google Maps API", "Cloudinary", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">My Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills and experience in 
            building modern web and mobile applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-slate-200"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    {project.githubLink && (
                      <Button 
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-white/90 border-white text-slate-800 hover:bg-white flex-1"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button 
                      asChild
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            asChild
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <a href="https://github.com/syedmubashiralii" target="_blank" rel="noopener noreferrer" className="flex items-center">
              View More on GitHub <Github className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
