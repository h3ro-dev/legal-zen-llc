import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Shield, Clock, AlertTriangle } from "lucide-react";
import { useState } from "react";

const LLCConsultationForm = () => {
  const [timePercentage, setTimePercentage] = useState([25]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", 
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"
  ];

  const businessTypes = [
    "Consulting", "Professional Services", "E-commerce", "Real Estate",
    "Creative Services", "Technology", "Healthcare", "Other"
  ];

  const challenges = [
    "Tax optimization", "State compliance", "Contract management",
    "Operating agreements", "Business structure", "Legal documentation"
  ];

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    if (checked) {
      setSelectedChallenges([...selectedChallenges, challenge]);
    } else {
      setSelectedChallenges(selectedChallenges.filter(c => c !== challenge));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled by Supabase integration
    console.log("Form submitted - Supabase integration needed");
  };

  return (
    <section id="consultation-form" className="py-16 lg:py-24 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-5xl font-heading mb-6">
              Simplify Your LLC Legal Management
            </h2>
            <p className="text-xl font-body-medium text-white/90 max-w-2xl mx-auto leading-relaxed">
              LLC optimization and compliance consultation with someone who understands 
              the legal burden you're carrying as a solo business owner
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Urgency & Risk Reversal */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-scale-in">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  <h3 className="font-heading-medium text-lg">Limited Time</h3>
                </div>
                <ul className="space-y-2 font-body text-white/90">
                  <li>⚖️ Only 6 LLC optimization consultations available this week</li>
                  <li>📅 Tax deadline season is approaching - optimization planning should start now</li>
                  <li>⚠️ Every day without proper compliance is potential penalty and liability risk</li>
                </ul>
              </div>

              <div className="bg-legal/20 backdrop-blur-sm rounded-lg p-6 border border-legal/30 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-legal-foreground" />
                  <h3 className="font-heading-medium text-lg">Risk Reversal</h3>
                </div>
                <div className="space-y-3 font-body text-white/90">
                  <p>✅ Complimentary LLC optimization consultation with compliance peace of mind guarantee</p>
                  <p>✅ If we can't identify specific ways to reduce your legal administrative burden by 50%+, the consultation is completely free</p>
                  <p>✅ Your LLC protection and business growth are our primary legal objectives</p>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur rounded-lg p-8 shadow-strong animate-fade-up">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-navy-dark font-body-medium">
                      Full Name *
                    </Label>
                    <Input 
                      id="fullName" 
                      required 
                      className="bg-white border-border"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy-dark font-body-medium">
                      Business Email *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="bg-white border-border"
                    />
                  </div>

                  {/* LLC Name */}
                  <div className="space-y-2">
                    <Label htmlFor="llcName" className="text-navy-dark font-body-medium">
                      LLC Name *
                    </Label>
                    <Input 
                      id="llcName" 
                      required 
                      className="bg-white border-border"
                    />
                  </div>

                  {/* State of Formation */}
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-navy-dark font-body-medium">
                      State of Formation *
                    </Label>
                    <Select required>
                      <SelectTrigger className="bg-white border-border">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-border max-h-48">
                        {states.map((state) => (
                          <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Business Type */}
                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-navy-dark font-body-medium">
                      Business Type/Industry
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-border">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-border">
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* LLC Formation Date */}
                  <div className="space-y-2">
                    <Label htmlFor="formationDate" className="text-navy-dark font-body-medium">
                      LLC Formation Date
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-border">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-border">
                        <SelectItem value="less-than-1-year">Less than 1 year</SelectItem>
                        <SelectItem value="1-3-years">1-3 years</SelectItem>
                        <SelectItem value="3-5-years">3-5 years</SelectItem>
                        <SelectItem value="5-plus-years">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Annual Revenue */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="revenue" className="text-navy-dark font-body-medium">
                      Annual Revenue Range
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-border">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-border">
                        <SelectItem value="less-than-50k">&lt;$50K</SelectItem>
                        <SelectItem value="50k-150k">$50K-$150K</SelectItem>
                        <SelectItem value="150k-500k">$150K-$500K</SelectItem>
                        <SelectItem value="500k-plus">$500K+</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Current Legal Challenges */}
                  <div className="space-y-3 md:col-span-2">
                    <Label className="text-navy-dark font-body-medium">
                      Current Legal Challenges (Select all that apply)
                    </Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {challenges.map((challenge) => (
                        <div key={challenge} className="flex items-center space-x-2">
                          <Checkbox 
                            id={challenge}
                            checked={selectedChallenges.includes(challenge)}
                            onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
                          />
                          <label htmlFor={challenge} className="text-navy-dark font-body text-sm">
                            {challenge}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Spent on Legal/Admin */}
                  <div className="space-y-4 md:col-span-2">
                    <Label className="text-navy-dark font-body-medium">
                      Time Spent on Legal/Administrative Tasks: {timePercentage[0]}%
                    </Label>
                    <div className="px-3">
                      <Slider
                        value={timePercentage}
                        onValueChange={setTimePercentage}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                    </div>
                    <p className="text-muted-foreground font-body text-sm">
                      What percentage of your time is spent on legal and administrative tasks?
                    </p>
                  </div>

                  {/* Biggest Legal Concern */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="concern" className="text-navy-dark font-body-medium">
                      Biggest Legal Concern
                    </Label>
                    <Textarea 
                      id="concern"
                      placeholder="What legal or compliance issue keeps you up at night?"
                      className="bg-white border-border min-h-24"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="legal" 
                  size="xl" 
                  className="w-full mt-8"
                >
                  Optimize My LLC Operations
                </Button>

                <p className="text-muted-foreground font-body text-sm text-center mt-4">
                  Attorney-client privilege applies where applicable. Your business information 
                  and legal concerns remain completely confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLCConsultationForm;