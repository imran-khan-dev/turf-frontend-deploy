/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import updateTurfProfile from "@/services/turf/updateTurfProfile";

interface TurfProfileUpdateFormProps {
  profileId: any;
  profileSlug: any;
}

const TurfProfileUpdateForm = ({
  profileId,
  profileSlug,
}: TurfProfileUpdateFormProps) => {
  const [state, formAction, isPending] = useActionState(
    updateTurfProfile,
    null
  );

  const getFieldError = (fieldName: string) => {
    if (state && "errors" in state) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error ? error.message : null;
    }
    return null;
  };

  useEffect(() => {
    if (state?.success) toast.success("Turf profile updated!");
    if (state && !state.success && state.message) toast.error(state.message);
  }, [state]);

  return (
    <form action={formAction} encType="multipart/form-data">
      <input type="hidden" name="turfProfileId" value={profileId} />

      <FieldGroup>
        {/* ---------------- BASIC INFO ---------------- */}
        <h2 className="text-xl font-semibold mb-2 text-[#1A80E3]">
          Basic Information
        </h2>
        <h2>Your Slug: {profileSlug}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="slug">Slug</FieldLabel>
            <Input id="slug" name="slug" defaultValue={profileId.slug} />
            {getFieldError("slug") && (
              <FieldDescription className="text-red-600">
                {getFieldError("slug")}
              </FieldDescription>
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="name">Turf Name</FieldLabel>
            <Input id="name" name="name" defaultValue={profileId.name} />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Contact Email</FieldLabel>
            <Input id="email" name="email" defaultValue={profileId.email} />
          </Field>

          <Field>
            <FieldLabel htmlFor="phone">Contact Phone</FieldLabel>
            <Input id="phone" name="phone" defaultValue={profileId.phone} />
          </Field>

          <Field>
            <FieldLabel htmlFor="openHours">Open Hours</FieldLabel>
            <Input
              id="openHours"
              name="openHours"
              defaultValue={profileId.openHours}
            />
          </Field>
        </div>

        {/* ---------------- SOCIAL LINKS ---------------- */}
        <h2 className="text-xl font-semibold mt-6 mb-2 text-[#1A80E3]">
          Social Links
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field>
            <FieldLabel htmlFor="facebookLink">Facebook</FieldLabel>
            <Input
              id="facebookLink"
              name="facebookLink"
              defaultValue={profileId.facebookLink}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="instagramLink">Instagram</FieldLabel>
            <Input
              id="instagramLink"
              name="instagramLink"
              defaultValue={profileId.instagramLink}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="whatsappLink">Whatsapp</FieldLabel>
            <Input
              id="whatsappLink"
              name="whatsappLink"
              defaultValue={profileId.whatsappLink}
            />
          </Field>
        </div>

        {/* ---------------- HERO & ABOUT ---------------- */}
        <h2 className="text-xl font-semibold mt-6 mb-2 text-[#1A80E3]">
          Hero & About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="heroTitle">Hero Title</FieldLabel>
            <Input
              id="heroTitle"
              name="heroTitle"
              defaultValue={profileId.heroTitle}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="aboutTitle">About Title</FieldLabel>
            <Input
              id="aboutTitle"
              name="aboutTitle"
              defaultValue={profileId.aboutTitle}
            />
          </Field>

          <Field className="md:col-span-2">
            <FieldLabel htmlFor="aboutDesc">About Description</FieldLabel>
            <Textarea
              id="aboutDesc"
              name="aboutDesc"
              rows={3}
              defaultValue={profileId.aboutDesc}
            />
          </Field>
        </div>

        {/* ---------------- ADDRESS ---------------- */}
        <h2 className="text-xl font-semibold mt-6 mb-2 text-[#1A80E3]">
          Address & Footer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input id="address" name="address" defaultValue={profileId.address} />
          </Field>

          <Field>
            <FieldLabel htmlFor="googleMapLink">Google Map Link</FieldLabel>
            <Input
              id="googleMapLink"
              name="googleMapLink"
              defaultValue={profileId.googleMapLink}
            />
          </Field>

          <Field className="md:col-span-2">
            <FieldLabel htmlFor="footerText">Footer Text</FieldLabel>
            <Input
              id="footerText"
              name="footerText"
              defaultValue={profileId.footerText}
            />
          </Field>
        </div>

        {/* ---------------- FILE UPLOADS ---------------- */}
        <h2 className="text-xl font-semibold mt-6 mb-2 text-[#1A80E3]">
          Update Images
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field>
            <FieldLabel htmlFor="logo">Logo</FieldLabel>
            <Input id="logo" name="logo" type="file" accept="image/*" />
          </Field>

          <Field>
            <FieldLabel htmlFor="heroImage">Hero Image</FieldLabel>
            <Input
              id="heroImage"
              name="heroImage"
              type="file"
              accept="image/*"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="aboutImg">About Image</FieldLabel>
            <Input id="aboutImg" name="aboutImg" type="file" accept="image/*" />
          </Field>
        </div>

        {/* ---------------- SUBMIT BUTTON ---------------- */}
        <div className="mt-6 flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="text-sm px-4 py-2"
          >
            {isPending ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
};

export default TurfProfileUpdateForm;
