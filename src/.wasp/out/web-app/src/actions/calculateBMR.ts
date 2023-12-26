import { createAction } from './core'
import { CalculateBMR } from '../../../server/src/actions/calculateBMR'

const action = createAction<CalculateBMR>(
  'operations/calculate-bmr',
  ['PersonalData', 'User'],
)

export default action
