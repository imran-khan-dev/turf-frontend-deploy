/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import z from "zod";

export default async function deleteAdmin(_currentState: any, formData: FormData) {
  try {
    const adminEmail = formData.get("email") as string;

    const DeleteAdminZodSchema = z.object({
      email: z
        .string()
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email too long")
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          message: "Invalid email format",
        }),
    });

    const validated = DeleteAdminZodSchema.safeParse({ email: adminEmail });

    if (!validated.success) {
      return {
        success: false,
        errors: validated.error.issues.map(issue => ({
          field: issue.path[0],
          message: issue.message,
        })),
        message: validated.error.issues[0].message,
      };
    }

    const validatedEmail = validated.data.email;

    const res = await serverFetch.delete(
      `admin/delete-admin/${validatedEmail}`,
      {
        body: JSON.stringify({ email: validatedEmail }),
        headers: { "Content-Type": "application/json" },
      },
      "adminAccess"
    );

    const result = await res.json();
    return result;
  } catch (error) {
    const err = error as any;

    if (err?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    return {
      success: false,
      errors: [],
      message:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Failed to delete admin. Please try again.",
    };
  }
}
