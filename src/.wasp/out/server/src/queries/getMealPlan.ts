import prisma from '../dbClient.js'

import { getMealPlan } from '../ext-src/queries.js'


export default async function (args, context) {
  return (getMealPlan as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      MealPlan: prisma.mealPlan,
    },
  })
}

export type GetMealPlan = typeof getMealPlan 
