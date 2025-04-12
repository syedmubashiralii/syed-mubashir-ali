import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
const Hero = () => {
  return <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 bg-gradient-to-br from-portfolio-navy to-portfolio-navy/90">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white space-y-6 mb-10 md:mb-0">
            <h1 className="font-bold">
              <span className="text-2xl block mb-2 text-portfolio-lightBlue">Hello, I'm</span>
              <span className="text-5xl md:text-6xl lg:text-6xl">Syed Mubashir Ali</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-portfolio-gray font-medium">Flutter Developer</h2>
            <p className="text-lg text-gray-300 max-w-lg">I specialize in building modern mobile, web and desktop applications and creating exceptional digital experiences.</p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <a href="#resume">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-lightBlue transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-lightBlue transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal shadow-xl">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;