import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional team collaborating in modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding pt-32">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-lg mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Australian Technology Consulting
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transforming Ideas Into{" "}
            <span className="text-accent">Digital Excellence</span>
          </h1>
          <p
            className="text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Zestcode Technology partners with businesses across Australia to deliver
            innovative technology solutions. From strategy to implementation, we're
            your trusted technology partner.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Talk to Our Team
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-primary-foreground/60 text-sm mb-4">
              Trusted by businesses across Australia
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-sm text-primary-foreground/70">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-sm text-primary-foreground/70">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
