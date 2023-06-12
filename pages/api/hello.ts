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
      case 'GET': { }
      case 'POST': { }
      case 'PUT': { }
      case 'DELETE': { }
      default:
        break
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
