
import {
  type _User,
  type _PersonalData,
  type _MealPlan,
  type AuthenticatedQuery,
  type Payload,
} from '../_types'

export type GetPersonalData<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQuery<
    [
      _User,
      _PersonalData,
    ],
    Input,
    Output
  >

export type GetMealPlan<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQuery<
    [
      _User,
      _MealPlan,
    ],
    Input,
    Output
  >

export type GetFoodItems<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQuery<
    [
      _MealPlan,
    ],
    Input,
    Output
  >

