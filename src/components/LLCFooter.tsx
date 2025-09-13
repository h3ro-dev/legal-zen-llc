import { FileText, Users, BookOpen, Calendar, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const LLCFooter = () => {
  const resources = [
    { icon: <FileText className="w-5 h-5" />, text: "LLC formation guides" },
    { icon: <Shield className="w-5 h-5" />, text: "Compliance checklists" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Tax optimization strategies" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Legal document templates" }
  ];

  const community = [
    { icon: <Users className="w-5 h-5" />, text: "Join 1,500+ LLC owners focusing on business growth instead of legal stress" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Weekly LLC management strategies, tax optimization tips, and compliance updates" },
    { icon: <Calendar className="w-5 h-5" />, text: "Business legal literacy training and LLC optimization masterclasses" },
    { icon: <Shield className="w-5 h-5" />, text: "Never miss a deadline or requirement with automated compliance monitoring and alerts" }
  ];

  return (
    <footer className="bg-navy-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading mb-4 text-forest-light">
              LLC of One
            </h3>
            <p className="font-body text-white/80 mb-6 leading-relaxed">
              Powered by Utlyze - Professional legal compliance and business optimization 
              for solo LLC owners who want to focus on growth, not paperwork.
            </p>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-legal" />
              <span className="font-body-medium text-legal">Legal Security Certified</span>
            </div>
          </div>

          {/* Legal Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-heading-medium mb-6 text-forest-light">
              Legal Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                  {resource.icon}
                  <span className="font-body">{resource.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LLC Community */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-heading-medium mb-6 text-forest-light">
              LLC Community & Resources
            </h4>
            <div className="space-y-4">
              {community.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-white/80">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <span className="font-body leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-heading-medium mb-4 text-forest-light">
              Ready to Focus on Business Instead of Legal Compliance?
            </h4>
            <p className="font-body text-white/80 mb-6 max-w-2xl mx-auto">
              Join successful LLC owners who eliminated legal anxiety and scaled their businesses 
              while AI handles all compliance requirements.
            </p>
            <Button 
              variant="legal" 
              size="lg"
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free LLC Optimization Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-white/60 font-body text-sm">
              <span>© 2024 LLC of One. All rights reserved.</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-legal" />
              <span className="font-body text-sm text-white/80">
                Professional Legal Compliance & Business Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LLCFooter;