import {
  User,
  PersonalData,
  MealPlan,
} from '@prisma/client'
  
export type {
  User,
  PersonalData,
  MealPlan,
} from '@prisma/client'

export type Entity = 
  | User
  | PersonalData
  | MealPlan
  | never
