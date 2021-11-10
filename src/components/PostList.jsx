import Post from "./Post";

const PostList = ({ posts }) => {

  return (
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1 className="text-xl">Post Feed</h1>
          {!(posts.length === 0) ? posts.map((post) => <Post key={post.id} {...post} />) : <h1 className="text-xl text-center">Feed is empty</h1>}
        </div>
      </div>
  )
}

export default PostList;
