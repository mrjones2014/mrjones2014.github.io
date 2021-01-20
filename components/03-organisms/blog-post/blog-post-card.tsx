import { Card, Divider, H2, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { BlogPostMetaTags } from "components/03-organisms/blog-post/blog-post-meta-tags";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import Link from "next/link";
import Image from "next/image";
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
    <Link href={`/blog/${article.slug}`} passHref={true}>
      <a className={`${Styles.blogPostCard} -inherit-color ${className ?? ""}`}>
        <Card className={Styles.blogPostCard__card} tabIndex={0}>
          <div className={Styles.blogPostCard__card__image}>
            <Image
              src={article.cover_image}
              alt={article.description}
              width="100%"
              height="auto"
            />
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
                    key={tag}
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
    </Link>
  );
};
