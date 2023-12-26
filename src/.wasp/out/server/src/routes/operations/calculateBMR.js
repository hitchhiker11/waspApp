import { createAction } from '../../middleware/operations.js'
import calculateBMR from '../../actions/calculateBMR.js'

export default createAction(calculateBMR)
