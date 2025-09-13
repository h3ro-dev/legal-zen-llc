import { Scale, FileCheck, Building, Users, CreditCard } from "lucide-react";

const LLCBurdenSection = () => {
  const burdens = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal Responsibility Weight",
      description: "Every contract, agreement, and business decision carries legal weight that you're responsible for understanding and managing"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Compliance Deadlines",
      description: "State filing deadlines, tax obligations, and compliance requirements don't care about your business priorities or workload"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Costly Legal Mistakes",
      description: "Legal mistakes can result in penalties, lost liability protection, or expensive cleanup that destroys months of business progress"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Expectations",
      description: "Professional customers and partners expect proper legal documentation and compliance regardless of your team size"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Business Relationships",
      description: "Banking, insurance, and vendor relationships require legal documentation that must be accurate and up-to-date"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-navy-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-heading mb-6">
            The Hidden Cost of LLC Legal Anxiety
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The unique burden of solo legal responsibility that compounds daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {burdens.map((burden, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-forest-light">
                {burden.icon}
              </div>
              <h3 className="text-xl font-heading-medium mb-3">
                {burden.title}
              </h3>
              <p className="text-white/80 font-body leading-relaxed">
                {burden.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-forest-dark/20 to-forest-base/20 rounded-lg p-8 border border-forest-light/30 animate-fade-up">
          <h3 className="text-2xl font-heading-medium mb-4 text-forest-light">
            Legal Isolation Reality:
          </h3>
          <p className="text-lg font-body-medium text-white/90 leading-relaxed">
            Look at your recent business decisions. How many required legal research or compliance verification? 
            How much time did that take away from actually building your business? 
            <span className="text-forest-light font-body-semibold"> That time cost is compounding daily.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LLCBurdenSection;