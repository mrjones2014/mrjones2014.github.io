import { Card, Divider, H2, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import DevToArticle from "interfaces/dev-to-article";
import Link from "next/link";
import React from "react";
import Styles from "./blog-post.module.scss";

export interface BlogPostProps {
  article: DevToArticle;
  className?: string;
}

export const BlogPost: React.FC<BlogPostProps> = (props: BlogPostProps) => {
  const { article, className } = props;

  const tags = article.tags.split(",").map((tag: string) => tag.trim());

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${Styles.blogPost} -inherit-color ${className ?? ""}`}
    >
      <Card className={Styles.blogPost__card} tabIndex={0}>
        <div className={Styles.blogPost__card__image}>
          <img src={article.cover_image} alt={article.description} />
        </div>
        <div className={Styles.blogPost__card__info}>
          <div className={Styles.blogPost__card__info__title}>
            <H2 className={Styles.blogPost__card__info__title__header}>
              {article.title}
            </H2>
            <p>{article.description}</p>
          </div>
          <div className={Styles.blogPost__card__info__meta}>
            <div className={Styles.blogPost__card__info__meta__tags}>
              {tags.map((tag: string) => (
                <Tag
                  icon={IconNames.TAG}
                  className={Styles.blogPost__card__info__meta__tags__tag}
                >
                  {tag}
                </Tag>
              ))}
            </div>
            <Divider className={Styles.blogPost__card__info__meta__divider} />
            <Tag
              icon={IconNames.CALENDAR}
              className={Styles.blogPost__card__info__meta__tag}
            >
              {article.readable_publish_date}
            </Tag>
            <Tag
              icon={IconNames.COMMENT}
              className={Styles.blogPost__card__info__meta__tag}
            >
              {article.comments_count}
            </Tag>
            <Tag
              icon={IconNames.THUMBS_UP}
              className={Styles.blogPost__card__info__meta__tag}
            >
              {article.public_reactions_count}
            </Tag>
          </div>
        </div>
      </Card>
    </a>
  );
};
