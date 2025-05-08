import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import { getLandingPageData } from "@/services/landingPage.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate metadata function to set dynamic title
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { slug } = params;
    const page = await getLandingPageData(slug);

    if (!page) {
      return {
        title: "Page Not Found",
      };
    }

    return {
      title: page.title,
      description: page.hero.subheadline,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error Loading Page",
    };
  }
}

export default async function LandingPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { slug } = params;
    const page = await getLandingPageData(slug);

    if (!page) return notFound();

    return (
      <div className="flex flex-col gap-6">
        <Hero hero={{ ...page.hero, title: page.title }} />
        <Posts />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching landing page:", error);
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-semibold">Something went wrong</h2>
        <p>
          We&apos;re having trouble loading this page. Please try again later.
        </p>
      </div>
    );
  }
}
