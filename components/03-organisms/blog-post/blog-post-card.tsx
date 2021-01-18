import { Card, Divider, H2, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { BlogPostMetaTags } from "components/03-organisms/blog-post/blog-post-meta-tags";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import React from "react";
import Styles from "./blog-post-card.module.scss";

export interface BlogPostCardProps {
  article: DevToArticleMeta;
  className?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = (
  props: BlogPostCardProps,
) => {
  const { article, className } = props;

  return (
    <a
      href={`/blog/${article.slug}`}
      className={`${Styles.blogPostCard} -inherit-color ${className ?? ""}`}
    >
      <Card className={Styles.blogPostCard__card} tabIndex={0}>
        <div className={Styles.blogPostCard__card__image}>
          <img src={article.cover_image} alt={article.description} />
        </div>
        <div className={Styles.blogPostCard__card__info}>
          <div className={Styles.blogPostCard__card__info__title}>
            <H2 className={Styles.blogPostCard__card__info__title__header}>
              {article.title}
            </H2>
            <p>{article.description}</p>
          </div>
          <div className={Styles.blogPostCard__card__info__meta}>
            <div className={Styles.blogPostCard__card__info__meta__tags}>
              {article.tag_list.map((tag: string) => (
                <Tag
                  icon={IconNames.TAG}
                  className={Styles.blogPostCard__card__info__meta__tags__tag}
                >
                  {tag}
                </Tag>
              ))}
            </div>
            <Divider
              className={Styles.blogPostCard__card__info__meta__divider}
            />
            <BlogPostMetaTags
              article={article}
              className={Styles.blogPostCard__card__info__meta__tag}
            />
          </div>
        </div>
      </Card>
    </a>
  );
};
