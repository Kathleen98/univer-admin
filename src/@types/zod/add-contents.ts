import z from 'zod'

export const SchemaAddContents = z.object({
  title: z.string(),
  category: z.string(),
  status: z.string(),
  gender: z.string(),
  duration: z.string(),
  releaseDate: z.string(),
  description: z.string()
})

export type addContentData = z.infer<typeof SchemaAddContents>