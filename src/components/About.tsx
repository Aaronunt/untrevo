import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Industry-leading expertise across multiple sectors",
  "Proven track record of delivering measurable results",
  "Collaborative approach tailored to your unique needs",
  "Commitment to innovation and continuous improvement"
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm text-primary font-medium tracking-wider uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Building the future of business excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Untrevo, we believe in the power of strategic thinking combined with innovative execution. 
              Our team of seasoned professionals brings decades of combined experience to every engagement, 
              ensuring that your organization receives the highest caliber of guidance and support.
            </p>
            
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-card border border-border overflow-hidden">
              {/* Abstract geometric design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Animated circles */}
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-float" />
                  <div className="absolute inset-8 rounded-full border border-primary/30 animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute inset-16 rounded-full border border-primary/40 animate-float" style={{ animationDelay: '2s' }} />
                  <div className="absolute inset-24 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '3s' }} />
                  
                  {/* Center glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/30 blur-xl" />
                  </div>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
