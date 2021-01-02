import useWindowSize from "hooks/utils/use-window-size";
import { useEffect } from "react";

export default function useSafariVhWorkaround() {
  const { height } = useWindowSize();

  useEffect(
    () =>
      document.documentElement.style.setProperty("--vh", `${height * 0.01}px`),
    [height]
  );
}
