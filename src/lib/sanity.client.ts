import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-08-01", // Use current date
  useCdn: process.env.NODE_ENV === "production", // Enable CDN in production
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Only needed for write operations
});

const dd = {
  name: "taha",
};
