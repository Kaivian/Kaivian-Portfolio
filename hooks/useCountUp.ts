import { useEffect, useState } from "react";

export function useCountUp(to: number, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(progressRatio * to);
      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(step);
  }, [to, duration]);

  return count;
}
