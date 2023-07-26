import { PrismaClient } from '@prisma/client'

let $prisma

// This is a singleton, so we check if it exists first
if (process.env.NODE_ENV === 'production') {
  $prisma = new PrismaClient()
} else {
  if (!$prisma) {
    $prisma = new PrismaClient()
  }
  $prisma = $prisma
}

export default $prisma satisfies PrismaClient
