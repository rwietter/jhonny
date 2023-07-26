// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import $prisma from 'prisma/prisma'
import { songSchema } from 'shared/interfaces/schemas'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET': {
        const songs = await $prisma.songs.findMany()

        if (!songs) return res.status(404).json({ message: 'No songs found' })

        return res.status(200).json(songs)
      }
      case 'POST': {
        const { spotify, youtube, name, year } = songSchema.parse(req.body)

        const createdSongs = await $prisma.songs.create({
          data: {
            name,
            spotify,
            youtube,
            year: Number(year),
          }
        })

        if (!createdSongs) return res.status(500).json({ message: 'Error creating song' })

        const songs = await $prisma.songs.findMany()

        return res.status(200).json(songs)
      }
      case 'PUT': {
        const { id, spotify, youtube, name, year } = songSchema.parse(req.body)

        const updatedSongs = await $prisma.songs.update({
          where: {
            id: String(id)
          },
          data: {
            name,
            spotify,
            youtube,
            year: Number(year),
          }
        })

        if (!updatedSongs) return res.status(500).json({ message: 'Error updating song' })

        return res.status(200).json(updatedSongs)
      }
      default:
        break
    }
  } catch (error: any) {
    console.error(error)
    return res.status(500).json(error)
  }
}
