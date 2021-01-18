import DevToArticle from "interfaces/dev-to-article";
import DevToArticleMeta from "interfaces/dev-to-article-meta";
import superagent from "superagent";

const DEV_TO_USERNAME = "matjones";
const ARTICLES_API = `https://dev.to/api/articles`;
const DEFAULT_QUERY = Object.freeze({ username: DEV_TO_USERNAME });

const parseResponse = <T>(response: any): T =>
  (typeof response === "string" ? JSON.parse(response) : response) as T;

const fetchArticles = async (
  limit?: number,
): Promise<Array<DevToArticleMeta>> => {
  const query = Object.assign({}, DEFAULT_QUERY, { per_page: limit });
  const response = await superagent.get(ARTICLES_API).query(query);
  return parseResponse<Array<DevToArticleMeta>>(response.body);
};

const getArticle = async (slug: string): Promise<DevToArticle> => {
  const endpoint = `${ARTICLES_API}/${DEV_TO_USERNAME}/${slug}`;
  const response = await superagent.get(endpoint);
  return parseResponse<DevToArticle>(response.body);
};

export const DevToService = {
  fetchArticles,
  getArticle,
};
