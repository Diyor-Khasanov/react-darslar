import { createContext, useState, useEffect } from "react";
import { request } from "../services/request";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const { data } = await request.get("/news");
      setNews(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, setNews, fetchNews, loading }}>
      {children}
    </NewsContext.Provider>
  );
};
