
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Buddy Tracker",
      description: "Live Location & Buddy Tracker is a powerful app for real-time location sharing, group tracking, chat, route finding, and travel history — perfect for staying connected and safe with friends and family.",
      image: "images/buddy-tracker-1.jpg",
      tags: ["Flutter", "Dart", "Google Map", "Firebase"],
      liveLink: "https://play.google.com/store/apps/details?id=com.charisma.trackassistant.GPStrackingprofiling.guide&hl=en",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspace.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      tags: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Finance Dashboard",
      description: "An interactive dashboard for tracking personal finances with data visualization and budgeting tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "D3.js", "Express", "PostgreSQL", "Material UI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Health & Fitness Tracker",
      description: "A mobile application for tracking workouts, nutrition, and personal health metrics.",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1485&q=80",
      tags: ["React Native", "GraphQL", "Apollo", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Content Generator",
      description: "A web application that leverages AI to generate various types of content for marketing and social media.",
      image: "https://images.unsplash.com/photo-1677442135726-98fa2fb79ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      tags: ["Python", "Flask", "OpenAI API", "React", "Docker"],
      liveLink: "#",
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
    <section id="projects" className="py-20 bg-portfolio-lightGray">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills and experience in 
            building modern web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-portfolio-teal/10 text-portfolio-teal text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="flex-1 flex items-center justify-center"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button 
                    asChild
                    size="sm"
                    className="flex-1 bg-portfolio-teal hover:bg-portfolio-teal/90 flex items-center justify-center"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline" 
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white"
          >
            <a href="https://github.com/syedmubashiralii" target="_blank" rel="noopener noreferrer">
              View More on GitHub <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
