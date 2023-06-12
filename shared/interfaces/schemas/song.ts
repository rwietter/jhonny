import zod from 'zod'

export const songSchema = zod.object({
  name: zod.string().min(3),
  youtube: zod.string().min(3),
  spotify: zod.string().min(4),
  year: zod.string().min(4),
  id: zod.string().optional(),
})
