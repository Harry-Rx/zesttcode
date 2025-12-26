import { Shield, Users, Clock, Award, HeartHandshake, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description:
      "We deliver on our commitments with consistent quality and dependable service you can count on.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our consultants bring deep industry experience and technical expertise to every engagement.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your timelines and consistently deliver projects on schedule without compromising quality.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every solution undergoes rigorous testing and quality assurance before delivery.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We build lasting relationships, providing ongoing support and strategic guidance as your business evolves.",
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description:
      "Our flexible methodologies allow us to respond quickly to changing requirements and market conditions.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3">Why Choose Zestcode</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Success Is Our <span className="text-accent">Priority</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We're committed to being more than just a vendor. We aim to be your
            strategic technology partner, invested in your long-term success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
