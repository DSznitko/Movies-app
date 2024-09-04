import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    axios
      .get(url, { signal })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
        setLoading(false);
      });

    // cleanup function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { error, data, loading, setData };
};

export default useFetchData;
