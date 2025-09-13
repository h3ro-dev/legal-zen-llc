import { Building, Calculator, FileCheck, Shield, Globe, Clock } from "lucide-react";

const LLCCapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Formation and Structure",
      description: "Operating agreement optimization, member structure design, liability protection maximization",
      features: ["Operating Agreement Optimization", "Member Structure Design", "Liability Protection", "Asset Protection Setup"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Tax Management", 
      description: "Tax strategy optimization, deduction maximization, filing automation, quarterly payment planning",
      features: ["Tax Strategy Optimization", "Deduction Maximization", "Filing Automation", "Quarterly Planning"]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Compliance Monitoring",
      description: "State filing requirements, regulatory compliance, deadline management, penalty prevention",
      features: ["State Filing Requirements", "Regulatory Compliance", "Deadline Management", "Penalty Prevention"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Documentation",
      description: "Contract generation, agreement review, legal correspondence, vendor documentation",
      features: ["Contract Generation", "Agreement Review", "Legal Correspondence", "Vendor Documentation"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Business Protection",
      description: "Insurance optimization, liability management, asset protection, risk mitigation",
      features: ["Insurance Optimization", "Liability Management", "Asset Protection", "Risk Mitigation"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Legal Intelligence",
      description: "Real-time monitoring of law changes affecting LLCs with industry-specific updates",
      features: ["Law Change Monitoring", "Industry Updates", "Tax Law Changes", "State Requirements"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-heading mb-6 text-navy-dark">
            Your AI Legal and Compliance Department
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive LLC management with legal expertise that eliminates administrative burden
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in border-t-4 border-legal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-legal/10 rounded-lg flex items-center justify-center text-legal mb-6">
                {capability.icon}
              </div>
              
              <h3 className="text-xl font-heading-medium mb-3 text-navy-dark">
                {capability.title}
              </h3>
              
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                {capability.description}
              </p>
              
              <div className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-legal rounded-full"></div>
                    <span className="text-foreground font-body text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-section rounded-lg p-8 text-center animate-fade-up">
          <h3 className="text-2xl font-heading-medium mb-4 text-navy-dark">
            Legal Intelligence and Updates
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <p className="font-body-medium text-navy-dark">Real-time Law Changes</p>
              <p className="text-muted-foreground font-body text-sm">Affecting LLCs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-3">
                <Building className="w-6 h-6" />
              </div>
              <p className="font-body-medium text-navy-dark">Industry-Specific</p>
              <p className="text-muted-foreground font-body text-sm">Compliance Requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-3">
                <Calculator className="w-6 h-6" />
              </div>
              <p className="font-body-medium text-navy-dark">Tax Law Changes</p>
              <p className="text-muted-foreground font-body text-sm">Optimization Opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-3">
                <FileCheck className="w-6 h-6" />
              </div>
              <p className="font-body-medium text-navy-dark">State-Specific</p>
              <p className="text-muted-foreground font-body text-sm">Filing Obligations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLCCapabilitiesSection;