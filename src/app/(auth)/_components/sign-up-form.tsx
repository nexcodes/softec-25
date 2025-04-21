"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import GoogleIcon from "@/components/icons";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function SignUpForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const { error } = await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Account created successfully!");
    });
  }

  const handleGoogleSignUp = () => {
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mian Mohid Naeem"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="m@example.com"
                    type="email"
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
                <FormLabel className="text-black font-medium">
                  Password
                </FormLabel>
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">
                  Confirm password
                </FormLabel>
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
            Sign up
          </Button>
        </form>
      </Form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-black"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#e8fcf9] px-2 text-black font-medium">
            Or continue with
          </span>
        </div>
      </div>

      <div className="mb-4">
        <Button
          variant="neutral"
          onClick={handleGoogleSignUp}
          disabled={isPending}
          className="w-full bg-white text-black border-2 border-black rounded-md p-5 font-medium text-base hover:bg-gray-50 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
        >
          <GoogleIcon className="mt-px" />
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}
