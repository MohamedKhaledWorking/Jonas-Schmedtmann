import FormAddPost from "./FormAddPost.jsx";
import Posts from "./Posts.jsx";

function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
