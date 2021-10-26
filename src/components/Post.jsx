const Post = ({ content, image, user }) => {
  return (<div>
  {image && <img className="w-1/6 h-1/6 object-cover" src={URL.createObjectURL(image)} alt="Post Image" />}
  <p>{ content }</p>
  <p className="text-green-600">{ user }</p>
</div>);
}

export default Post;
