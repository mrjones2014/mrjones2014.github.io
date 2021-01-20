import { Card, Classes, Divider, H1 } from "@blueprintjs/core";
import { BlogPostMetaTags } from "components/03-organisms/blog-post/blog-post-meta-tags";
import DevToArticle from "interfaces/dev-to-article";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Image from "next/image";
import React from "react";
import { DevToService } from "utils/dev-to-service";
import Styles from "./[slug].module.scss";

interface BlogPostPageProps {
  article: DevToArticle;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({
  article,
}: BlogPostPageProps) => (
  <div className={Styles.blogPost}>
    <div className={Styles.blogPost__content}>
      <Card className={Styles.blogPost__content__card}>
        <div className={Styles.blogPost__content__card__image}>
          <Image
            src={article.cover_image}
            alt={article.description}
            width="100%"
            height="auto"
          />
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

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<BlogPostPageProps>> {
  const slug = context.params?.slug;

  if (Array.isArray(slug)) {
    throw new Error("Expecting a single slug, received an array.");
  }

  if (slug == null || slug.length < 1) {
    throw new Error("No slug found.");
  }

  const article = await DevToService.getArticle(slug);
  return { props: { article } };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const allArticles = await DevToService.fetchArticles();
  const allSlugs = allArticles.map((article: DevToArticleMeta) => article.slug);
  const paths = allSlugs.map((slug: string) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export default BlogPostPage;
