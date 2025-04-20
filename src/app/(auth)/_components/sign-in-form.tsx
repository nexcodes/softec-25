"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import GoogleIcon from "@/components/icons";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function SignInForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const { error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Signed In successfully!");
    });
  }

  const handleGoogleSignIn = () => {
    startTransition(async () => {
      const { error } = await authClient.signIn.social({ provider: "google" });
      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Signed In via Google successfully!");
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="m@example.com"
                    {...field}
                    className="bg-white border-2 border-black rounded-md p-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
                  />
                </FormControl>
                <FormMessage className="text-red-700 font-bold" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-black font-medium">
                    Password
                  </FormLabel>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-black hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    className="bg-white border-2 border-black rounded-md p-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
                  />
                </FormControl>
                <FormMessage className="text-red-700 font-bold" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-[#00c4b4] text-black border-2 border-black rounded-md p-5 font-medium text-base hover:bg-[#00b0a0] hover:translate-y-0.5 transition-all"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </Form>

      <div className="mt-4 mb-4">
        <Button
          variant="neutral"
          onClick={handleGoogleSignIn}
          disabled={isPending}
          className="w-full bg-white text-black border-2 border-black rounded-md p-5 font-medium text-base hover:bg-gray-50 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
        >
          <GoogleIcon className="mt-0.5" />
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}
