# Podcast Menager

### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episódios podcasts

### Domíno
Podcasts feito em vídeo

### Features
- Listar os episódios podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast


## Como fazer

### Feature:
 Listar os episódios dos podcasts em sessões de categorias

### Como vou implementar:

GET: retorna lista de episódios

```js
[
  ''{
  podcastName: "flow",
  episode: "CBUM - Flow #319",
  videoID: "hqdefault",
  cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?
  sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg=&rs=A0n4CLC4StKVMSNz3eXH6WV2s3phlBT8KQ",
  link: "https://www.youtube.com/watch?v=pQSuQmUfS30"
  categories: ["saúde", "esporte", "bodybuilder"]
  },
  {
  podcastName: "flow",
  episode: "RUBENS BARRICHELLO Flow #339",
  videoID: "4KDGTdiOV4I",
  cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=4KDGTdi0V4I"
  categories: ["esporte", "corrida"]
  },
]
```

