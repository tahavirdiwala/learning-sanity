import { client } from "@/lib/sanity.client";
import { ILandingPage } from "@/types/landing-page/main.type";

const landingPageQuery = `
  *[_type == "landingPage" && slug.current == $slug][0] {
    title,
    hero {
      headline,
      subheadline,
      backgroundImage{asset->{url}}
    },
    content[]{..., _type == "image" => {asset->{url}}},
  }
`;

async function getLandingPageData(slug: string): Promise<ILandingPage | null> {
  return client.fetch<ILandingPage>(landingPageQuery, { slug });
}

export { getLandingPageData };
