
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-white space-y-4 mb-8 md:mb-0">
            <div className="animate-fade-in">
              <div className="flex items-center mb-2">
                <Sparkles className="w-5 h-5 text-blue-300 mr-2 animate-pulse" />
                <span className="text-lg text-blue-300 font-medium">Hello, I'm</span>
                <Sparkles className="w-5 h-5 text-blue-300 ml-2 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-portfolio-teal bg-clip-text text-transparent">
                Syed Mubashir Ali
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium bg-gradient-to-r from-slate-300 to-blue-200 bg-clip-text text-transparent">
              Flutter Developer
            </h2>
            <p className="text-slate-400 max-w-lg leading-relaxed">
              I specialize in building modern mobile, web and desktop applications and creating exceptional digital experiences.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-portfolio-teal hover:from-blue-700 hover:to-portfolio-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-slate-400 text-white hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105">
                <a href="#resume">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <a href="https://github.com/syedmubashiralii" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10">
                <Github size={20} />
              </a>
              <a href="www.linkedin.com/in/syed-mubashir-ali-796122177" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-portfolio-teal/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl hover:scale-105 transition-all duration-500 hover:border-blue-400">
                <img alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                     src="/lovable-uploads/487de536-0b61-45c5-8411-260cbe848850.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
