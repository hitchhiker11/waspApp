import {
  type User,
  type PersonalData,
  type MealPlan,
} from "@prisma/client"

export {
  type User,
  type PersonalData,
  type MealPlan,
} from "@prisma/client"

export type Entity = 
  | User
  | PersonalData
  | MealPlan
  | never

export type EntityName = 
  | "User"
  | "PersonalData"
  | "MealPlan"
  | never
