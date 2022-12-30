import { useEffect, useState } from "react";

export const useViewPortSize = () => {
  const [width, setWidth] = useState(0);

  function handleWindowSizeChange() {
    if (typeof window !== "undefined") {
      setWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    if (typeof window !== "undefined" || typeof document !== "undefined") {
      setWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    }
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return { isMobile };
}