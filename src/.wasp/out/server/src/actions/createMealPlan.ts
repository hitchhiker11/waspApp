import prisma from '../dbClient.js'

import { createMealPlan } from '../ext-src/actions.js'


export default async function (args, context) {
  return (createMealPlan as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      PersonalData: prisma.personalData,
      MealPlan: prisma.mealPlan,
    },
  })
}

export type CreateMealPlan = typeof createMealPlan 
