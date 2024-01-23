import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollbarCompletion = () => {
      const currentProgress = window.scrollY;

      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };
    window.addEventListener("scroll", updateScrollbarCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollbarCompletion);
    };
  }, []);

  return completion;
};

export default useScrollProgress;
