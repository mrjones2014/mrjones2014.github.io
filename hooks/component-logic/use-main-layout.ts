import { FocusStyleManager } from "@blueprintjs/core";
import useSafariVhWorkaround from "hooks/utils/use-safari-vh-workaround";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function useMainLayout() {
  const router = useRouter();
  const [darkTheme, setDarkTheme] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  useSafariVhWorkaround();
  useEffect(() => {
    FocusStyleManager.onlyShowFocusOnTabs();
    setDarkTheme(systemPrefersDarkMode());
  }, []);
  useEffect(() => {
    if (contentRef.current == null) return;
    contentRef.current.scrollTop = 0;
  }, [router.pathname]);
  const toggleDarkTheme = () =>
    setDarkTheme((prevState: boolean) => !prevState);

  return {
    darkTheme,
    toggleDarkTheme,
    contentRef,
  };
}

/**
 * Detect the system preference for dark mode,
 * and use that as the default value for whether
 * we should use dark mode.
 */
const systemPrefersDarkMode = (): boolean => {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (ignored) {
    return true;
  }
};
