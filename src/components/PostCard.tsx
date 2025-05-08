import Image from "next/image";
import { IPost } from "@/types/post/post.type";
import { memo } from "react";

interface IPostCardProps {
  post: IPost;
}

function PostCard({ post }: IPostCardProps) {
  const imageUrl = post.mainImage?.asset?.url;
  const authorImageUrl = post.author?.image?.asset?.url;

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {imageUrl?.length > 0 && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={post.title || "Post image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="rounded-t-lg object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4">
        {authorImageUrl?.length > 0 && (
          <div className="relative w-10 h-10 mb-2">
            <Image
              src={authorImageUrl}
              alt={post.author?.name || "Author"}
              fill
              className="rounded-full object-cover"
              sizes="40px"
            />
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
          <p className="text-gray-600 font-bold">By {post.author.name}</p>
          <p className="text-gray-600 text-sm">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600 text-sm">{post.bodyText}</p>
        </div>
      </div>
    </article>
  );
}

// Memo the component to prevent unnecessary re-renders
export default memo(PostCard);
