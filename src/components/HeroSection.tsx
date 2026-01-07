import { Button } from "@/components/ui/button";
import heroImage from "../assets/hero-mine.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGrades = () => {
    document.getElementById('grading')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt="Peruvian Amazonite Mine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/80 via-slate-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/70 via-transparent to-slate-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Direct Mine-to-Market Supply
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            Premium Peruvian Amazonite
            <span className="block text-accent mt-2">Direct from Mine to Global Markets</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
            We own the source. High-quality Amazonite rough and semi-polished stones, 
            ethically mined in Peru and exported worldwide. Scale your production with 
            a reliable, first-hand supplier.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="ghost" 
              size="icon-lg" 
              onClick={scrollToContact}
              className="animate-pulse-glow"
            >
              Get a Wholesale Quote
            </Button>
            <Button 
              variant="ghost" 
              size="icon-lg"
              onClick={scrollToGrades}
            >
              View Current Stock
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 mt-10 pt-6 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">100%</p>
              <p className="text-sm text-primary-foreground/70">Mine-to-Market</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">50+</p>
              <p className="text-sm text-primary-foreground/70">Tons Annually</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">3</p>
              <p className="text-sm text-primary-foreground/70">Continents Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
