import z from 'zod'

export const SchemaEpisodes = z.object({
  id: z.string(),
  seasonId: z.string(),
  episodeNumber: z.number(),
  title: z.string(),
  description: z.string(),
  duration: z.number(),
  videoUrl: z.string(),
  thumbnailUrl: z.string(),
  introStartTime: z.number(),
  introEndTime: z.number(),

})

export const SchemaSeasons = z.object({
  id: z.string(),
  videoId: z.string(),
  seasonNumber: z.number(),
  title: z.string(),
  description: z.string(),
  releaseDate: z.string(),
  episodes: z.object({ SchemaEpisodes }),

})

export const SchemaAddContents = z.object({
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  description: z.string(),
  duration: z.string(),
  releaseDate: z.string(),
  videoUrl: z.string(),
  thumbnailUrl: z.string(),
  trailerUrl: z.string(),
  introStartTime: z.number(),
  introEndTime: z.number(),
  ageRating: z.string(),
  type: z.string(),
  status: z.string(),
  gender: z.string(),
  isOriginal: z.boolean(),
  seasons: z.array(z.object({ SchemaSeasons }))
})



export type addContentData = z.infer<typeof SchemaAddContents>