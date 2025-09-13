import { Calculator, CreditCard, FileText, TrendingUp, Users } from "lucide-react";

const LLCIntegrationSection = () => {
  const integrations = [
    {
      category: "Accounting",
      icon: <Calculator className="w-8 h-8" />,
      platforms: ["QuickBooks", "Xero", "FreshBooks"],
      description: "LLC-specific setup with automated compliance tracking"
    },
    {
      category: "Banking", 
      icon: <CreditCard className="w-8 h-8" />,
      platforms: ["Business Banking", "Merchant Services", "Financial Management"],
      description: "Business banking optimization with legal compliance"
    },
    {
      category: "Legal",
      icon: <FileText className="w-8 h-8" />,
      platforms: ["Document Management", "Contract Tracking", "Compliance Calendars"],
      description: "Legal document lifecycle management and tracking"
    },
    {
      category: "Tax",
      icon: <TrendingUp className="w-8 h-8" />,
      platforms: ["Tax Preparation", "Quarterly Payments", "Deduction Tracking"],
      description: "Tax preparation software with LLC optimization"
    },
    {
      category: "Business Operations",
      icon: <Users className="w-8 h-8" />,
      platforms: ["CRM", "Project Management", "Invoicing"],
      description: "Business operations with legal compliance integration"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-navy-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-heading mb-6">
            LLC Business Integration
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Legal and business platform integrations essential for LLC operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Integration Categories */}
          <div className="space-y-6 animate-slide-in-left">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-forest-light/20 rounded-lg flex items-center justify-center text-forest-light">
                    {integration.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading-medium mb-2 text-white">
                      {integration.category}
                    </h3>
                    <p className="text-white/80 font-body mb-3 leading-relaxed">
                      {integration.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {integration.platforms.map((platform, platformIndex) => (
                        <span 
                          key={platformIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm font-body border border-white/20"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Benefits */}
          <div className="animate-fade-up">
            <div className="bg-gradient-to-br from-forest-dark/20 to-forest-light/20 rounded-lg p-8 border border-forest-light/30">
              <h3 className="text-2xl font-heading-medium mb-6 text-forest-light">
                Seamless Business Operations
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-forest-light rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-body-semibold text-white mb-1">Automated Compliance Sync</h4>
                    <p className="text-white/80 font-body">All business activities automatically tracked for legal compliance</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-forest-light rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-body-semibold text-white mb-1">Tax-Optimized Workflows</h4>
                    <p className="text-white/80 font-body">Business processes designed for maximum tax efficiency</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-forest-light rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-body-semibold text-white mb-1">Legal Document Integration</h4>
                    <p className="text-white/80 font-body">Contracts and agreements seamlessly integrated with business operations</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-forest-light rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-body-semibold text-white mb-1">Real-Time Compliance Monitoring</h4>
                    <p className="text-white/80 font-body">Continuous monitoring across all business platforms and activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 animate-fade-up">
          <h3 className="text-xl font-heading-medium mb-4 text-forest-light">
            Complete Business Ecosystem Integration
          </h3>
          <p className="text-white/80 font-body leading-relaxed max-w-2xl mx-auto">
            Every business tool and platform working together with legal compliance built-in, 
            so you can focus on growth while maintaining complete legal protection and optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LLCIntegrationSection;