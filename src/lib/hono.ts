import { hc } from "hono/client";

import { AppType } from "@/app/api/[[...route]]/route";

// Make sure URL always includes /api as the base path
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
// Strip any trailing slash from the API URL
const baseUrl = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;

export const client = hc<AppType>(`${baseUrl}/api`);

// Helper function to get full API URL for a specific path
export const getApiUrl = (path: string): string => {
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}/api${formattedPath}`;
};
