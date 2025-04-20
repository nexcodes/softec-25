import Link from "next/link";
import React from "react";
import { SignUpForm } from "../../_components/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md p-6 bg-[#e8fcf9] border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-xl font-bold mb-1 text-black">Create an account</h2>
      <p className="mb-6 text-black text-sm">
        Enter your details below to create your account
      </p>

      <SignUpForm />

      <div className="mt-4 text-center">
        <span className="text-black">Already have an account? </span>
        <Link
          href="/auth/sign-in"
          className="text-black font-medium underline hover:no-underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
