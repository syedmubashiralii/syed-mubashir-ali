
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className={cn(
          "text-2xl font-bold transition-colors",
          isScrolled ? "text-portfolio-navy" : "text-white"
        )}>
          Syed <span className="text-portfolio-teal">Mubashir</span> Ali
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-portfolio-teal transition-colors font-medium relative group",
                isScrolled ? "text-portfolio-navy" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-teal group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <Button 
            asChild
            className="bg-portfolio-teal hover:bg-portfolio-teal/90 shadow-md hover:shadow-lg transition-all px-6"
          >
            <a href="#resume">Resume</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-portfolio-navy" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-portfolio-navy hover:text-portfolio-teal transition-colors py-2 font-medium border-b border-gray-100 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              asChild
              className="bg-portfolio-teal hover:bg-portfolio-teal/90 w-full mt-2 shadow-md"
            >
              <a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
