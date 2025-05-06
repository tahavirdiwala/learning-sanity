import { PortableTextBlock } from "next-sanity";

interface IPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  author: {
    name: string;
  };
  publishedAt: string;
  body: PortableTextBlock[];
}

export type { IPost };
