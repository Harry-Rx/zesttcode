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
  { icon: Brain, title: "AI & Machine Learning" },
  { icon: GitBranch, title: "DevOps Solutions" },
  { icon: Gauge, title: "Performance Tuning" },
  { icon: BarChart3, title: "Data Analytics & Business Intelligence" },
  { icon: Cloud, title: "Cloud Applications & ERP Software" },
  { icon: Smartphone, title: "Mobile Application Development (iOS & Android)" },
  { icon: ShoppingCart, title: "E-commerce Website Development" },
  { icon: Palette, title: "UI & UX Design" },
  { icon: Megaphone, title: "Digital Marketing Services" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex flex-col items-center text-center p-8 rounded-xl border border-border/60 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
