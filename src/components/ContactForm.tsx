import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner"
import { Send, Phone, Mail, Clock } from "lucide-react";
import CardQuote from "./CardQuote";
import type { CardQuoteProps } from "./CardQuote";
import countries from "../data/countries.json";

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

const quotes: Array<CardQuoteProps> = [
  {
    title: "Email Us",
    description: "sales@peruvian-amazonite.com",
    icon: Mail,
    variant: "primary"
  },
  {
    title: "Call Us",
    description: "+51 999 888 777",
    icon: Phone,
    variant: "primary"
  },
  {
    title: "Response Time",
    description: "Within 24 business hours",
    icon: Clock,
    variant: "accent"
  }
]

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  country: z.string({ required_error: "Please select a country." }),
  volume: z.string({ required_error: "Please select a volume range." }),
  intendedUse: z.string({ required_error: "Please select an intended use." }),
  grades: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one grade.",
  }),
  message: z.string().optional(),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      grades: [],
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form Values:", values);
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form Values:", values);

    toast("Quote Request Received!", {
      description: "Our sales team will contact you within 24 hours.",
      duration: Infinity,
    });

    setIsSubmitting(false);
    form.reset();
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
              {quotes.map((quote,index)=>{
                return (<CardQuote key={index} title={quote.title} description={quote.description} icon={quote.icon} variant={quote.variant} />)
              })}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Company Name */}
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith Minerals Ltd." className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 (555) 123-4567" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Country */}
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select your country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem key={country.name} value={country.name.toLowerCase()}>
                                  {country.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Volume */}
                    <FormField
                      control={form.control}
                      name="volume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Monthly Volume *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select volume range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {volumeRanges.map((range) => (
                                <SelectItem key={range} value={range.toLowerCase()}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Intended Use */}
                    <FormField
                      control={form.control}
                      name="intendedUse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Intended Use *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select intended use" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {intendedUses.map((use) => (
                                <SelectItem key={use} value={use.toLowerCase()}>
                                  {use}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Grades - Checkboxes */}
                    <FormField
                      control={form.control}
                      name="grades"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">Interested Grade(s) *</FormLabel>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            {["AAA", "AA", "A", "Mixed"].map((grade) => (
                              <FormField
                                key={grade}
                                control={form.control}
                                name="grades"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={grade}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(grade)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, grade])
                                              : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== grade
                                                )
                                              )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        {grade}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message / Specific Requirements</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your specific requirements, preferred shipping terms, or any questions..."
                                className="resize-none"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
