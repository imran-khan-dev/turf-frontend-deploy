/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import updateTurfUserAction from "@/services/turf/updateTurfUserProfile";

interface TurfUserUpdateProfileForm {
  turfUser: {
    role: string;
    id: string;
    name: string;
    email: string;
    phone?: string;
    photo?: string | null;
  };
}

const TurfUserUpdateProfileForm: React.FC<TurfUserUpdateProfileForm> = ({
  turfUser,
}) => {
  const [state, formAction, isPending] = useActionState(
    updateTurfUserAction,
    null
  );
  const [preview, setPreview] = useState(turfUser.photo);

  const getFieldError = (fieldName: string) => {
    if (state && "errors" in state) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error ? error.message : null;
    }
    return null;
  };

  useEffect(() => {
    if (state && !state.success && state.message) toast.error(state.message);
    if (state && state.success) toast.success("Profile updated successfully!");
  }, [state]);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT: Avatar & Basic Info */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow space-y-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src={preview || "/default-avatar.png"}
            alt="Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{turfUser.name}</h2>
        <p className="text-gray-500">{turfUser.email}</p>
        <p className="text-gray-500">{turfUser.phone || "Phone not set"}</p>
        <p className="text-gray-400 text-sm">Role: {turfUser.role || "User"}</p>
      </div>

      {/* RIGHT: Editable Form */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-bold text-[#1A80E3] mb-4">Edit Profile</h2>
        <form
          action={formAction}
          encType="multipart/form-data"
          className="space-y-4"
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" name="name" defaultValue={turfUser.name} />
              {getFieldError("name") && (
                <FieldDescription className="text-red-600">
                  {getFieldError("name")}
                </FieldDescription>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={turfUser.email}
              />
              {getFieldError("email") && (
                <FieldDescription className="text-red-600">
                  {getFieldError("email")}
                </FieldDescription>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <Input id="phone" name="phone" defaultValue={turfUser.phone} />
              {getFieldError("phone") && (
                <FieldDescription className="text-red-600">
                  {getFieldError("phone")}
                </FieldDescription>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="photo">Profile Image</FieldLabel>
              <Input
                id="photo"
                name="file"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setPreview(URL.createObjectURL(file));
                }}
              />
              {getFieldError("photo") && (
                <FieldDescription className="text-red-600">
                  {getFieldError("photo")}
                </FieldDescription>
              )}
            </Field>

            <Input type="hidden" name="turfUserId" value={turfUser.id} />

            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Updating..." : "Update Profile"}
              </Button>
            </div>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default TurfUserUpdateProfileForm;
