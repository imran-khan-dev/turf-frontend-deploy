/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { serverFetch } from "@/lib/server-fetch";

const updateTurfProfile = async (_prev: any, formData: FormData) => {
    try {
        const id = formData.get("turfProfileId") as string;
        if (!id) return { success: false, message: "Profile ID missing" };

        // Remove empty optional files
        ["logo", "heroImage", "aboutImg"].forEach((key) => {
            const file = formData.get(key);
            if (!(file instanceof File) || file.size === 0) {
                formData.delete(key);
            }
        });

        const res = await serverFetch.patch(
            `turf-profile/update/${id}`,
            { body: formData },
            "ownerAccess"
        );

        const data = await res.json();
        return data;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Update failed. Try again.",
        };
    }
};

export default updateTurfProfile;
