import { useContext } from "react";
import Results from "./Results.jsx";
import SearchPosts from "./SearchPosts.jsx";
import { PostsContext } from "../Context/PostsContext.jsx";

export default function Header() {
  const { handleClearPosts } = useContext(PostsContext);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
