import { Star, TrendingUp, Shield, Clock } from "lucide-react";

const LLCSocialProofSection = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      business: "Consulting LLC",
      quote: "Saved $15K in taxes through AI tax optimization while eliminating compliance anxiety completely",
      result: "$15K Tax Savings",
      avatar: "JM"
    },
    {
      name: "David Park", 
      business: "Creative Services LLC",
      quote: "Grew my LLC from $50K to $300K revenue while AI handled all legal requirements and state filings",
      result: "500% Revenue Growth",
      avatar: "DP"
    },
    {
      name: "Sarah Kim",
      business: "Professional Services LLC", 
      quote: "Never worry about compliance deadlines or legal mistakes - AI handles everything while I focus on clients",
      result: "Zero Compliance Issues",
      avatar: "SK"
    }
  ];

  const caseStudies = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      business: "Marketing LLC",
      result: "100% compliance with 89% reduction in administrative overhead and legal research time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      business: "Technology LLC", 
      result: "Optimized business structure for 34% tax savings while maintaining full legal protection"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      business: "Service LLC",
      result: "Eliminated legal anxiety and compliance mistakes while scaling revenue 250% through business focus"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-heading mb-6 text-navy-dark">
            LLC Owners Focusing on Business, Not Legal Stress
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Legal compliance success stories with professional business owner transformations
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground font-body mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-legal/10 rounded-full flex items-center justify-center font-heading-medium text-legal">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-body-semibold text-navy-dark">{testimonial.name}</p>
                  <p className="text-muted-foreground font-body">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-legal/5 rounded-lg">
                <p className="text-legal font-body-semibold text-center">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-accent rounded-lg p-8">
          <h3 className="text-2xl font-heading-medium mb-8 text-center text-navy-dark">
            LLC Transformation Case Studies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-legal/10 rounded-full flex items-center justify-center text-legal mx-auto mb-4">
                  {study.icon}
                </div>
                <h4 className="font-heading-medium text-lg mb-3 text-navy-dark">
                  {study.business}
                </h4>
                <p className="text-foreground font-body leading-relaxed">
                  {study.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLCSocialProofSection;