import {useContext} from "react";
import {PostContext, UserContext} from "../App";

const Post = ({ content, image, user, id }) => {
  const { dispatch } = useContext(PostContext);
  const currentUser = useContext(UserContext);
  const isCurrentUser =  currentUser === user
  return (<div className="mb-4">
  {image && <img className="w-1/2 h-1/2 object-cover" src={URL.createObjectURL(image)} alt="Post" />}
  <p>{ content }</p>
  <p className={isCurrentUser && "text-green-600 font-extrabold"}>{ user }</p>
    { isCurrentUser && <button
        onClick={() => dispatch({ type: "DELETE_POST", payload: {id}})}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Delete Post
    </button>  }
</div>);
}

export default Post;
