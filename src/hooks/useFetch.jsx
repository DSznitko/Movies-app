import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(url, { signal })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });

    // cleanup function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { error, data };
};

export default useFetchData;
