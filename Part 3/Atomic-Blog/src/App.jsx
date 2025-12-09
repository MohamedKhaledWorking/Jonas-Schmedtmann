import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";
import Main from "./Component/Main.jsx";
import Archive from "./Component/Archive.jsx";
import PostsContextProvider from "./Context/PostsContext.jsx";

// function createRandomPost() {
//   return {
//     title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
//     body: faker.hacker.phrase(),
//   };
// }
management
function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // const [posts, setPosts] = useState(() =>
  //   Array.from({ length: 30 }, () => createRandomPost())
  // );
  // const [searchQuery, setSearchQuery] = useState("");

  // const searchedPosts =
  //   searchQuery.length > 0
  //     ? posts.filter((post) =>
  //         `${post.title} ${post.body}`
  //           .toLowerCase()
  //           .includes(searchQuery.toLowerCase())
  //       )
  //     : posts;

  // function handleAddPost(post) {
  //   setPosts((posts) => [post, ...posts]);
  // }

  // function handleClearPosts() {
  //   setPosts([]);
  // }

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <PostsContextProvider>
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header
        // posts={searchedPosts}
        // onClearPosts={handleClearPosts}
        // searchQuery={searchQuery}
        // setSearchQuery={setSearchQuery}
        />
        <Main
        //  posts={searchedPosts} onAddPost={handleAddPost}
        />
        <Archive
        // onAddPost={handleAddPost}
        // createRandomPost={createRandomPost}
        />
        <Footer />
      </section>
    </PostsContextProvider>
  );
}
export default App;
