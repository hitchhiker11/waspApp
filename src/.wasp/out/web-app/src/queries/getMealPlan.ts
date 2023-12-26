import { createQuery } from './core'
import { GetMealPlan } from '../../../server/src/queries/getMealPlan'


const query = createQuery<GetMealPlan>(
  'operations/get-meal-plan',
  ['User', 'MealPlan'],
)

export default query
