import useWindowSize from "hooks/utils/use-window-size";
import { useEffect } from "react";
import { BrowserUtils } from "utils/browser-utils";

export default function useSafariVhWorkaround() {
  const { height } = useWindowSize();

  useEffect(() => {
    if (!BrowserUtils.isSafari()) return;
    document.documentElement.style.setProperty("--vh", `${height * 0.01}px`);
  }, [height]);
}
