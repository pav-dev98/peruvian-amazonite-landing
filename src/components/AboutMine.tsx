import { MapPin, Activity, Users, Shield } from "lucide-react";
import andesImage from "../assets/andes-landscape2.png";


const AboutMine = () => {
  const stats = [
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Peruvian Andes" },
    { icon: <Activity className="w-5 h-5" />, label: "Active Since", value: "2015" },
    { icon: <Users className="w-5 h-5" />, label: "Team Members", value: "25+" },
    { icon: <Shield className="w-5 h-5" />, label: "Certification", value: "ISO 14001" },
  ];

  return (
    <section className="py-20 bg-muted mineral-texture overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={andesImage.src}
                alt="Peruvian Andes Mining Region"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 via-transparent to-transparent" />
              
              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Amazonas Region</p>
                    <p className="text-sm text-muted-foreground">Northern Peru</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              From the Heart of the Peruvian Andes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our dedicated mine produces some of the most sought-after Amazonite in the world. 
              As a tech-driven mining operation, we combine traditional extraction methods with 
              rigorous quality control to ensure every ton meets the highest international 
              standards for color, clarity, and consistency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Located in the mineral-rich Amazonas region of Peru, our deposits are renowned 
              for producing amazonite with exceptional saturation and the distinctive 
              "Tiffany-blue" coloration that collectors and manufacturers prize worldwide.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 shadow-soft border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{stat.icon}</div>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <p className="font-serif font-bold text-lg text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMine;
