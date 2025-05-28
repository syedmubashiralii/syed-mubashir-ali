
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Sparkles } from "lucide-react";
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
    <section id="resume" className="py-12 bg-white relative overflow-hidden neumorphic-section">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
      <div className="container relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Sparkles className="w-6 h-6 text-portfolio-teal mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">My Resume</h2>
            <Sparkles className="w-6 h-6 text-portfolio-teal ml-2" />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-portfolio-teal mx-auto mb-3"></div>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            View or download my complete resume to learn more about my professional background,
            education, skills, and experience.
          </p>
        </div>
        
        <div className={`relative mx-auto neumorphic-card overflow-hidden ${isFullScreen ? 'fixed inset-0 z-50 m-0 rounded-none' : 'max-w-4xl'}`}>
          <div className="bg-gradient-to-r from-portfolio-teal to-blue-600 text-white p-4 flex justify-between items-center">
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
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20"
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
        
        <div className="text-center mt-6">
          <Button 
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-600 to-portfolio-teal hover:from-blue-700 hover:to-portfolio-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
