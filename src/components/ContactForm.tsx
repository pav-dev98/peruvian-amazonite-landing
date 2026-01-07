import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner"
import { Send, Phone, Mail, Clock } from "lucide-react";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia",
  "Czech Republic", "Denmark", "Egypt", "Finland", "France", "Germany", "Greece",
  "Hong Kong", "Hungary", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Japan", "Jordan", "Kenya", "Malaysia", "Mexico",
  "Morocco", "Nepal", "Netherlands", "New Zealand", "Nigeria", "Norway",
  "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Saudi Arabia", "Singapore", "South Africa",
  "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Taiwan",
  "Thailand", "Turkey", "UAE", "Ukraine", "United Kingdom", "United States",
  "Vietnam", "Other"
];

const volumeRanges = [
  "< 500 kg",
  "500 kg - 1 Ton",
  "1 - 5 Tons",
  "5 - 10 Tons",
  "10 - 25 Tons",
  "> 25 Tons"
];

const intendedUses = [
  "Jewelry Manufacturing",
  "Lapidary / Cutting",
  "Interior Decoration",
  "Tumbled Stones / Beads",
  "Wholesale Distribution",
  "Collection / Specimens",
  "Other"
];

const ContactForm = () => {
//   const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  const handleGradeToggle = (grade: string) => {
    setSelectedGrades(prev =>
      prev.includes(grade)
        ? prev.filter(g => g !== grade)
        : [...prev, grade]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast("Quote Request Received!",{
      description: "Our sales team will contact you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedGrades([]);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Info */}
          <div className="lg:col-span-2">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Request a Bulk Quotation Today
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Complete the form and our dedicated sales team will contact you within 
              24 hours with a customized quote based on your requirements.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-muted rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="text-muted-foreground text-sm">sales@peruvian-amazonite.com</p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-muted-foreground text-sm">+51 999 888 777</p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Response Time</p>
                  <p className="text-muted-foreground text-sm">Within 24 business hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="John Smith"
                    required
                    className="h-12"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="Smith Minerals Ltd."
                    required
                    className="h-12"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="h-12"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="h-12"
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label>Country *</Label>
                  <Select name="country" required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country.toLowerCase()}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Volume */}
                <div className="space-y-2">
                  <Label>Estimated Monthly Volume *</Label>
                  <Select name="volume" required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select volume range" />
                    </SelectTrigger>
                    <SelectContent>
                      {volumeRanges.map((range) => (
                        <SelectItem key={range} value={range.toLowerCase()}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Intended Use */}
                <div className="space-y-2">
                  <Label>Intended Use *</Label>
                  <Select name="intendedUse" required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select intended use" />
                    </SelectTrigger>
                    <SelectContent>
                      {intendedUses.map((use) => (
                        <SelectItem key={use} value={use.toLowerCase()}>
                          {use}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Grades - Checkboxes */}
                <div className="space-y-2">
                  <Label>Interested Grade(s) *</Label>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {["AAA", "AA", "A", "Mixed"].map((grade) => (
                      <div key={grade} className="flex items-center space-x-2">
                        <Checkbox
                          id={`grade-${grade}`}
                          checked={selectedGrades.includes(grade)}
                          onCheckedChange={() => handleGradeToggle(grade)}
                        />
                        <Label
                          htmlFor={`grade-${grade}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {grade}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Message / Specific Requirements</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your specific requirements, preferred shipping terms, or any questions..."
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="ghost"
                size="lg"
                className="w-full mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Contact Our Sales Director
                  </span>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
