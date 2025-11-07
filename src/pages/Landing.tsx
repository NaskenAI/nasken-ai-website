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

          {/* Product Card Centered */}
          <div className="flex justify-center mb-20">
            <div className="max-w-md w-full">
              <ProductCard
                title="Nasken Interview"
                description="Run AI-assisted, structured interviews with real-time verification and audit trails."
                ctaText="Learn More..."
                ctaHref="https://www.nasken.ai/interview"
                isExternal={true}
              />
            </div>
          </div>

          {/* Why Nasken Section */}
          <div id="why-nasken" className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              Why Nasken
            </h2>
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
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="h-12 w-32 bg-muted rounded"></div>
              <div className="h-12 w-32 bg-muted rounded"></div>
              <div className="h-12 w-32 bg-muted rounded"></div>
              <div className="h-12 w-32 bg-muted rounded"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
