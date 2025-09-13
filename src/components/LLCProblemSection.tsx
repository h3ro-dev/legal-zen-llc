import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign } from "lucide-react";

const LLCProblemSection = () => {
  const painPoints = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: "You spend evenings researching tax deductions and compliance requirements instead of growing your business or developing your skills"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      text: "Every business decision comes with the anxiety of 'am I doing this legally correctly?' because you can't afford to make costly mistakes"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "State and federal compliance requirements change regularly, but you don't have a legal team monitoring updates that could affect your LLC"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Tax optimization opportunities are missed because you don't know what you don't know about LLC tax strategies"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Legal document templates from the internet may not be properly customized for your specific LLC structure and state requirements"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-heading mb-6 text-navy-dark">
            The LLC of One Legal Compliance Nightmare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Legal compliance vs. business focus pain points that keep solo LLC owners awake at night
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Pain Points */}
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive">
                  {point.icon}
                </div>
                <p className="text-foreground font-body leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="animate-fade-up">
            <div className="bg-white rounded-lg p-8 shadow-medium">
              <h3 className="text-2xl font-heading-medium mb-6 text-navy-dark">
                Legal Anxiety Statistics
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading text-destructive">73%</span>
                  </div>
                  <p className="font-body">of solo LLC owners report anxiety about legal compliance</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading text-destructive">54%</span>
                  </div>
                  <p className="font-body">have made compliance mistakes that cost them money</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-accent rounded-lg">
                <p className="font-body-medium text-accent-foreground">
                  <strong>You're not alone</strong> in feeling overwhelmed by legal requirements. 
                  You didn't start your LLC to become a part-time lawyer and accountant. 
                  You started it to build something meaningful with your skills and passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLCProblemSection;