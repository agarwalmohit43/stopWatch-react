import { useEffect, useRef } from "react";

const useInterval = (fn: () => void, delay: null | number) => {
  let savedCallback = useRef<any>();

  useEffect(() => {
    if (typeof fn === "function") {
      savedCallback.current = fn;
    }
  }, [fn]);

  useEffect(() => {
    if (!delay) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
};

export default useInterval;
