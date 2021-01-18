import { Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import React from "react";

export interface BlogPostMetaTagsProps {
  className?: string;
  article?: DevToArticleMeta;
  enableLinks?: boolean;
}

export const BlogPostMetaTags: React.FC<BlogPostMetaTagsProps> = (
  props: BlogPostMetaTagsProps,
) => {
  const { article, className, enableLinks } = props;

  return (
    <React.Fragment>
      <Tag icon={IconNames.CALENDAR} className={className}>
        {article.readable_publish_date}
      </Tag>
      {enableLinks !== true && (
        <React.Fragment>
          <Tag icon={IconNames.COMMENT} className={className}>
            {article.comments_count}
          </Tag>
          <Tag icon={IconNames.THUMBS_UP} className={className}>
            {article.public_reactions_count}
          </Tag>
        </React.Fragment>
      )}
      {enableLinks === true && (
        <React.Fragment>
          <a
            className={className}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tag icon={IconNames.COMMENT}>{article.comments_count}</Tag>
          </a>
          <a
            className={className}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tag icon={IconNames.THUMBS_UP}>
              {article.public_reactions_count}
            </Tag>
          </a>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
