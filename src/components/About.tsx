
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container">
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {/* Profile Image First */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-portfolio-teal/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/lovable-uploads/e1f47e99-afdd-4bef-bd99-22591418bfef.png" 
                 alt="Syed Mubashir Ali - Flutter Developer" 
                 className="relative rounded-2xl shadow-xl w-full max-w-sm mx-auto hover:shadow-2xl transition-all duration-500 group-hover:scale-105" />
          </div>
          
          {/* Brief Content Below */}
          <div className="text-center space-y-6">
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p className="text-lg hover:text-slate-800 transition-colors duration-300">
                Passionate Flutter developer with expertise in building high-performance mobile and web applications. I've deployed over 20 apps across Google Play and the App Store.
              </p>
              <p className="hover:text-slate-800 transition-colors duration-300">
                Specializing in fintech solutions, AI-powered tools, streaming platforms, and e-commerce applications with clean, scalable code.
              </p>
            </div>
            
            {/* Key Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <h4 className="text-sm font-semibold text-slate-800">Location</h4>
                <p className="text-slate-600 text-sm">Islamabad, Pakistan</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <h4 className="text-sm font-semibold text-slate-800">Email</h4>
                <p className="text-slate-600 text-xs">smubashirali620@gmail.com</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button asChild className="bg-gradient-to-r from-blue-600 to-portfolio-teal hover:from-blue-700 hover:to-portfolio-teal/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="#resume">View My Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
