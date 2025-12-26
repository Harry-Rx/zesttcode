import { Code2, Cloud, Brain, Smartphone, RefreshCcw } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies. From responsive websites to complex enterprise platforms, we deliver solutions that scale.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Migrate, optimise, and manage your cloud infrastructure. We help you leverage the full potential of AWS, Azure, and Google Cloud.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Integrate artificial intelligence and automation into your business processes. Streamline operations and unlock new possibilities.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed for exceptional user experience across iOS and Android devices.",
  },
  {
    icon: RefreshCcw,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation consulting. We help modernise legacy systems and implement innovative technology strategies.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Technology Solutions That{" "}
            <span className="text-accent">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive technology services tailored to your business
            needs. Our expertise spans the full spectrum of modern software
            development and digital innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
