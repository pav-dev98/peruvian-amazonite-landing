import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mountain, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Products", id: "grading" },
    { label: "Why Us", id: "why-partner" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isScrolled ? "bg-primary" : "bg-primary-foreground/20"
            }`}>
              <Mountain className={`w-5 h-5 transition-colors ${
                isScrolled ? "text-primary-foreground" : "text-primary-foreground"
              }`} />
            </div>
            <div>
              <span className={`font-serif font-bold text-lg transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                Peruvian Amazonite
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground/80" : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={isScrolled ? "default" : "heroOutline"}
              onClick={() => scrollToSection("contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-xl shadow-elevated mb-4 p-6 border border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-primary font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                className="mt-2"
                onClick={() => scrollToSection("contact")}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
