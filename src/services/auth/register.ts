/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import z from "zod";

const registerOwnerValidationZodSchema = z
    .object({
        name: z.string().min(1, { message: "Name is required" }),
        email: z.string().email({ message: "Valid email is required" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
        confirmPassword: z.string().min(6),
        phone: z.string().min(10).optional().or(z.literal("")),
        file: z.any().optional(), // image file
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const register = async (_currentState: any, formData: any) => {
    try {
        const file = formData.get("file");

        const validationData = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            file: file, // include in validation
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        };

        const validated = registerOwnerValidationZodSchema.safeParse(validationData);

        if (!validated.success) {
            return {
                success: false,
                errors: validated.error.issues.map((issue) => ({
                    field: issue.path[0],
                    message: issue.message,
                })),
            };
        }

        const newFormData = new FormData();
        newFormData.append("name", formData.get("name"));
        newFormData.append("email", formData.get("email"));
        newFormData.append("password", formData.get("password"));
        newFormData.append("phone", formData.get("phone") || "");

        if (file) {
            newFormData.append("file", file);
        }

        const res = await serverFetch.post("user/register-owner", { body: newFormData }, "ownerAccess")

        console.log("registerTest", res)

        return res;
    } catch (error) {
        console.log(error);
        return { error: "Registration failed" };
    }
};
