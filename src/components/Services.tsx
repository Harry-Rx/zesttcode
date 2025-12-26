import { 
  Brain, 
  GitBranch, 
  Gauge, 
  BarChart3, 
  Cloud, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  Megaphone 
} from "lucide-react";

const services = [
  { 
    icon: Brain, 
    title: "AI & Machine Learning",
    description: "Intelligent systems designed to automate processes and enhance decision-making. We build solutions that learn, adapt, and deliver measurable business outcomes."
  },
  { 
    icon: GitBranch, 
    title: "DevOps Solutions",
    description: "Streamlined development pipelines that accelerate delivery and improve reliability. From CI/CD implementation to infrastructure automation, we optimise your development lifecycle."
  },
  { 
    icon: Gauge, 
    title: "Performance Tuning",
    description: "Systematic optimisation of applications and infrastructure for speed and efficiency. We identify bottlenecks and implement solutions that enhance user experience and reduce costs."
  },
  { 
    icon: BarChart3, 
    title: "Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights with custom analytics solutions. We build dashboards and reporting systems that inform strategic decision-making."
  },
  { 
    icon: Cloud, 
    title: "Cloud Applications & ERP Software",
    description: "Scalable cloud solutions and enterprise resource planning systems tailored to your operations. We design, deploy, and maintain platforms that grow with your business."
  },
  { 
    icon: Smartphone, 
    title: "Mobile Application Development (iOS & Android)",
    description: "Native and cross-platform mobile applications built for performance and usability. We create apps that engage users and extend your digital presence."
  },
  { 
    icon: ShoppingCart, 
    title: "E-commerce Website Development",
    description: "Online retail platforms designed for conversion and customer satisfaction. We build secure, scalable stores that streamline transactions and drive revenue."
  },
  { 
    icon: Palette, 
    title: "UI & UX Design",
    description: "User-centred design that balances aesthetics with functionality. We craft interfaces that are intuitive, accessible, and aligned with your brand identity."
  },
  { 
    icon: Megaphone, 
    title: "Digital Marketing Services",
    description: "Strategic digital campaigns that increase visibility and generate leads. We implement targeted approaches across search, social, and content channels."
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technology Solutions That{" "}
            <span className="text-accent">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technology services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border/60 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
