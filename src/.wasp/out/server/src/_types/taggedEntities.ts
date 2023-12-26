// Wasp internally uses the types defined in this file for typing entity maps in
// operation contexts.
//
// We must explicitly tag all entities with their name to avoid issues with
// structural typing. See https://github.com/wasp-lang/wasp/pull/982 for details.
import { 
  type Entity, 
  type EntityName,
  type User,
  type PersonalData,
  type MealPlan,
} from '../entities'

export type _User = WithName<User, "User">
export type _PersonalData = WithName<PersonalData, "PersonalData">
export type _MealPlan = WithName<MealPlan, "MealPlan">

export type _Entity = 
  | _User
  | _PersonalData
  | _MealPlan
  | never

type WithName<E extends Entity, Name extends EntityName> = 
  E & { _entityName: Name }
