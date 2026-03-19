// src/components/useLeadForm.ts
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { actions } from "astro:actions";
import { formSchema, type LeadFormValues } from "../schemas/contactForm.schema";

export const useLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", companyName: "", email: "",
      phone: "", interestedGrades: [], message: "",
    },
  });

  const handleSubmit = async (values: LeadFormValues) => {
    setIsSubmitting(true);
    const { error } = await actions.insertLead(values);

    if (error) {
      toast("Error!", { description: "Please try again later." });
      setIsSubmitting(false);
      return;
    }

    toast("Quote Request Received!", { description: "Our sales team will contact you within 24 hours." });
    setIsSubmitting(false);
    form.reset();
  };

  return { form, isSubmitting, handleSubmit };
};