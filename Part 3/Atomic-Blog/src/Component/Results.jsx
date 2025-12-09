import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext.jsx";

export default function Results() {
  const { posts } = useContext(PostsContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}
