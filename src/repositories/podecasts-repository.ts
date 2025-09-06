import * as fs from "fs";
import * as path from "path";
import { PodcastModel } from "../models/podecast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodecast = async (podcastName?: string): Promise<PodcastModel[]> => {
  const linguage = "utf-8";

  const rawData = fs.readFileSync(pathData, linguage);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter((podecast: PodcastModel) => podecast.podcastName === podcastName);
  }

  if (podcastName) {
    jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
  }

  return jsonFile;
};

