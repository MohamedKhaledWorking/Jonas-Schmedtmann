import { faker } from "@faker-js/faker";
import { createContext, useContext, useState } from "react";

export const PostsContext = createContext();

export default function PostsContextProvider({ children }) {
  function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }

  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostsContext.Provider
      value={{
        createRandomPost,
        posts: searchedPosts,
        searchQuery,
        setSearchQuery,
        handleAddPost,
        handleClearPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  if (!PostsContext) {
    throw new Error("usePosts must be used within a PostsContextProvider");
  }
  return useContext(PostsContext);
}
