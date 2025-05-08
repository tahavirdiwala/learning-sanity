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
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  };
  publishedAt: string;
  body: PortableTextBlock[];
  bodyText: string;
}

export type { IPost };
