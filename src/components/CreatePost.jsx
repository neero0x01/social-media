import {useContext, useRef, useState} from "react";
import { PostContext } from "../App";

const CreatePost = ({ user }) => {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef(null);

  return (
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1 className="text-xl">Create Post</h1>
          <form onSubmit={e => {
            e.preventDefault();
            const post = { content, image, user, id: Date.now() };
            dispatch({ type: "ADD_POST", payload: {post}})
            setContent("");
            imageInputRef.current.value = "";
          }}>
            <div className="my-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Add Post Content"
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={''}
                    />
              </div>
            </div>
            <input className="my-4" ref={imageInputRef} onChange={e => setImage(e.target.files[0])} type="file" />
            <button
                type="submit"
                className="w-full flex justify-center py-2 my-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Submit
            </button>
          </form>
      </div>
    </div>
   );
}

export default CreatePost;
