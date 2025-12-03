import { Lightbulb, TrendingUp, Shield, Zap, Users, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Strategic Consulting",
    description: "Expert guidance to navigate complex business challenges and unlock growth opportunities."
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology and streamlined processes."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies to protect your business."
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Identify inefficiencies and implement solutions that drive operational excellence."
  },
  {
    icon: Users,
    title: "Talent Development",
    description: "Build high-performing teams with tailored training and development programs."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that inform strategic decisions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-primary font-medium tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Solutions that drive results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer a comprehensive suite of services designed to address your most pressing business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
