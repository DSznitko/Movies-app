import React, { useState, useEffect } from "react";

const useWidnowWidth = () => {
  const [windowWidth, setWindowWidth] = useState({
    width: null,
  });

  useEffect(() => {
    const windowWidthHandler = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };

    windowWidthHandler();

    window.addEventListener("resize", windowWidthHandler);

    const cleanUpFunction = () => {
      window.removeEventListener("resize", windowWidthHandler);
    };

    return cleanUpFunction;
  }, []);

  return windowWidth;
};

export default useWidnowWidth;
