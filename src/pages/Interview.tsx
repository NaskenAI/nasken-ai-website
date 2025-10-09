import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Bot, ShieldCheck, ClipboardCheck, Video, AlertTriangle, Users, FileText, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Interview = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Assistant (Opt-in)",
      description: "Let candidates use an embedded AI. Measure usage instead of banning."
    },
    {
      icon: ShieldCheck,
      title: "Real-time verification",
      description: "Device, identity, and environment signals with privacy-aware settings."
    },
    {
      icon: ClipboardCheck,
      title: "Structured rubrics",
      description: "Role-specific scorecards for consistent evaluation."
    },
    {
      icon: Video,
      title: "Recording & transcripts",
      description: "Searchable transcripts with highlights and export."
    },
    {
      icon: AlertTriangle,
      title: "Anti-cheating analytics",
      description: "Copy-paste bursts, window focus changes, language drift."
    },
    {
      icon: Users,
      title: "Candidate experience",
      description: "Clear expectations and timing controls."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Smarter interviews. Better hiring.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real-time verification, anti-cheating signals, and structured scoring in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <a href="#features">
                  Explore features <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contact@nasken.ai">Book demo</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">Fast setup</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Realistic</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Audit trails</Badge>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                Everything you need
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
              How it works
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set the interview</h3>
                  <p className="text-muted-foreground">
                    Choose a template, invite your panel, and share a secure link with candidates.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Run with structure</h3>
                  <p className="text-muted-foreground">
                    Score against rubrics; optional AI assist + verification tracks candidate behavior transparently.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Decide with signal</h3>
                  <p className="text-muted-foreground">
                    Review transcripts and score summaries; export a complete decision packet for your records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-muted py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                Frequently asked questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What are "anti-cheating signals"?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Anti-cheating signals include behavioral indicators like copy-paste activity spikes, window focus changes, 
                    and language pattern shifts. These help identify potential dishonest behavior while respecting candidate privacy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Do candidates know what's captured?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. We believe in full transparency. Candidates are informed upfront about what data is collected, 
                    how it's used, and how long it's retained. They receive clear consent screens before the interview begins.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    How is AI usage measured?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    When the optional AI assistant is enabled, we track when candidates query it, what questions they ask, 
                    and how they incorporate responses. This data helps you understand how candidates leverage AI tools 
                    rather than simply blocking them.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Is external AI allowed?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    By default, we detect but don't block external AI usage. You can configure your interview settings 
                    to either permit, discourage, or prohibit external AI tools based on your hiring philosophy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What about privacy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Privacy is fundamental to our platform. All data is encrypted in transit and at rest. We're GDPR-compliant, 
                    provide data deletion on request, and never sell candidate information. You control retention periods 
                    and access permissions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Link to="/" className="text-primary hover:underline font-medium">
            ← Back to Nasken.ai
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Interview;
