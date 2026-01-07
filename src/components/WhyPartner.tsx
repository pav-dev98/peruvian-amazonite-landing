import { Mountain, Leaf, Truck, Award } from "lucide-react";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => (
  <div className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border border-border overflow-hidden">
    {/* Background Accent */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Icon */}
    <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
      <div className="text-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
    </div>

    {/* Content */}
    <h3 className="relative font-serif text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="relative text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const WhyPartner = () => {
  const advantages = [
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Direct Mine Ownership",
      description:
        "No middlemen. You are dealing directly with the concession owner in Peru, ensuring the best possible price and provenance.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Ethical Sourcing",
      description:
        "Our mining operations adhere to strict Peruvian environmental and labor regulations. 100% legal, transparent, and traceable.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics Expertise",
      description:
        "Years of experience exporting tons to major global markets. We handle the complexity of international mineral logistics efficiently.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Quality",
      description:
        'Our Peruvian deposits are world-renowned for their unique "Tiffany-blue" hues that stand out in any market.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            The Advantage of Direct Sourcing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Partner directly with the source for unmatched quality, pricing, and reliability.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
