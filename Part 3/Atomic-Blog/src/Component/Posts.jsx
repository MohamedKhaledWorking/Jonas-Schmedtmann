import { useContext } from "react";
import List from "./List.jsx";
import { PostsContext } from "../Context/PostsContext.jsx";

export default function Posts() {
  const { posts } = useContext(PostsContext);

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
