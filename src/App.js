import { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please Login";
  }, [user])

  if(!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <>
      <Header setUser={setUser} />
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      <PostList posts={posts} />
    </>
  );
}

export default App;
