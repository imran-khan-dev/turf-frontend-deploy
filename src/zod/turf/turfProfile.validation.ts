import { z } from "zod";


export const createTurfProfileValidationSchema = z.object({
    slug: z.string().min(1, "Slug is required"),
    name: z.string().min(1, "Name is required"),

    email: z.string().email("Invalid email").optional().nullable(),
    phone: z.string().optional().nullable(),
    openHours: z.string().optional().nullable(),

    facebookLink: z.string().url("Invalid URL").optional().nullable(),
    instagramLink: z.string().url("Invalid URL").optional().nullable(),
    whatsappLink: z.string().url("Invalid URL").optional().nullable(),

    heroTitle: z.string().optional().nullable(),
    aboutTitle: z.string().optional().nullable(),
    aboutDesc: z.string().optional().nullable(),

    address: z.string().optional().nullable(),
    googleMapLink: z.string().optional().nullable(),
    footerText: z.string().optional().nullable(),

    // File validations
    logo: z.any().optional(),
    heroImage: z.any().optional(),
    aboutImg: z.any().optional(),
});
