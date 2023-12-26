import { createQuery } from './core'
import { GetFoodItems } from '../../../server/src/queries/getFoodItems'


const query = createQuery<GetFoodItems>(
  'operations/get-food-items',
  ['MealPlan'],
)

export default query
