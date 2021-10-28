const Post = ({ content, image, user, currentUser }) => {
  const isCurrentUser =  currentUser === user
  return (<div>
  {image && <img className="w-1/6 h-1/6 object-cover" src={URL.createObjectURL(image)} alt="Post Image" />}
  <p>{ content }</p>
  <p className={isCurrentUser && "text-green-600 font-extrabold"}>{ user }</p>
</div>);
}

export default Post;
