import { Intent, Spinner, Toaster } from "@blueprintjs/core";
import { BlogPostCard } from "components/03-organisms/blog-post/blog-post-card";
import useDevToArticles from "hooks/service/use-dev-to-articles";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import React, { useCallback, useRef } from "react";
import Styles from "./index.module.scss";

const BlogPage: React.FC = () => {
  const toaster = useRef<Toaster>(null);
  const { articles, loading } = useDevToArticles(
    useCallback(
      () =>
        toaster.current?.show({
          intent: Intent.DANGER,
          message: "Failed to load blog posts.",
        }),
      [],
    ),
  );

  return (
    <div className={Styles.blog}>
      <div className={Styles.blog__content}>
        {loading && <Spinner className={Styles.blog__content__spinner} />}
        {!loading && (
          <div className={Styles.blog__content__posts}>
            {articles.map((article: DevToArticleMeta) => (
              <BlogPostCard
                article={article}
                key={article.id}
                className={Styles.blog__content__posts__post}
              />
            ))}
          </div>
        )}
      </div>
      <Toaster ref={toaster} />
    </div>
  );
};

export default BlogPage;
