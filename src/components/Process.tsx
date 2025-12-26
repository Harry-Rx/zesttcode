import { Search, FileText, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We begin by understanding your business goals, challenges, and requirements through in-depth consultations.",
    step: "01",
  },
  {
    icon: FileText,
    title: "Plan",
    description:
      "Our team develops a comprehensive strategy and roadmap tailored to your specific needs and budget.",
    step: "02",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "We execute with precision using agile methodologies, keeping you informed at every milestone.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description:
      "Your solution is deployed, tested, and handed over with full documentation and ongoing support.",
    step: "04",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3">How We Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            A Proven Process for{" "}
            <span className="text-accent">Successful Delivery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our structured approach ensures transparency, quality, and timely
            delivery on every project we undertake.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
              )}

              <div className="text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
