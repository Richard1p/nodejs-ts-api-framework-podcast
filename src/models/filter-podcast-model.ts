import { PodcastModel } from "./podecast-model";


export interface FilterPodcastModel {
  statusCode: number;
  body: PodcastModel[];
}