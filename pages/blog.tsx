import { Intent, Spinner, Toaster } from "@blueprintjs/core";
import { BlogPost } from "components/03-organisms/blog-post/blog-post";
import useDevToArticles from "hooks/service/use-dev-to-articles";
import DevToArticle from "interfaces/dev-to-article";
import React, { useCallback, useRef } from "react";
import Styles from "./blog.module.scss";

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
        {loading && <Spinner />}
        {!loading &&
          articles.map((article: DevToArticle) => (
            <BlogPost
              article={article}
              className={Styles.blog__content__post}
            />
          ))}
      </div>
      <Toaster ref={toaster} />
    </div>
  );
};

export default BlogPage;
