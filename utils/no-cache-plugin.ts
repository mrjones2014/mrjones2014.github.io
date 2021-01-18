import { SuperAgentRequest } from "superagent";

/**
 * Hack to get around API caching by adding a timestamp
 * to the request
 * @param request
 */
export default function SuperagentNoCache(request: any) {
  const timestamp = Date.now().toString();
  if (request._query != null && request._query[0] != null) {
    request._query[0] += `&${timestamp}`;
  } else {
    request._query = [timestamp];
  }
}
