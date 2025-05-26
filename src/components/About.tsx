
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="relative group">
              <img src="/lovable-uploads/e1f47e99-afdd-4bef-bd99-22591418bfef.png" 
                   alt="Syed Mubashir Ali - Flutter Developer" 
                   className="rounded-2xl shadow-lg w-full max-w-md mx-auto hover:shadow-2xl transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-5">
            <div className="space-y-4 text-slate-600">
              <p className="hover:text-slate-800 transition-colors duration-300">
                I'm a passionate Flutter developer with a strong foundation in building high-performance mobile and web applications. My journey into development began with a fascination for how apps work — today, that curiosity fuels a career dedicated to solving real-world problems through clean, scalable code.
              </p>
              <p className="hover:text-slate-800 transition-colors duration-300">
                With experience developing and deploying over 20 apps across Google Play and the App Store, I've built fintech solutions, AI-powered image tools, streaming platforms, and end-to-end e-commerce apps. From seamless UI/UX to backend integration, I take pride in delivering polished, reliable experiences using Flutter, Firebase, GetX, Dio, and a wide range of tools.
              </p>
              <p className="hover:text-slate-800 transition-colors duration-300">
                Whether it's integrating payment systems, building custom animations, or enhancing user engagement with notifications and machine learning, I'm always exploring new technologies to stay ahead. My approach is practical, user-centric, and driven by a continuous desire to learn and push the limits of what Flutter can do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <h4 className="text-sm font-semibold text-slate-800">Name:</h4>
                <p className="text-slate-600">Syed Mubashir Ali</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <h4 className="text-sm font-semibold text-slate-800">Email:</h4>
                <p className="text-slate-600 text-sm">smubashirali620@gmail.com</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <h4 className="text-sm font-semibold text-slate-800">Location:</h4>
                <p className="text-slate-600">Islamabad, Pakistan</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <h4 className="text-sm font-semibold text-slate-800">Available for:</h4>
                <p className="text-slate-600">Freelance, Full-time</p>
              </div>
            </div>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="#resume">View My Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
