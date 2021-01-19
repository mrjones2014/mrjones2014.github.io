import { BlogPostCard } from "components/03-organisms/blog-post/blog-post-card";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import { GetStaticPropsResult } from "next";
import React from "react";
import { DevToService } from "utils/dev-to-service";
import Styles from "./index.module.scss";

interface BlogPageProps {
  articles: Array<DevToArticleMeta>;
}

const BlogPage: React.FC<BlogPageProps> = ({ articles }: BlogPageProps) => (
  <div className={Styles.blog}>
    <div className={Styles.blog__content}>
      <div className={Styles.blog__content__posts}>
        {articles.map((article: DevToArticleMeta) => (
          <BlogPostCard
            article={article}
            key={article.id}
            className={Styles.blog__content__posts__post}
          />
        ))}
      </div>
    </div>
  </div>
);

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlogPageProps>
> {
  const articles = await DevToService.fetchArticles();
  return { props: { articles } };
}

export default BlogPage;
