import { client } from "@/lib/sanity.client";
import { IPost } from "@/types/post/post.type";

// Extract GROQ query to a constant for better maintainability
const getPostsQuery = `*[_type == "post"] | order(title) {
  title,
  slug,
  mainImage{ asset->{ _id, url } },
  author->{ _id, name, bio, image{ asset->{ _id, url } } },
  publishedAt,
  body,                                                 
}`;

async function getPosts() {
  return client.fetch<IPost[]>(getPostsQuery);
}

export { getPosts };
