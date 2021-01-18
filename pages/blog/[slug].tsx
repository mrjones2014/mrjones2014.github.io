import { Card, Classes, Divider, H1, Spinner, Tag } from "@blueprintjs/core";
import { BlogPostMetaTags } from "components/03-organisms/blog-post/blog-post-meta-tags";
import useDevToArticle from "hooks/service/use-dev-to-article";
import { useRouter } from "next/router";
import React from "react";
import Styles from "./[slug].module.scss";

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { article, loading } = useDevToArticle(`${slug ?? ""}`);

  if (slug != null && !loading && article == null) {
    // TODO redirect to 404
  }

  if (loading) {
    return (
      <div className={Styles.blogPost}>
        <div className={Styles.blogPost__content}>
          <Spinner className={Styles.blogPost__content__spinner} />
        </div>
      </div>
    );
  }

  return (
    <div className={Styles.blogPost}>
      <div className={Styles.blogPost__content}>
        <Card className={Styles.blogPost__content__card}>
          <div className={Styles.blogPost__content__card__image}>
            <img src={article!.cover_image} alt={article!.description} />
          </div>
          <div className={Styles.blogPost__content__card__title}>
            <H1>{article!.title}</H1>
            <div className={Styles.blogPost__content__card__title__meta}>
              <BlogPostMetaTags
                article={article!}
                className={Styles.blogPost__content__card__title__meta__tag}
                enableLinks={true}
              />
            </div>
          </div>
          <div className={Styles.blogPost__content__card__body}>
            <div
              className={Classes.RUNNING_TEXT}
              dangerouslySetInnerHTML={{
                __html: article.body_html,
              }}
            />
            <Divider
              className={Styles.blogPost__content__card__body__separator}
            />
            <BlogPostMetaTags
              article={article!}
              className={Styles.blogPost__content__card__body__metatag}
              enableLinks={true}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogPostPage;
