import { Globe, Ship, Shield, TrendingUp } from "lucide-react";

const TrustBar = () => {
  const exportRegions = [
    { name: "India", flag: "🇮🇳" },
    { name: "China", flag: "🇨🇳" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Brazil", flag: "🇧🇷" },
  ];

  return (
    <section className="bg-primary py-6 border-y border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Export Regions */}
          <div className="flex items-center gap-4">
            <Globe className="w-5 h-5 text-primary-foreground/80" />
            <span className="text-primary-foreground/80 text-sm font-medium">
              Exporting to:
            </span>
            <div className="flex items-center gap-3">
              {exportRegions.map((region) => (
                <div
                  key={region.name}
                  className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1"
                >
                  <span className="text-lg">{region.flag}</span>
                  <span className="text-primary-foreground/90 text-xs font-medium hidden sm:inline">
                    {region.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground font-semibold text-sm">
                +50 Tons Exported Annually
              </span>
            </div>
            <div className="w-px h-6 bg-primary-foreground/20 hidden md:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground font-semibold text-sm">
                100% Mine-to-Market Traceability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
