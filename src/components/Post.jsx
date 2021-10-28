import {useContext} from "react";
import {UserContext} from "../App";

const Post = ({ content, image, user }) => {
  const currentUser = useContext(UserContext);
  const isCurrentUser =  currentUser === user
  return (<div>
  {image && <img className="w-1/6 h-1/6 object-cover" src={URL.createObjectURL(image)} alt="Post Image" />}
  <p>{ content }</p>
  <p className={isCurrentUser && "text-green-600 font-extrabold"}>{ user }</p>
</div>);
}

export default Post;
