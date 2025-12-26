import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Zestcode team collaborating with clients"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold mb-3">About Zestcode</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Your Technology Partner for{" "}
              <span className="text-accent">Digital Success</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Based in Australia, Zestcode Technology brings together a team of
              experienced consultants, developers, and strategists committed to
              delivering exceptional technology solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We take pride in understanding your unique business challenges and
              crafting tailored solutions that drive real results. Our collaborative
              approach ensures that every project is delivered with precision,
              transparency, and a focus on long-term value.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Client-Centric Approach</p>
                  <p className="text-sm text-muted-foreground">Your success is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Industry Expertise</p>
                  <p className="text-sm text-muted-foreground">Deep technical knowledge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Transparent Process</p>
                  <p className="text-sm text-muted-foreground">Clear communication always</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Long-term Partnership</p>
                  <p className="text-sm text-muted-foreground">We grow with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
