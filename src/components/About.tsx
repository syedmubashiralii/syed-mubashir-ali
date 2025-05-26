
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-portfolio-teal mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-portfolio-teal/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src="/lovable-uploads/e1f47e99-afdd-4bef-bd99-22591418bfef.png" 
                   alt="Syed Mubashir Ali - Flutter Developer" 
                   className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto hover:shadow-2xl transition-all duration-500 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-4">
            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <p className="hover:text-slate-800 transition-colors duration-300">
                I'm a passionate Flutter developer with a strong foundation in building high-performance mobile and web applications. My journey into development began with a fascination for how apps work — today, that curiosity fuels a career dedicated to solving real-world problems through clean, scalable code.
              </p>
              <p className="hover:text-slate-800 transition-colors duration-300">
                With experience developing and deploying over 20 apps across Google Play and the App Store, I've built fintech solutions, AI-powered image tools, streaming platforms, and end-to-end e-commerce apps.
              </p>
              <p className="hover:text-slate-800 transition-colors duration-300">
                Whether it's integrating payment systems, building custom animations, or enhancing user engagement with notifications and machine learning, I'm always exploring new technologies to stay ahead.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <h4 className="text-sm font-semibold text-slate-800">Name:</h4>
                <p className="text-slate-600 text-sm">Syed Mubashir Ali</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <h4 className="text-sm font-semibold text-slate-800">Email:</h4>
                <p className="text-slate-600 text-xs">smubashirali620@gmail.com</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <h4 className="text-sm font-semibold text-slate-800">Location:</h4>
                <p className="text-slate-600 text-sm">Islamabad, Pakistan</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <h4 className="text-sm font-semibold text-slate-800">Available for:</h4>
                <p className="text-slate-600 text-sm">Freelance, Full-time</p>
              </div>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-blue-600 to-portfolio-teal hover:from-blue-700 hover:to-portfolio-teal/90 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="#resume">View My Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
