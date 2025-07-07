import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsCard from "../components/NewsCard";
import { request } from "../services/request";

function HomePage() {
  const { news, fetchNews, loading } = useContext(NewsContext);

  const deleteNews = async (id) => {
    await request.delete(`/news/${id}`);
    fetchNews();
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      {news.map((item) => (
        <NewsCard key={item.id} item={item} onDelete={deleteNews} />
      ))}
    </div>
  );
}

export default HomePage;
