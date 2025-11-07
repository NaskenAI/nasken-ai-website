import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Shield, Target, Users } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Innovating with AI.
            </h1>
            <p className="text-xl text-muted-foreground">
              Building trustworthy AI systems.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* <ProductCard
              title="Nasken Health"
              description="AI-enabled RPM/CCM/RTM for clinics. Devices, dashboards, and analytics."
              ctaText="Go to Nasken Health"
              ctaHref="https://www.naskenhealth.com/#"
              isExternal={true}
              learnMoreId="nasken-health"
            /> */}
            <ProductCard
              title="Nasken Interview"
              description="Run AI-assisted, structured interviews with real-time verification and audit trails."
              ctaText="Open Interview Site"
              ctaHref="https://www.nasken.ai/interview"
              isExternal={false}
              learnMoreId="nasken-interview"
            />
          </div>

          {/* Why Nasken Section */}
          <div id="why-nasken" className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Why Nasken</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Privacy-first</h3>
                <p className="text-sm text-muted-foreground">
                  Built with privacy and security at the core of every decision.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Structured by design</h3>
                <p className="text-sm text-muted-foreground">
                  Systematic approaches that ensure consistency and reliability.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Built by engineers</h3>
                <p className="text-sm text-muted-foreground">
                  Engineered with precision by experts who understand your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            {/* <p className="text-sm text-muted-foreground mb-8">Backed by mentors and clinicians</p> */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {/* Placeholder for logos - would be actual logo images in production */}
              <div className="h-12 w-32 bg-muted rounded"></div>
              <div className="h-12 w-32 bg-muted rounded"></div>
              <div className="h-12 w-32 bg-muted rounded"></div>
              <div className="h-12 w-32 bg-muted rounded"></div>
            </div>
          </div>

          {/* Learn More Sections */}
          {/* <div id="nasken-health" className="max-w-3xl mx-auto mt-20 p-8 bg-card border border-border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">About Nasken Health</h3>
            <p className="text-muted-foreground mb-4">
              Nasken Health provides comprehensive remote patient monitoring (RPM), chronic care management (CCM), 
              and remote therapeutic monitoring (RTM) solutions for healthcare providers.
            </p>
            <p className="text-muted-foreground">
              Our platform integrates seamlessly with medical devices, providing real-time dashboards and 
              advanced analytics to help clinicians deliver better patient outcomes.
            </p>
          </div>

          <div id="nasken-interview" className="max-w-3xl mx-auto mt-12 p-8 bg-card border border-border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">About Nasken Interview</h3>
            <p className="text-muted-foreground mb-4">
              Nasken Interview transforms the hiring process with AI-assisted structured interviews that ensure 
              fairness and reliability while maintaining complete transparency.
            </p>
            <p className="text-muted-foreground">
              With real-time verification, anti-cheating analytics, and comprehensive audit trails, you can 
              make confident hiring decisions backed by data.
            </p>
          </div> */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
