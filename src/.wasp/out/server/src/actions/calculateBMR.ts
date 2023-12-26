import prisma from '../dbClient.js'

import { calculateBMR } from '../ext-src/actions.js'


export default async function (args, context) {
  return (calculateBMR as any)(args, {
    ...context,
    entities: {
      PersonalData: prisma.personalData,
      User: prisma.user,
    },
  })
}

export type CalculateBMR = typeof calculateBMR 
