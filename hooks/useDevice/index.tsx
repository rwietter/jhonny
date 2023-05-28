import { useEffect, useState } from "react";
export default function useDevice() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    console.log("mobile", mobile);
    setMobile(mobile);
  }, []);

  return { isMobile };
}
