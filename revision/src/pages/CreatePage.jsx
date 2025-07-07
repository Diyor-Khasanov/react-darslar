import { useState } from "react";
import { request } from "../services/request";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await request.post("/news", { title, description, image });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreatePage;
