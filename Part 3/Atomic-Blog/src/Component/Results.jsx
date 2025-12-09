import { useContext } from "react";
import { PostsContext, usePosts } from "../Context/PostsContext.jsx";

export default function Results() {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
