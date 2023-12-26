import prisma from '../dbClient.js'

import { getPersonalData } from '../ext-src/queries.js'


export default async function (args, context) {
  return (getPersonalData as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      PersonalData: prisma.personalData,
    },
  })
}

export type GetPersonalData = typeof getPersonalData 
