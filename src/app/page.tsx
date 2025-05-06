import { Metadata } from "next";
import Posts from "@/components/Posts";

export const metadata: Metadata = {
  title: "Sanity",
  description: "Sanity",
};

export default async function HomePage() {
  return <Posts />;
}
