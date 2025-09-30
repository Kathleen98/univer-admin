import z from 'zod'

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
  isOriginal: z.boolean()
})

export type addContentData = z.infer<typeof SchemaAddContents>