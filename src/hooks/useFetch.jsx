import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        isLoading(false);
      });
  }, [url]);

  return { isLoading, error, data };
};

export default useFetchData;
