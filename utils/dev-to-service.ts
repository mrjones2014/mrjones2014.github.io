import DevToArticle from "interfaces/dev-to-article";
import superagent from "superagent";

const DEV_TO_USERNAME = "matjones";
const ARTICLES_API = `https://dev.to/api/articles`;
const DEFAULT_QUERY = Object.freeze({ username: DEV_TO_USERNAME });

const fetchArticles = async (limit?: number): Promise<Array<DevToArticle>> => {
  const query = Object.assign({}, DEFAULT_QUERY, { per_page: limit });
  const result = await superagent.get(ARTICLES_API).query(query);
  return result.body as Array<DevToArticle>;
};

export const DevToService = {
  fetchArticles,
};
