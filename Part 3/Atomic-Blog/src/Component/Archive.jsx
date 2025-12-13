import { memo, useState } from "react";
import { usePosts } from "../Context/PostsContext.jsx";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const Archive = memo(function Archive({ archiveOptions }) {
  const {  handleAddPost } = usePosts();
  const [posts] = useState(() =>
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(archiveOptions.show);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => handleAddPost(post)}>
                Add as new post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

export default Archive;
