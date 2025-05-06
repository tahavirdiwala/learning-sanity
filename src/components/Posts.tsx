"use client";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity.client";
import { IPost } from "@/types/post/post.type";
import Image from "next/image";

// Extract GROQ query to a constant for better maintainability
const getPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage{
    asset->{
      _id, 
      url
    }
  },
  author->{
    _id,
    name,
    bio,
    image
  },
  publishedAt
}`;

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    client.fetch(getPostsQuery).then(setPosts);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts.map((post) => {
        const imageUrl = post.mainImage?.asset?.url;
        return (
          <article
            key={post.slug.current}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {imageUrl?.length > 0 && (
              <Image
                src={imageUrl}
                alt={post.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover h-48 w-full"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              {post.author && (
                <p className="text-gray-600">By {post.author?.name}</p>
              )}
              {post.publishedAt && (
                <p className="text-gray-600">
                  Published on {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
