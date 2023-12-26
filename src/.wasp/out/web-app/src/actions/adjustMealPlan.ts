import { createAction } from './core'
import { AdjustMealPlan } from '../../../server/src/actions/adjustMealPlan'

const action = createAction<AdjustMealPlan>(
  'operations/adjust-meal-plan',
  ['User', 'PersonalData', 'MealPlan'],
)

export default action
