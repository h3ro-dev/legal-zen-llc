import { BookOpen, GraduationCap, Users, FileCheck } from "lucide-react";

const LLCEducationSection = () => {
  const educationTopics = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "LLC Basics and Advanced Strategies", 
      description: "Business optimization specific to LLC structures"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Tax Planning and Optimization",
      description: "LLC-specific tax strategies and deduction maximization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Contract and Agreement Best Practices",
      description: "Business protection through proper legal documentation"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Compliance Calendars and Tracking",
      description: "Requirement tracking systems and deadline management"
    }
  ];

  const supportServices = [
    {
      title: "Qualified Attorney Access",
      description: "Access to qualified attorneys for complex legal issues that require professional consultation"
    },
    {
      title: "Legal Document Review",
      description: "Professional legal document review and customization services for your specific business needs"
    },
    {
      title: "Business Structure Optimization",
      description: "Consultations to optimize your LLC structure for maximum protection and tax efficiency"
    },
    {
      title: "Compliance Audit Services",
      description: "Comprehensive compliance audit and risk assessment services to identify potential issues"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-heading mb-6 text-navy-dark">
            LLC Legal Education Without Law School
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Legal literacy development for business owners plus professional legal support when you need it
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education Topics */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-heading-medium mb-8 text-navy-dark">
              Legal Literacy Development
            </h3>
            <div className="space-y-6">
              {educationTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-legal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-legal/10 rounded-lg flex items-center justify-center text-legal">
                      {topic.icon}
                    </div>
                    <div>
                      <h4 className="font-heading-medium text-lg mb-2 text-navy-dark">
                        {topic.title}
                      </h4>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Support */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-heading-medium mb-8 text-navy-dark">
              Professional Legal Support
            </h3>
            <div className="space-y-6">
              {supportServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-heading-medium text-lg mb-3 text-navy-dark">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Guarantee */}
        <div className="bg-white rounded-lg p-8 shadow-medium text-center animate-fade-up">
          <h3 className="text-2xl font-heading-medium mb-4 text-navy-dark">
            Legal Education Guarantee
          </h3>
          <p className="text-lg font-body text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            We guarantee you'll gain the legal literacy needed to make confident business decisions 
            while having professional support available for complex legal matters.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-3">
                <BookOpen className="w-8 h-8" />
              </div>
              <p className="font-body-semibold text-navy-dark">Comprehensive Education</p>
              <p className="text-muted-foreground font-body text-sm">From basics to advanced strategies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <p className="font-body-semibold text-navy-dark">Professional Support</p>
              <p className="text-muted-foreground font-body text-sm">Qualified attorneys available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-3">
                <GraduationCap className="w-8 h-8" />
              </div>
              <p className="font-body-semibold text-navy-dark">Ongoing Learning</p>
              <p className="text-muted-foreground font-body text-sm">Continuous legal updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLCEducationSection;