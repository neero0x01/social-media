import { useRef, useState } from "react";

const CreatePost = ({ user, handleAddPost }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef(null);

  return (
    <div>
      <h1>Create Post Component</h1>
      <form onSubmit={e => {
        e.preventDefault();
        const post = { content, image, user };
        handleAddPost(post);
        setContent("");
        imageInputRef.current.value = "";
      }}>
        <input value={content} onChange={e => setContent(e.target.value)} type="text" placeholder="Add Post Content" />
        <input ref={imageInputRef} onChange={e => setImage(e.target.files[0])} type="file" />
        <button type="submit">Submit</button>
      </form>
    </div>
   );
}

export default CreatePost;
