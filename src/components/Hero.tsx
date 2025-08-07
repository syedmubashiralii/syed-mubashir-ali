
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
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Picture Centered */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-portfolio-teal/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl hover:scale-105 transition-all duration-500 hover:border-blue-400">
              <img alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                   src="/lovable-uploads/487de536-0b61-45c5-8411-260cbe848850.png" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-white space-y-6 max-w-4xl">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-2">
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
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
              Passionate Flutter developer with expertise in building high-performance mobile and web applications. I've deployed over 20 apps across Google Play and the App Store, specializing in fintech solutions, AI-powered tools, and e-commerce applications.
            </p>
            
            {/* Key Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-sm font-semibold text-blue-200">Location</h4>
                <p className="text-slate-300 text-sm">Islamabad, Pakistan</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-sm font-semibold text-blue-200">Email</h4>
                <p className="text-slate-300 text-xs">smubashirali620@gmail.com</p>
              </div>
            </div>
            
            <div className="pt-4 flex flex-wrap justify-center gap-3">
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
            
            <div className="flex items-center justify-center space-x-4 pt-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
