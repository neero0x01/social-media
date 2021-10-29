import {useContext} from "react";
import {UserContext} from "../App";

const Post = ({ content, image, user }) => {
  const currentUser = useContext(UserContext);
  const isCurrentUser =  currentUser === user
  return (<div className="mb-4">
  {image && <img className="w-1/2 h-1/2 object-cover" src={URL.createObjectURL(image)} alt="Post" />}
  <p>{ content }</p>
  <p className={isCurrentUser && "text-green-600 font-extrabold"}>{ user }</p>
</div>);
}

export default Post;
