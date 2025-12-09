import { useContext } from "react";
import List from "./List.jsx";
import { PostsContext, usePosts } from "../Context/PostsContext.jsx";

export default function Posts() {
  const { posts } = usePosts();

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
