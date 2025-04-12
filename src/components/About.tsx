
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
            <h3 className="text-2xl font-semibold text-portfolio-navy">Who I Am</h3>
            <p className="text-gray-600">
              I am a passionate software developer with a strong foundation in modern web technologies. 
              My journey in the tech world began with a curiosity about how websites work, 
              which quickly evolved into a deep passion for building innovative digital solutions.
            </p>
            <p className="text-gray-600">
              With experience in both frontend and backend development, I enjoy creating 
              responsive, user-friendly applications that solve real-world problems. 
              I'm constantly learning and adapting to new technologies to stay at the 
              forefront of the industry.
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
