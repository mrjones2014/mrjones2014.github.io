import DevToArticleMeta from "interfaces/dev-to-article-meta";
import { useEffect, useState } from "react";
import { DevToService } from "utils/dev-to-service";

export default function useDevToArticles(onError?: () => void) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Array<DevToArticleMeta>>([]);

  useEffect(() => {
    (async () => {
      try {
        setArticles(await DevToService.fetchArticles());
      } catch (e) {
        onError?.();
      }

      setLoading(false);
    })();
  }, [onError]);

  return { articles, loading };
}
