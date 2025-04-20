import type { Metadata } from "next";
import Link from "next/link";

import { SignInForm } from "../../_components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="w-full max-w-md p-6 bg-background border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-xl font-bold mb-1 text-black">
        Login to your account
      </h2>
      <p className="mb-6 text-black text-sm">
        Enter your email below to login to your account
      </p>
      <SignInForm />
      <div className="mt-4 text-center">
        <span className="text-black">{"Don't have an account? "}</span>
        <Link
          href="/auth/sign-up"
          className="text-black font-medium underline hover:no-underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
