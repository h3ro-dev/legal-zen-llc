import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-legal-overwhelm.jpg";

const LLCHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl lg:text-6xl font-heading mb-6 leading-tight">
              You Started This LLC to Do What You Love. 
              <span className="text-forest-light"> Instead You're Googling Tax Requirements at Midnight.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-body-medium mb-8 text-white/90 leading-relaxed">
              Legal compliance and administrative overhead are suffocating your business purpose. 
              You're spending more time on legal research than building your company.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-lg font-body-medium text-forest-light mb-2">
                ⚖️ Legal Reality Check:
              </p>
              <p className="text-white/90 font-body">
                "When did running an LLC become getting a law degree in business compliance 
                instead of focusing on what you're actually good at?"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="animate-scale-in"
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Simplify My LLC Operations
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn How
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-fade-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Business owner overwhelmed by legal documents and compliance requirements"
                className="rounded-lg shadow-strong w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default LLCHeroSection;