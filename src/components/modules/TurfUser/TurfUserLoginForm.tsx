/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useActionState, useEffect } from "react";
// import { Button } from "../../ui/button";
// import { Field, FieldDescription, FieldGroup, FieldLabel } from "../../ui/field";
// import { Input } from "../../ui/input";
// import turfUserlogin from "@/services/auth/turfUserLogin";
// import { toast } from "sonner";

// const TurfUserLoginForm = ({
//   redirect,
//   turfProfileSlug,
// }: {
//   redirect?: string;
//   turfProfileSlug: string;
// }) => {
//   const [state, formAction, isPending] = useActionState(turfUserlogin, null);

//   const getFieldError = (fieldName: string) => {
//     if (state && "errors" in state && state.errors) {
//       const error = state.errors.find((err: any) => err.field === fieldName);
//       return error?.message;
//     } else {
//       return null;
//     }
//   };

//   useEffect(() => {
//     if (
//       state &&
//       !state.success &&
//       "message" in state &&
//       state.message
//     ) {
//       toast.error(state.message);
//     }
//   }, [state]);

//   return (
//     <form action={formAction}>
//       {redirect && <input type="hidden" name="redirect" value={redirect} />}
//       <input type="hidden" name="role" value="turfUser" />
//       <input type="hidden" name="turfProfileSlug" value={turfProfileSlug} />
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
//               <a
//                 href={`/${turfProfileSlug}/turf-user/register`}
//                 className="text-blue-600 hover:underline"
//               >
//                 Sign up
//               </a>
//             </FieldDescription>
//           </Field>
//         </FieldGroup>
//       </FieldGroup>
//     </form>
//   );
// };

// export default TurfUserLoginForm;

"use client";

import { useActionState, useEffect } from "react";
import { Button } from "../../ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../ui/field";
import { Input } from "../../ui/input";
import turfUserlogin from "@/services/auth/turfUserLogin";
import { toast } from "sonner";

const TurfUserLoginForm = ({
  redirect,
  turfProfileSlug,
}: {
  redirect?: string;
  turfProfileSlug: string;
}) => {
  const [state, formAction, isPending] = useActionState(turfUserlogin, null);

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
    <>
      {/* Guest Credentials Info */}
      <div className="mb-4 rounded-lg bg-gray-50 border p-3 text-sm text-gray-700">
        <p className="font-medium mb-1">Guest Credentials</p>
        <p>
          Email: <code>mahadi@gmail.com</code>
        </p>
        <p>
          Password: <code>123456Mahadi@</code>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Valid only for{" "}
          <span className="font-medium">
            Touch Down Turf | Visit Slug: touchdown-turf
          </span>
        </p>
      </div>

      <form action={formAction}>
        {redirect && <input type="hidden" name="redirect" value={redirect} />}

        <input type="hidden" name="role" value="turfUser" />
        <input type="hidden" name="turfProfileSlug" value={turfProfileSlug} />

        <FieldGroup>
          <div className="grid grid-cols-1 gap-4">
            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
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

          <FieldGroup className="mt-4">
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button>

              <FieldDescription className="px-6 text-center">
                Don&apos;t have an account?{" "}
                <a
                  href={`/${turfProfileSlug}/turf-user/register`}
                  className="text-blue-600 hover:underline"
                >
                  Sign up
                </a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </>
  );
};

export default TurfUserLoginForm;
