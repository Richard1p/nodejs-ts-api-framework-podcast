import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodecast } from "../repositories/podecasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async () => {

  let reponseFomat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodecast();

  reponseFomat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  reponseFomat.body = data;
  return data;
};
