"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../ui/field";
import { Input } from "../../ui/input";
import loginOwnerAdminManager from "@/services/auth/loginOwnerAdminManager";
import { toast } from "sonner";

const AdminLoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(
    loginOwnerAdminManager,
    null
  );

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleGuestLogin = () => {
    if (emailRef.current && passwordRef.current) {
      emailRef.current.value = "imranadmin@turf.com";
      passwordRef.current.value = "123456Imran@";
      toast.info("Guest credentials filled");
    }
  };

  const getFieldError = (fieldName: string) => {
    if (state && "errors" in state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error?.message;
    }
    return null;
  };

  useEffect(() => {
    if (state && !state.success && "message" in state && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <input type="hidden" name="role" value="admin" />

      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
            />
            {getFieldError("email") && (
              <FieldDescription className="text-red-600">
                {getFieldError("email")}
              </FieldDescription>
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            {getFieldError("password") && (
              <FieldDescription className="text-red-600">
                {getFieldError("password")}
              </FieldDescription>
            )}
          </Field>
        </div>

        <FieldGroup className="mt-6 space-y-3">
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Logging in..." : "Login"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleGuestLogin}
            className="w-full"
          >
            Login as Guest Admin
          </Button>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default AdminLoginForm;
