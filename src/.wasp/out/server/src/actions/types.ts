import {
  type _PersonalData,
  type _User,
  type _MealPlan,
  type AuthenticatedAction,
  type Payload,
} from '../_types'

export type CalculateBMR<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _PersonalData,
      _User,
    ],
    Input,
    Output
  >

export type CreateMealPlan<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _User,
      _PersonalData,
      _MealPlan,
    ],
    Input,
    Output
  >

export type AdjustMealPlan<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _User,
      _PersonalData,
      _MealPlan,
    ],
    Input,
    Output
  >

