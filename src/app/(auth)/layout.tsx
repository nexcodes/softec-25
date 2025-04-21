import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 bg-background/80"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {children}
    </main>
  );
}
