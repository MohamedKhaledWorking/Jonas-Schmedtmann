import { useEffect, useMemo, useState } from "react";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";
import Main from "./Component/Main.jsx";
import Archive from "./Component/Archive.jsx";
import PostsContextProvider, { usePosts } from "./Context/PostsContext.jsx";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: "Post archive in addition to main posts",
    };
  }, []);

  return (
    <PostsContextProvider>
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header />
        <Main />
        <Archive archiveOptions={archiveOptions}  />
        <Footer />
      </section>
    </PostsContextProvider>
  );
}
export default App;
