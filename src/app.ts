import * as http from "http";

import { getListEpisodes } from "./controllers/podscasts-controller";
import { getFilterEpisodes } from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";
import { httpMethods } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse) => {

  const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

  console.log(baseUrl);
  console.log(queryString);

  if (request.method === httpMethods.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === httpMethods.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
}