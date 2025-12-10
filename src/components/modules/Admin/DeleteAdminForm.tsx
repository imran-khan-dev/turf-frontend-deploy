/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";

import { toast } from "sonner";
import deleteAdmin from "@/services/admin/deleteAdminBySuperAdmin";

const DeleteAdminForm = () => {
  const [state, formAction, isPending] = useActionState(deleteAdmin, null);

  const getFieldError = (fieldName: string) => {
    if (state && "errors" in state) {
      const err = state.errors.find((e: any) => e.field === fieldName);
      return err?.message || null;
    }
    return null;
  };

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Admin deleted successfully!");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="max-w-2xl">
      <input type="hidden" name="role" value={"SUPER_ADMIN"} />

      <FieldGroup>
        <h2 className="text-xl font-semibold text-[#1A80E3] mb-3">
          Delete Manager Admin
        </h2>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
          />
          {getFieldError("email") && (
            <FieldDescription className="text-red-600">
              {getFieldError("email")}
            </FieldDescription>
          )}
        </Field>
      </FieldGroup>
      <Button type="submit" disabled={isPending} className="px-4 py-2 mt-4">
        {isPending ? "Deleting..." : "Delete Admin"}
      </Button>
    </form>
  );
};

export default DeleteAdminForm;
