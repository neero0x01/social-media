import Post from "./Post";

const PostList = ({ posts }) => {
  return posts.map((post, i) => <Post key={i} {...post} />);
}

export default PostList;
