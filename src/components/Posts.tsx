"use client";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity.client";
import { IPost } from "@/types/post/post.type";
import PostCard from "@/components/PostCard";

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
    image{
      asset->{
        _id,
        url
      }
    }
  },
  publishedAt
}`;

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    try {
      const posts = await client.fetch(getPostsQuery);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Memoize the posts to prevent unnecessary re-renders

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {posts.map((post) => (
        <PostCard key={post.slug.current} post={post} />
      ))}
    </div>
  );
}
