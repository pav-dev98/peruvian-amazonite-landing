import { Check, Star, Sparkles, Package } from "lucide-react";
import gradeAAA from "@/assets/grade-aaa.jpg";
import gradeAA from "@/assets/grade-aa.jpg";
import gradeA from "@/assets/grade-a.jpg";

interface GradeCardProps {
  grade: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  highlighted?: boolean;
  icon: React.ReactNode;
}

const GradeCard = ({ grade, title, description, image, features, highlighted, icon }: GradeCardProps) => (
  <div
    className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-elevated ${
      highlighted
        ? "bg-gradient-card border-2 border-accent shadow-card scale-105"
        : "bg-card border border-border shadow-soft hover:scale-[1.02]"
    }`}
  >
    {/* Highlighted Badge */}
    {highlighted && (
      <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}

    {/* Image */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={`${grade} Amazonite`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          highlighted ? "bg-accent" : "bg-primary"
        }`}>
          {icon}
        </div>
        <span className="text-primary-foreground font-bold text-xl">{grade}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="font-serif text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
            <Check className={`w-4 h-4 ${highlighted ? "text-accent" : "text-primary"}`} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProductGrading = () => {
  const grades = [
    {
      grade: "Grade AAA",
      title: "Elite Color",
      description:
        "Deep turquoise-blue saturation with zero to minimal black inclusions. Perfect for high-end luxury jewelry and collector specimens.",
      image: gradeAAA,
      features: [
        "Deep saturated color",
        "Minimal inclusions",
        "Collector grade quality",
        "Premium jewelry applications",
      ],
      icon: <Sparkles className="w-5 h-5 text-primary-foreground" />,
    },
    {
      grade: "Grade AA",
      title: "Professional Grade",
      description:
        "Vibrant color with natural white veining. The standard choice for lapidary artists, premium beads, and interior decor.",
      image: gradeAA,
      features: [
        "Vibrant natural color",
        "Beautiful white veining",
        "Lapidary ready",
        "Interior design quality",
      ],
      highlighted: true,
      icon: <Star className="w-5 h-5 text-accent-foreground" />,
    },
    {
      grade: "Grade A",
      title: "Commercial Bulk",
      description:
        "Standard grade amazonite for high-volume manufacturing, carvings, and tumbled stones. Best price-to-volume ratio.",
      image: gradeA,
      features: [
        "High volume availability",
        "Manufacturing ready",
        "Competitive pricing",
        "Bulk discounts available",
      ],
      icon: <Package className="w-5 h-5 text-primary-foreground" />,
    },
  ];

  return (
    <section id="grading" className="py-20 bg-muted mineral-texture">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Quality Selection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Amazonite: Graded for Your Needs
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every piece is carefully graded and sorted to match your specific requirements. 
            From premium collector specimens to commercial bulk orders.
          </p>
        </div>

        {/* Grade Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {grades.map((grade) => (
            <GradeCard key={grade.grade} {...grade} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom selection? We can grade to your specifications.
          </p>
          <a 
            href="#contact" 
            className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2"
          >
            Request Custom Grading
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrading;
