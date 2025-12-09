import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext.jsx";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = useContext(PostsContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
