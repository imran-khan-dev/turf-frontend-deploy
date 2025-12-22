
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import PublicNavbar from "@/components/shared/PublicNavbar";
import PublicFooter from "@/components/shared/PublicFooter";
import { Toaster } from "sonner";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import { Suspense } from "react";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PublicNavbar />
        {children}
        <Suspense fallback={null}>
        <Toaster position="bottom-right" richColors />
        <LoginSuccessToast />
        <LogoutSuccessToast/>
        </Suspense>
        <PublicFooter />
      </body>
    </html>
  );
}
