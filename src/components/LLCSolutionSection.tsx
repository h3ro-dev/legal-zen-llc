import { Bot, TrendingUp, FileText, Building2, AlertCircle } from "lucide-react";

const LLCSolutionSection = () => {
  const capabilities = [
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Compliance Monitoring AI",
      description: "Automatic tracking of state and federal requirements, filing deadlines, and regulatory changes affecting your LLC"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tax Optimization AI",
      description: "Maximize deductions, minimize tax burden, and ensure proper tax filing strategies for LLC structures"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Legal Document AI",
      description: "Generate, review, and maintain contracts, agreements, and legal documents properly customized for your LLC"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Structure AI",
      description: "Optimize LLC operating agreements, member structures, and business arrangements for protection and efficiency"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Regulatory Intelligence AI",
      description: "Monitor industry-specific regulations and compliance requirements that affect your business operations"
    }
  ];

  return (
    <section id="solution" className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-heading mb-6 text-navy-dark">
            Focus on Business, Not Bureaucracy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LLC AI legal and compliance capabilities that eliminate legal anxiety while you focus on growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* AI Capabilities */}
          <div className="space-y-6 animate-slide-in-left">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-legal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-legal/10 rounded-lg flex items-center justify-center text-legal">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading-medium mb-2 text-navy-dark">
                      {capability.title}
                    </h3>
                    <p className="text-foreground font-body leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transformation Promise */}
          <div className="animate-fade-up">
            <div className="bg-gradient-legal rounded-lg p-8 text-white shadow-strong">
              <h3 className="text-2xl font-heading-medium mb-6">
                Legal Transformation Promise
              </h3>
              <p className="text-lg font-body-medium mb-6 leading-relaxed">
                Stop worrying about legal compliance. Start focusing on business growth 
                with AI handling all legal and administrative requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-body">100% Automated Compliance Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-body">Maximize Tax Savings & Deductions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-body">Eliminate Legal Document Anxiety</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-body">Peace of Mind Business Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLCSolutionSection;