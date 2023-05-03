import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    axios
      .get(url, { signal })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        isLoading(false);
      });

    // cleanup function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { isLoading, error, data };
};

export default useFetchData;
