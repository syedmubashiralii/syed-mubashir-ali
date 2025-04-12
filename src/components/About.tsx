
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-lightGray">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Working on a laptop"
              className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-600">
            I'm a passionate Flutter developer with a strong foundation in building high-performance mobile and web applications. My journey into development began with a fascination for how apps work — today, that curiosity fuels a career dedicated to solving real-world problems through clean, scalable code.
            </p>
            <p className="text-gray-600">
            With experience developing and deploying over 20 apps across Google Play and the App Store, I've built fintech solutions, AI-powered image tools, streaming platforms, and end-to-end e-commerce apps. From seamless UI/UX to backend integration, I take pride in delivering polished, reliable experiences using Flutter, Firebase, GetX, Dio, and a wide range of tools.
            </p>
            <p className="text-gray-600">
            Whether it's integrating payment systems, building custom animations, or enhancing user engagement with notifications and machine learning, I'm always exploring new technologies to stay ahead. My approach is practical, user-centric, and driven by a continuous desire to learn and push the limits of what Flutter can do.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="text-lg font-medium text-portfolio-navy">Name:</h4>
                <p className="text-gray-600">Your Name</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-portfolio-navy">Email:</h4>
                <p className="text-gray-600">youremail@example.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-portfolio-navy">Location:</h4>
                <p className="text-gray-600">Your City, Country</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-portfolio-navy">Available for:</h4>
                <p className="text-gray-600">Freelance, Full-time</p>
              </div>
            </div>
            
            <Button 
              asChild
              className="bg-portfolio-teal hover:bg-portfolio-teal/90 mt-6"
            >
              <a href="#resume">View My Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
