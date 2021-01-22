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
  const article = await DevToService.getArticle(
    "how-i-built-my-personal-website-3k0n",
  );
  if (article == null) {
    throw Error("Could not retrieve article for how it's made page.");
  }

  return { props: { article } };
}

export default HowItsMadePage;
