import DevToArticle from "interfaces/dev-to-article";
import { useState, useEffect } from "react";
import { DevToService } from "utils/dev-to-service";

export default function useDevToArticle(slug: string, onError?: () => void) {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<DevToArticle>();

  useEffect(() => {
    if (slug == null || slug.length === 0) {
      return;
    }

    (async () => {
      try {
        setArticle(await DevToService.getArticle(slug));
      } catch (e) {
        onError?.();
      }

      setLoading(false);
    })();
  }, [onError, slug]);

  return { article, loading };
}
