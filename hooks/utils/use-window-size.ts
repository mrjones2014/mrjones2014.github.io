import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(getOrDefault(() => window.innerWidth));
  const [height, setHeight] = useState(getOrDefault(() => window.innerHeight));

  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return { width, height };
}

const getOrDefault = (callback: () => number) => {
  try {
    return callback();
  } catch (ignored) {
    return 0;
  }
};
