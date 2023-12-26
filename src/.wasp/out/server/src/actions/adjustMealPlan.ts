import prisma from '../dbClient.js'

import { adjustMealPlan } from '../ext-src/actions.js'


export default async function (args, context) {
  return (adjustMealPlan as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      PersonalData: prisma.personalData,
      MealPlan: prisma.mealPlan,
    },
  })
}

export type AdjustMealPlan = typeof adjustMealPlan 
