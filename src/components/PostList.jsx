import Post from "./Post";

const PostList = ({ posts, user }) => {
  return posts.map((post, i) => <Post key={i} currentUser={user} {...post} />);
}

export default PostList;
