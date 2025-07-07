import { useEffect, useState } from "react";
import { request } from "../services/request";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request
      .get(url)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};
