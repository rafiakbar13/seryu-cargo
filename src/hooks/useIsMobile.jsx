import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const useIsMobile = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 769);

  useEffect(() => {
    setIsMobile(width < 821);
  }, [width]);

  return isMobile;
};

export default useIsMobile;
