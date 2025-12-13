import { memo } from "react";
import FormAddPost from "./FormAddPost.jsx";
import Posts from "./Posts.jsx";

const Main = memo(function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
});

export default Main;
