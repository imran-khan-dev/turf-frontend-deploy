/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { registerTurfUserValidationZodSchema } from '../../zod/auth/auth.validation';
import turfUserlogin from "./turfUserLogin";


export const turfUserRegister = async (_currentState: any, formData: any) => {

    console.log("checkregisterform", formData)

    try {
        const file = formData.get("file");

        const validationData = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            file: file,
            turfProfileSlug: formData.get("turfProfileSlug"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        };

        const validated = registerTurfUserValidationZodSchema.safeParse(validationData);

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
        newFormData.append("turfProfileSlug", formData.get("turfProfileSlug"));

        if (file) {
            newFormData.append("file", file);
        }

        const res = await serverFetch.post("turf-user/register", { body: newFormData }, "turfUserAccess")

        console.log("registerTest", res)

        const result = await res.json();


        if (result.success) {
            const loginData = new FormData();
            loginData.append("email", formData.get("email") as string);
            loginData.append("password", formData.get("password") as string);
            loginData.append("role", "turfUser");
            loginData.append("turfProfileSlug", formData.get("turfProfileSlug") as string); 

            return await turfUserlogin(null, loginData);
        }

        return result;
    } catch (error) {
        console.log(error);
        return { error: "Registration failed" };
    }
};

export default turfUserRegister;