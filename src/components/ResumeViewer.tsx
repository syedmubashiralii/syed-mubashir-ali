
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";
import { useState } from "react";

const ResumeViewer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1KK_ySJVvqbM8-uQNdQtbmXxTFK8r0Rzi/view?usp=drive_link";
  
  // Convert Google Drive link to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com/file/d/')) {
      const fileId = url.split('/file/d/')[1].split('/')[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  };
  
  const embedUrl = getEmbedUrl(resumeUrl);
  
  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  };
  
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section id="resume" className="py-20 bg-portfolio-navy">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            View or download my complete resume to learn more about my professional background,
            education, skills, and experience.
          </p>
        </div>
        
        <div className={`relative mx-auto bg-white shadow-xl rounded-lg overflow-hidden ${isFullScreen ? 'fixed inset-0 z-50 m-0 rounded-none' : 'max-w-4xl'}`}>
          <div className="bg-portfolio-teal text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <FileText className="mr-2" />
              <h3 className="font-medium">Resume Preview</h3>
            </div>
            <div className="flex space-x-2">
              <Button 
                onClick={toggleFullScreen}
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <Eye className="mr-2 h-4 w-4" />
                {isFullScreen ? "Exit Full Screen" : "Full Screen"}
              </Button>
              <Button 
                onClick={handleDownload}
                variant="outline" 
                size="sm"
                className="text-white border-white hover:bg-white/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
          
          <div className={isFullScreen ? "h-[calc(100%-60px)]" : "h-[600px]"}>
            <iframe 
              src={embedUrl}
              title="Resume"
              className="w-full h-full"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            onClick={handleDownload}
            className="bg-portfolio-teal hover:bg-portfolio-teal/90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
