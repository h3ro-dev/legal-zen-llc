import LLCHeroSection from "@/components/LLCHeroSection";
import LLCProblemSection from "@/components/LLCProblemSection";
import LLCBurdenSection from "@/components/LLCBurdenSection";
import LLCSolutionSection from "@/components/LLCSolutionSection";
import LLCSocialProofSection from "@/components/LLCSocialProofSection";
import LLCCapabilitiesSection from "@/components/LLCCapabilitiesSection";
import LLCIntegrationSection from "@/components/LLCIntegrationSection";
import LLCEducationSection from "@/components/LLCEducationSection";
import LLCConsultationForm from "@/components/LLCConsultationForm";
import LLCFooter from "@/components/LLCFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LLCHeroSection />
      <LLCProblemSection />
      <LLCBurdenSection />
      <LLCSolutionSection />
      <LLCSocialProofSection />
      <LLCCapabilitiesSection />
      <LLCIntegrationSection />
      <LLCEducationSection />
      <LLCConsultationForm />
      <LLCFooter />
    </main>
  );
};

export default Index;