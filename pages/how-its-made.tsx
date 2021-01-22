import DevToArticle from "interfaces/dev-to-article";
import { GetStaticPropsResult } from "next";
import BlogPostPage, { BlogPostPageProps } from "pages/blog/[slug]";
import React from "react";
import { DevToService } from "utils/dev-to-service";

const HowItsMadePage: React.FC<BlogPostPageProps> = (
  props: BlogPostPageProps,
) => <BlogPostPage article={props.article} />;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlogPostPageProps>
> {
  const articles = await DevToService.fetchArticles();
  console.log(articles);
  const slug = articles.find(
    (article: DevToArticle) =>
      article.title === "How I Built My Personal Website",
  )?.slug;

  if (slug == null) {
    throw Error("Could not find article for how it's made page.");
  }

  const article = await DevToService.getArticle(slug);
  if (article == null) {
    throw Error("Could not retrieve article for how it's made page.");
  }

  return { props: { article } };
}

export default HowItsMadePage;
