// Component.js
import { useGetPostsQuery, useAddPostMutation } from "./features/api/apiSlice";

function Posts() {
  const { data, isLoading, error } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <button onClick={() => addPost({ title: "New post" })}>Add</button>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default Posts;