import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Nasken
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Nasken is building AI-powered solutions. 
                Our mission is to make complex processes more reliable, transparent, and effective through 
                thoughtful application of artificial intelligence.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Our Products</h2>
              
              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Nasken Health</h3>
                  <p className="text-muted-foreground">
                    AI-enabled remote patient monitoring (RPM), chronic care management (CCM), and remote therapeutic 
                    monitoring (RTM) for healthcare providers. We help clinics deliver better patient outcomes through 
                    integrated devices, real-time dashboards, and actionable analytics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Nasken Interview</h3>
                  <p className="text-muted-foreground">
                    A structured interview platform that brings fairness and reliability to hiring. With AI-assisted 
                    features, real-time verification, and comprehensive audit trails, we help organizations make 
                    confident hiring decisions while maintaining candidate trust.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Our Values</h2>
              
              <ul className="space-y-4 mb-12">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Privacy-first:</span>
                  <span className="text-muted-foreground">
                    We build with privacy and security at the foundation, not as an afterthought.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Structured by design:</span>
                  <span className="text-muted-foreground">
                    Systematic approaches ensure consistency, reliability, and fairness in outcomes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Built by engineers:</span>
                  <span className="text-muted-foreground">
                    Precision engineering and deep technical expertise drive everything we create.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Team</h2>
              
              <p className="text-muted-foreground mb-8">
                Our team brings together expertise in AI, healthcare technology, and enterprise software. 
                We're backed by experienced mentors and supported by clinical advisors who help us build 
                solutions that truly serve the needs of healthcare providers and hiring teams.
              </p>

              <div className="bg-muted p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in learning more about our products or joining our team?
                </p>
                <a 
                  href="mailto:contact@nasken.ai" 
                  className="text-primary font-medium hover:underline"
                >
                  contact@nasken.ai
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
