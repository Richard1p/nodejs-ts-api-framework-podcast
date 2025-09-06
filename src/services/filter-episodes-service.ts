import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodecast } from "../repositories/podecasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined
): Promise<FilterPodcastModel> => {

  let reponseFomat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodecast(queryString);

  reponseFomat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  reponseFomat.body = data;

  return reponseFomat;
};


