import {createContext, useContext, useEffect, useReducer, useState} from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from './reducer';

export const UserContext = createContext();
export const PostContext = createContext({posts: []});

function App() {
  const [user, setUser] = useState("");
  const initialPostsState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostsState)
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please Login";
  }, [user])

  // const handleAddPost = useCallback((newPost) => {
  //   setPosts([newPost, ...state.posts]);
  // }, [posts]);

  if(!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
