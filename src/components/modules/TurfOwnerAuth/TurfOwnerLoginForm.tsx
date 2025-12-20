// "use client";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import loginOwnerAdminManager from "@/services/auth/loginOwnerAdminManager";
// import { useActionState, useEffect } from "react";
// import { Button } from "../../ui/button";
// import { Field, FieldDescription, FieldGroup, FieldLabel } from "../../ui/field";
// import { Input } from "../../ui/input";
// import { toast } from "sonner";
// import Link from "next/link";

// const UserLoginForm = ({ redirect }: { redirect?: string }) => {
//   const [state, formAction, isPending] = useActionState(
//     loginOwnerAdminManager,
//     null
//   );

//   const getFieldError = (fieldName: string) => {
//     if (state && "errors" in state && state.errors) {
//       const error = state.errors.find((err: any) => err.field === fieldName);
//       return error?.message;
//     } else {
//       return null;
//     }
//   };

//   useEffect(() => {
//     if (state && !state.success && "message" in state && state.message) {
//       toast.error(state.message);
//     }

//     if (state && state.success && "message" in state && state.message) {
//       toast.success(state.message);
//     }
//   }, [state]);

//   return (
//     <form action={formAction}>
//       {redirect && <input type="hidden" name="redirect" value={redirect} />}
//       <input type="hidden" name="role" value="owner" />
//       <FieldGroup>
//         <div className="grid grid-cols-1 gap-4">
//           {/* Email */}
//           <Field>
//             <FieldLabel htmlFor="email">Email</FieldLabel>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="m@example.com"
//               //   required
//             />

//             {getFieldError("email") && (
//               <FieldDescription className="text-red-600">
//                 {getFieldError("email")}
//               </FieldDescription>
//             )}
//           </Field>

//           {/* Password */}
//           <Field>
//             <FieldLabel htmlFor="password">Password</FieldLabel>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               //   required
//             />
//             {getFieldError("password") && (
//               <FieldDescription className="text-red-600">
//                 {getFieldError("password")}
//               </FieldDescription>
//             )}
//           </Field>
//         </div>
//         <FieldGroup className="mt-4">
//           <Field>
//             <Button type="submit" disabled={isPending}>
//               {isPending ? "Logging in..." : "Login"}
//             </Button>

//             <FieldDescription className="px-6 text-center">
//               Don&apos;t have an account?{" "}
//               <Link
//                 href="/owner/register"
//                 className="text-blue-600 hover:underline"
//               >
//                 Sign up
//               </Link>
//             </FieldDescription>
//             {/* <FieldDescription className="px-6 text-center">
//               <a
//                 href="/forget-password"
//                 className="text-blue-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </FieldDescription> */}
//           </Field>
//         </FieldGroup>
//       </FieldGroup>
//     </form>
//   );
// };

// export default UserLoginForm;

"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import loginOwnerAdminManager from "@/services/auth/loginOwnerAdminManager";
import { useActionState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../ui/field";
import { Input } from "../../ui/input";
import { toast } from "sonner";
import Link from "next/link";

const UserLoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(
    loginOwnerAdminManager,
    null
  );

  // refs for guest autofill
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleGuestLogin = () => {
    if (emailRef.current && passwordRef.current) {
      emailRef.current.value = "kamal@gmail.com";
      passwordRef.current.value = "123456Kamal@";
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

    if (state && state.success && "message" in state && state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <input type="hidden" name="role" value="owner" />

      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
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

          {/* Password */}
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

        <FieldGroup className="mt-4 space-y-3">
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Logging in..." : "Login"}
          </Button>

          {/* Guest Login */}
          <Button
            type="button"
            variant="outline"
            onClick={handleGuestLogin}
            className="w-full"
          >
            Login as Guest App User
          </Button>

          <FieldDescription className="px-6 text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/owner/register"
              className="text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </FieldDescription>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default UserLoginForm;
