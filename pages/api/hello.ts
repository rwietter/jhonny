// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import $prisma from 'prisma/prisma'

interface Song {
  album: string
  name: string
  year: number
  id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET': {
        const performances = await $prisma.performances.findMany({
          include: { songs: true },
        });

        return res.status(200).json(performances)
      }
      case 'POST': {
        const { local, date, songsIds } = req.body

        const performances = await $prisma.performances.create({
          data: {
            date,
            local,
            songs: {
              connect: songsIds.map((id: string) => ({
                performance_id_song_id: {
                  song_id: id,
                  performance_id: date
                }
              }))
            },
          }
        })

        return res.status(200).json(performances)
      }
      case 'PUT': {
        const { id, local, date, songs } = req.body

        const performances = await $prisma.performances.update({
          where: {
            id
          },
          data: {
            date,
            local,
            songs: {
              create: songs.map((song: any) => ({
                album: song.album,
                artist: song.artist,
                genre: song.genre,
                title: song.title,
                year: song.year
              }))
            }
          }
        })

        return res.status(200).json(performances)
      }

      case 'DELETE': {
        const { id } = req.body

        const performances = await $prisma.songs.deleteMany()

        return res.status(200).json(performances)
      }
      default:
        break
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
