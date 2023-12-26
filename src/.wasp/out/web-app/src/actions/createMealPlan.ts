import { createAction } from './core'
import { CreateMealPlan } from '../../../server/src/actions/createMealPlan'

const action = createAction<CreateMealPlan>(
  'operations/create-meal-plan',
  ['User', 'PersonalData', 'MealPlan'],
)

export default action
