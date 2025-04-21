import React from "react";
import { Toaster } from "../ui/sonner";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};
