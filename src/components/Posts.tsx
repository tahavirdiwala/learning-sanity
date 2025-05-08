"use client";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/post.service";
import { IPost } from "@/types/post/post.type";
import PostCard from "@/components/PostCard";

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    try {
      const posts = await getPosts();
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts.map((post) => (
            <PostCard key={post.slug.current} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
