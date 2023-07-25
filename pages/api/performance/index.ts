// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import $prisma from 'prisma/prisma'
import { z } from 'zod';

const schema = z.object({
  local: z.string(),
  date: z.string(),
  songs: z.array(z.string()),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET': {
   
      }
      case 'POST': {
        const { date, local, songs } = schema.parse(req.body)

        const dateParsed = date.split('/').reverse().join('-')

        const createdPerformance = await $prisma.performances.create({
          data: {
            date: new Date(dateParsed),
            local,
            link: '',
            songs: {
              createMany: {
                data: songs.map((song) => ({ song_id: song })),
              }
            },
          },
        })

        if (!createdPerformance) return res.status(500).json({ message: 'Error creating performance' })

        const performances = await $prisma.performances.findMany()

        return res.status(200).json(performances)
      }
      case 'PUT': {
        
      }
      default:
        break
    }
  } catch (error: any) {
    console.error(error)
    return res.status(500).json(error)
  }
}
