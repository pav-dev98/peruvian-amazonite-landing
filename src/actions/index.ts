import { defineAction } from "astro:actions";
import {z} from "astro:schema";


export const server = {
    insertLead : defineAction({
        input: z.object({
            fullName: z.string().min(2),
            companyName: z.string().min(2),
            email: z.string().email(),
            phone: z.string().optional(),
            country: z.string(),
            volume: z.string(),
            intendedUse: z.string(),
            interestedGrades : z.array(z.string()),
            message: z.string().optional(),
        }),
        handler: async ({fullName,companyName,email,phone,country,volume,intendedUse,interestedGrades,message}) => {
            const SB_URL = import.meta.env.SUPABASE_API_URL;
            const SB_API_KEY = import.meta.env.SUPABASE_API_KEY;
            const SB_AUTHORIZATION = import.meta.env.SUPABASE_AUTHORIZATION;
            
            const response = await fetch(`${SB_URL}/rest/v1/leads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SB_API_KEY,
                    'Authorization': `Bearer ${SB_AUTHORIZATION}`,
                    'Prefer': 'return=minimal',
                },
                body: JSON.stringify({
                    full_name: fullName,
                    company_name: companyName,
                    email,
                    phone_number: phone,
                    country,
                    estimed_montly_volume: volume,
                    intented_use: intendedUse,
                    interested_grade : interestedGrades,
                    message,
                }),
            });
            if(!response.ok){
                throw new Error("Failed to insert lead");
            }
            return {success: true,message: "Lead inserted successfully"};
        }
    })
}