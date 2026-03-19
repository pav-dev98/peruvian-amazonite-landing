// src/components/contactForm.schema.ts
import * as z from "zod";

export const volumeRanges = ["< 500 kg", "500 kg - 1 Ton", "1 - 5 Tons", "5 - 10 Tons", "10 - 25 Tons", "> 25 Tons"];
export const intendedUses = ["Jewelry Manufacturing", "Lapidary / Cutting", "Interior Decoration", "Tumbled Stones / Beads", "Wholesale Distribution", "Collection / Specimens", "Other"];

export const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  country: z.string({ required_error: "Please select a country." }),
  volume: z.string({ required_error: "Please select a volume range." }),
  intendedUse: z.string({ required_error: "Please select an intended use." }),
  interestedGrades: z.array(z.string()).refine((v) => v.length > 0, {
    message: "You must select at least one grade.",
  }),
  message: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof formSchema>;