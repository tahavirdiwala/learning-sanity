import { IHeroSection } from "@/components/Hero";

interface ILandingPage {
  _id: string;
  title: string;
  slug: string;
  hero: IHeroSection;
}

interface IImage {
  _id: string;
  asset: IAsset;
}

interface IAsset {
  _id: string;
  url: string;
}

export type { ILandingPage, IImage, IAsset };
