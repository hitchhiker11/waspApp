import prisma from '../dbClient.js'

import { getFoodItems } from '../ext-src/queries.js'


export default async function (args, context) {
  return (getFoodItems as any)(args, {
    ...context,
    entities: {
      MealPlan: prisma.mealPlan,
    },
  })
}

export type GetFoodItems = typeof getFoodItems 
