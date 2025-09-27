import z from 'zod'

export const SchemaAddContents = z.object({
  title: z.string(),
  category: z.string(),
  status: z.string(),
  gender: z.array(z.string()),
  duration: z.date(),
  releaseDate: z.date(),
  description: z.string()
})

export type addContentData = z.infer<typeof SchemaAddContents>