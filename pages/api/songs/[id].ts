import type { NextApiRequest, NextApiResponse } from 'next'
import $prisma from 'prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'DELETE': {
        const { id } = req.query


        if (!id) return res.status(400).json({ message: 'Missing id' })

        const deletedSong = await $prisma.songs.delete({
          where: { id: String(id) }
        })

        if (!deletedSong) return res.status(404).json({ message: 'Song not found' })

        const songs = await $prisma.songs.findMany()

        return res.status(200).json(songs)
      }
      default:
        break
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
