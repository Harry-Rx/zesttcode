import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zestcode transformed our legacy systems into a modern cloud platform. Their expertise and professionalism exceeded our expectations.",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Horizon Financial Group"
  },
  {
    quote: "The team delivered our mobile application on time and within budget. Their communication throughout the project was exceptional.",
    name: "James Chen",
    role: "Director of Operations",
    company: "Pacific Logistics"
  },
  {
    quote: "Working with Zestcode has been a game-changer for our digital presence. Their strategic approach to technology solutions is impressive.",
    name: "Emma Richardson",
    role: "CEO",
    company: "Coastal Healthcare"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the clients who have partnered with us to achieve their technology goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed flex-grow mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border/50 pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
