import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../services/request";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    request.get(`/news/${id}`).then((res) => setNews(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await request.put(`/news/${id}`, news);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={news.title}
        onChange={(e) => setNews({ ...news, title: e.target.value })}
        required
      />
      <input
        type="text"
        value={news.image}
        onChange={(e) => setNews({ ...news, image: e.target.value })}
        required
      />
      <textarea
        value={news.description}
        onChange={(e) => setNews({ ...news, description: e.target.value })}
        required
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditPage;
